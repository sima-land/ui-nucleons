import React, { Component, createRef } from 'react';
import withGlobalListeners from '../hoc/with-global-listeners';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import curry from 'lodash/fp/curry';
import __ from 'lodash/fp/placeholder';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './draggable.scss';

const cx = classnames.bind(classes);

const eventNames = {
  move: ['mousemove', 'touchmove'],
  moveEnd: ['mouseup', 'touchend', 'touchcancel'],
};

/**
 * Проверяет, является ли переданное событие touch-событием.
 * @param {Event} event Событие.
 * @return {boolean} Является ли переданное событие touch-событием.
 */
const isTouchEvent = event => Boolean(event && event.touches);

/**
 * Берет данные позиции из события.
 * @param {Event} event Touch- или Mouse-событие.
 * @return {{ x: number, y: number }} Данные позиции.
 */
const getEventClientPos = event => {
  const source = isTouchEvent(event) ? event.touches[0] : event;
  const { clientX: x, clientY: y } = source;

  return { x, y };
};

/**
 * Создает событие перемещения по координатам смещения.
 * @param {number} x Координата X.
 * @param {number} y Координата Y.
 * @return {{ offset: { x: number, y: number } }} Событие.
 */
const DragEvent = (x, y) => ({ offset: { x, y } });

/**
 * Компонент области, которую можно прокручивать перетаскиванием.
 */
export class Draggable extends Component {
  /**
   * Конструктор компонента области, которую можно прокручивать перетаскиванием.
   * @param {Object} props Свойства.
   */
  constructor (props) {
    const { offsetX, offsetY } = props;

    super(props);

    this.state = {
      offsetX: isNumber(offsetX) ? offsetX : 0,
      offsetY: isNumber(offsetY) ? offsetY : 0,
      isCaptured: false,
    };
    this.clientPosition = {
      x: 0,
      y: 0,
    };
    this.draggableRef = createRef();
    this.startCapture = this.startCapture.bind(this);
  }

  /**
   * Выполняет подписку на все необходимые глобальные события.
   * Сохраняет функции для отписки.
   */
  componentDidMount () {
    const { addGlobalListener } = this.props;
    const listen = curry(addGlobalListener, 2);
    const moveHandler = this.handleMove.bind(this);
    const moveEndHandler = this.handleMoveEnd.bind(this);

    this.unsubscribers = [
      ...eventNames.move.map(listen(__, moveHandler)),
      ...eventNames.moveEnd.map(listen(__, moveEndHandler)),
    ];
  }

  /**
   * При обновлении свойств данных смещения сохраняет их в состоянии.
   * @inheritdoc
   */
  componentDidUpdate (prevProps) {
    const { offsetX: prevOffsetX, offsetY: prevOffsetY } = prevProps;
    const { offsetX, offsetY } = this.props;

    if (prevOffsetX !== offsetX || prevOffsetY !== offsetY) {
      this.setState({
        offsetX,
        offsetY,
      });
    }
  }

  /**
   * Выполняет отписку на все необходимые глобальные события.
   */
  componentWillUnmount () {
    this.unsubscribers.forEach(
      unsubscribe => unsubscribe()
    );
  }

  /**
   * Обновляет смещение контента по touch- или mouse-событию движения.
   * Вызывает соответствующий callback.
   * @param {Event} event Touch- или mouse-событие.
   */
  handleMove (event) {
    const { axis, onDrag } = this.props;

    if (this.state.isCaptured) {
      const { dx, dy } = this.getMouseDelta(event);
      const offsetX = this.state.offsetX - (axis !== 'y' ? dx : 0);
      const offsetY = this.state.offsetY - (axis !== 'x' ? dy : 0);

      // предотвращаем выделение при зажатой кнопке мыши
      !isTouchEvent(event) && event.preventDefault();

      isFunction(onDrag) && onDrag(DragEvent(offsetX, offsetY));

      this.setState({ offsetX, offsetY });
      this.saveClientPosition(event);
    }
  }

  /**
   * Обновляет смещение контента по touch- или mouse-событию завершения движения.
   */
  handleMoveEnd () {
    const { isCaptured, offsetX, offsetY } = this.state;
    const { onDragEnd } = this.props;

    if (isCaptured && isFunction(onDragEnd)) {
      onDragEnd(DragEvent(offsetX, offsetY));
    }

    this.setIsCaptured(false);
  }

  /**
   * Возвращает разницу последней сохраненной позиции и позиции в переданном событии.
   * @param {Event} event Touch- или mouse-событие.
   * @return {{ dx: number, dy: number }} Разница.
   */
  getMouseDelta (event) {
    const eventPos = getEventClientPos(event);
    return {
      dx: this.clientPosition.x - eventPos.x,
      dy: this.clientPosition.y - eventPos.y,
    };
  }

  /**
   * Запускает захват по touch- или mouse-событию.
   * @param {Event} event Touch- или mouse-событие.
   */
  startCapture (event) {
    const { offsetX, offsetY } = this.state;
    const { active = true, onDragStart } = this.props;

    if (active) {
      this.setIsCaptured(true);
      this.saveClientPosition(event);

      isFunction(onDragStart) && onDragStart(
        DragEvent(offsetX, offsetY)
      );
    }
  }

  /**
   * Устанавливает в состоянии флаг isCaptured.
   * @param {boolean} isCaptured Активен ли захват.
   */
  setIsCaptured (isCaptured) {
    this.setState({ isCaptured: Boolean(isCaptured) });
  }

  /**
   * Сохраняет позицию из touch- или mouse-события.
   * @param {Event} event Touch- или mouse-событие.
   */
  saveClientPosition (event) {
    const eventPos = getEventClientPos(event);

    this.clientPosition.x = eventPos.x;
    this.clientPosition.y = eventPos.y;
  }

  /**
   * Возвращает компонент.
   * @inheritdoc
   */
  render () {
    const {
      offsetX,
      offsetY,
      isCaptured,
    } = this.state;
    const {
      children,
      containerProps = {},
      transitionDuration: duration,
    } = this.props;

    return (
      <div
        {...containerProps}
        className={cx(
          'draggable-container',
          containerProps.className
        )}
        onMouseDown={this.startCapture}
        onTouchStart={this.startCapture}
      >
        <div
          ref={this.draggableRef}
          className={cx('draggable')}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            transition: !isCaptured && isNumber(duration)
              ? `transform ${duration}ms ease-out`
              : null,
          }}
          children={children}
        />
      </div>
    );
  }
}

Draggable.propTypes = {
  /**
   * Смещение по оси абсцисс.
   */
  offsetX: PropTypes.number,

  /**
   * Смещение по оси ординат.
   */
  offsetY: PropTypes.number,

  /**
   * Ось, по которой можно смещать контент.
   */
  axis: PropTypes.oneOf(['x', 'y']),

  /**
   * Должна выполнить подписку на глобальное событие и вернуть функцию отписки.
   */
  addGlobalListener: PropTypes.func,

  /**
   * Сработает при захвате контента мышью или пальцем.
   */
  onDragStart: PropTypes.func,

  /**
   * Сработает при перемещении контента.
   */
  onDrag: PropTypes.func,

  /**
   * Сработает при завершении захвата контента мышью или пальцем.
   */
  onDragEnd: PropTypes.func,

  /**
   * Включена ли возможность перетаскивания.
   */
  active: PropTypes.bool,

  /**
   * Содержимое.
   */
  children: PropTypes.any,

  /**
   * Свойства контейнера.
   */
  containerProps: PropTypes.object,

  /**
   * Длительность плавного перехода при изменении offsetX/offsetY.
   */
  transitionDuration: PropTypes.number,
};

export default withGlobalListeners(Draggable);

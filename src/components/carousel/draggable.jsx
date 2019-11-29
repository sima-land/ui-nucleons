import React, { createRef, PureComponent } from 'react';
import withGlobalListeners from '../hoc/with-global-listeners';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import curry from 'lodash/fp/curry';
import __ from 'lodash/fp/placeholder';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './draggable.scss';

const cx = classnames.bind(classes);

const EVENT_NAMES = {
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
const DraggableEvent = (x, y) => ({ offset: { x, y } });

/**
 * Возвращает строку значения CSS-свойства "transition".
 * @param {number} [duration=0] Длительность перехода в миллисекундах.
 * @param {string} [property='transform'] Имя свойства.
 * @param {string} [easing='ease-out'] Функция плавности.
 * @return {string} Значение CSS-свойства "transition".
 */
const getTransitionStyle = (
  duration,
  property = 'transform',
  easing = 'ease-out'
) => `${property} ${isNumber(duration) ? duration : 0}ms ${easing}`;

/**
 * Возвращает строку значения CSS-свойства с трансформацией смещения.
 * @param {number} x Смещение по оси абсцисс в пикселях.
 * @param {number} y Смещение по оси ординат в пикселях.
 * @return {string} Значение CSS-свойства с трансформацией смещения.
 */
const getTranslateStyle = (x, y) => `translate(${x}px, ${y}px)`;

/**
 * Компонент области, которую можно прокручивать перетаскиванием.
 */
export class Draggable extends PureComponent {
  /**
   * Конструктор компонента области, которую можно прокручивать перетаскиванием.
   * @param {Object} props Свойства.
   */
  constructor (props) {
    super(props);

    this.isCaptured = false;
    this.hasTransition = false;
    this.currentOffset = { x: 0, y: 0 };
    this.clientPosition = { x: 0, y: 0 };
    this.draggableRef = createRef();
    this.startCapture = this.startCapture.bind(this);
  }

  /**
   * Запускает инициализацию обработки глобальных событий.
   * Запускает передачу управления родительскому компоненту.
   */
  componentDidMount () {
    this.initGlobalListeners();
    this.passControl();
  }

  /**
   * Инициализирует обработчики глобальных событий.
   */
  initGlobalListeners () {
    const { addGlobalListener } = this.props;
    const listen = curry(addGlobalListener);
    const moveHandler = this.handleMove.bind(this);
    const moveEndHandler = this.handleMoveEnd.bind(this);

    this.unsubscribers = [
      ...EVENT_NAMES.move.map(listen(__, moveHandler)),
      ...EVENT_NAMES.moveEnd.map(listen(__, moveEndHandler)),
    ];
  }

  /**
   * Передает управление родительскому компоненту через "initControl".
   */
  passControl () {
    const { initControl } = this.props;

    isFunction(initControl) && initControl({
      setOffset: this.setOffset.bind(this),
      toggleTransition: this.toggleTransition.bind(this),
    });
  }

  /**
   * Выполняет отписку от глобальных событий.
   */
  componentWillUnmount () {
    this.unsubscribers.forEach(unsubscribe => unsubscribe());
  }

  /**
   * Сохраняет данные захвата по событию клика/прикосновения.
   * @param {MouseEvent|TouchEvent} event Событие передвижения.
   */
  startCapture (event) {
    const { x, y } = this.currentOffset;
    const { active = true, onDragStart } = this.props;

    if (active) {
      this.toggleCaptured(true);
      this.saveClientPosition(event);

      isFunction(onDragStart) && onDragStart(DraggableEvent(x, y));
    }
  }

  /**
   * Обновляет смещение и все данные при необходимости.
   * @param {MouseEvent|TouchEvent} event Событие передвижения.
   */
  handleMove (event) {
    const { axis, onDrag } = this.props;

    if (this.isCaptured) {
      const { x, y } = this.currentOffset;
      const { dx, dy } = this.getClientDelta(event);
      const offsetX = x - (axis !== 'y' ? dx : 0);
      const offsetY = y - (axis !== 'x' ? dy : 0);

      // предотвращаем выделение при зажатой кнопке мыши
      !isTouchEvent(event) && event.preventDefault();

      isFunction(onDrag) && onDrag(DraggableEvent(offsetX, offsetY));

      this.saveClientPosition(event);
      this.setOffset(offsetX, offsetY);
    }
  }

  /**
   * Отключает захват движения.
   * Запускает соответствующий callback.
   */
  handleMoveEnd () {
    const { x, y } = this.currentOffset;
    const { onDragEnd } = this.props;

    if (this.isCaptured && isFunction(onDragEnd)) {
      onDragEnd(DraggableEvent(x, y));
    }

    this.toggleCaptured(false);
  }

  /**
   * Возвращает разницу последней сохраненной позиции и позиции в переданном событии.
   * @param {Event} event Touch- или mouse-событие.
   * @return {{ dx: number, dy: number }} Разница.
   */
  getClientDelta (event) {
    const eventPos = getEventClientPos(event);

    return {
      dx: this.clientPosition.x - eventPos.x,
      dy: this.clientPosition.y - eventPos.y,
    };
  }

  /**
   * Переключает состояние активности захвата движения.
   * @param {boolean} active  Активен ли захват движения.
   */
  toggleCaptured (active) {
    this.isCaptured = Boolean(active);
  }

  /**
   * Сохраняет данные позиции на экземпляре.
   * @param {MouseEvent|TouchEvent} event Событие.
   */
  saveClientPosition (event) {
    const eventPos = getEventClientPos(event);

    this.clientPosition.x = eventPos.x;
    this.clientPosition.y = eventPos.y;
  }

  /**
   * Переключает состояние плавного перехода через CSS-свойство "transition".
   * @param {boolean} active Нужен ли плавный переход.
   */
  toggleTransition (active) {
    const { transitionDuration: duration = 320 } = this.props;
    const { current: draggableEl } = this.draggableRef;

    if (this.hasTransition !== Boolean(active)) {
      this.hasTransition = Boolean(active);

      draggableEl.style.transition = active
        ? getTransitionStyle(duration)
        : null;
    }
  }

  /**
   * Устанавливает смещение через CSS-свойство transform.
   * Сохраняет данные смещения на экземпляре.
   * @param {number} x Смещение по оси абсцисс.
   * @param {number} y Смещение по оси ординат.
   */
  setOffset (x, y) {
    const { current: draggableEl } = this.draggableRef;

    this.currentOffset.x = x || 0;
    this.currentOffset.y = y || 0;

    draggableEl.style.transform = getTranslateStyle(x, y);
  }

  /**
   * Возвращает компонент.
   * @inheritdoc
   */
  render () {
    const {
      children,
      containerProps = {},
      transitionDuration: duration = 320,
    } = this.props;
    const { x, y } = this.currentOffset;

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
          style={{
            transform: getTranslateStyle(x, y),
            transition: this.hasTransition
              ? getTransitionStyle(duration)
              : null,
          }}
          className={cx('draggable')}
          children={children}
        />
      </div>
    );
  }
}

Draggable.propTypes = {
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

  /**
   * Получит интерфейс управления областью.
   */
  initControl: PropTypes.func,
};

export default withGlobalListeners(Draggable);

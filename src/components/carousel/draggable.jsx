import React, { createRef, Component } from 'react';
import withGlobalListeners from '../hoc/with-global-listeners';
import __ from 'lodash/fp/placeholder';
import curry from 'lodash/fp/curry';
import isFunction from 'lodash/isFunction';
import Point from '../helpers/point';
import DraggableEvent from './helpers/draggable-event';
import PropTypes from 'prop-types';
import { getTransitionStyle, getTranslateStyle } from '../helpers/styles';
import { isMainMouseButton, isTouchEvent, getEventClientPos } from '../helpers/events';
import classnames from 'classnames/bind';
import classes from './draggable.scss';

const cx = classnames.bind(classes);

const EVENT_NAMES = {
  move: ['mousemove', 'touchmove'],
  moveEnd: ['mouseup', 'touchend', 'touchcancel'],
};

/**
 * Компонент области, которую можно прокручивать перетаскиванием.
 */
export class Draggable extends Component {
  /**
   * Конструктор компонента области, которую можно прокручивать перетаскиванием.
   */
  constructor () {
    super();

    this.isGrabbed = false;
    this.hasTransition = false;
    this.needPreventClick = false;
    this.currentOffset = Point();
    this.clientPosition = Point();
    this.draggableRef = createRef();
    this.handleClick = this.handleClick.bind(this);
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
   * Передает управление родительскому компоненту через "takeControl".
   */
  passControl () {
    const { takeControl } = this.props;

    isFunction(takeControl) && takeControl({
      isGrabbed: () => this.isGrabbed,
      setOffset: this.setOffset.bind(this),
      toggleTransition: this.toggleTransition.bind(this),
    });
  }

  /**
   * Выполняет отписку от глобальных событий.
   */
  componentWillUnmount () {
    this.unsubscribers.forEach(fn => fn());
  }

  /**
   * Сохраняет данные захвата по событию клика/прикосновения.
   * @param {MouseEvent|TouchEvent} event Событие передвижения.
   */
  startCapture (event) {
    const { x, y } = this.currentOffset;
    const { active = true, onDragStart } = this.props;
    const isTouch = isTouchEvent(event);

    if (active && (isMainMouseButton(event) || isTouch)) {
      this.toggleGrabbed(true);
      this.saveClientPosition(event);

      if (!isTouch) {
        event.preventDefault();
        window.getSelection().removeAllRanges();
      }

      isFunction(onDragStart) && onDragStart(new DraggableEvent({
        offset: Point(x, y),
        client: getEventClientPos(event),
      }));
    }
  }

  /**
   * Обновляет смещение и все данные при необходимости.
   * @param {MouseEvent|TouchEvent} event Событие передвижения.
   */
  handleMove (event) {
    const { axis, onDragMove } = this.props;

    if (this.isGrabbed) {
      const { x, y } = this.currentOffset;
      const { dx, dy } = this.getClientDelta(event);
      const offsetX = x - (axis !== 'y' ? dx : 0);
      const offsetY = y - (axis !== 'x' ? dy : 0);
      const customEvent = new DraggableEvent({
        offset: Point(x, y),
        client: getEventClientPos(event),
      });

      this.togglePreventClickNeed(true);

      // prevent selection
      if (!isTouchEvent(event)) {
        event.preventDefault();
        window.getSelection().removeAllRanges();
      }

      isFunction(onDragMove) && onDragMove(customEvent);

      if (!customEvent.prevented) {
        this.saveClientPosition(event);
        this.setOffset(offsetX, offsetY);
      }
    }
  }

  /**
   * Отключает захват движения.
   * Запускает соответствующий callback.
   * @param {MouseEvent|TouchEvent} event Событие окончания захвата.
   */
  handleMoveEnd (event) {
    const { x: clientX, y: clientY } = this.clientPosition;
    const { x, y } = this.currentOffset;
    const { onDragEnd } = this.props;

    if (this.isGrabbed && isFunction(onDragEnd)) {
      !isTouchEvent(event) && event.preventDefault();
      onDragEnd(new DraggableEvent({
        offset: Point(x, y),
        client: Point(clientX, clientY),
      }));
    }

    this.toggleGrabbed(false);
  }

  /**
   * Предотвращает клик если было произведено смещение мышью.
   * @param {MouseEvent} event Событие окончания захвата.
   */
  handleClick (event) {
    if (this.needPreventClick) {
      event.preventDefault();
      this.togglePreventClickNeed(false);
    }
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
   * @param {boolean} active Активен ли захват движения.
   */
  toggleGrabbed (active) {
    this.isGrabbed = Boolean(active);
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
        ? getTransitionStyle(duration, 'transform')
        : null;
    }
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
   * Переключает состояние необходимости предотвратить клик.
   * @param {boolean} needPrevent Активен ли захват движения.
   */
  togglePreventClickNeed (needPrevent) {
    this.needPreventClick = Boolean(needPrevent);
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
        onClick={this.handleClick}
        onMouseDown={this.startCapture}
        onTouchStart={this.startCapture}
      >
        <div
          ref={this.draggableRef}
          style={{
            transform: getTranslateStyle(x, y),
            transition: this.hasTransition
              ? getTransitionStyle(duration, 'transform')
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
  onDragMove: PropTypes.func,

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
  takeControl: PropTypes.func,
};

export default withGlobalListeners(Draggable);

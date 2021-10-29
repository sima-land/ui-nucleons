import React, { createRef, Component } from 'react';
import Point, { IPoint } from '../helpers/point';
import DraggableEvent from './helpers/draggable-event';
import { getTransitionStyle, getTranslateStyle } from '../helpers/styles';
import {
  isMainMouseButton,
  isTouchEvent,
  getEventClientPos,
  EventWithPosition,
} from '../helpers/events';
import classnames from 'classnames/bind';
import classes from './draggable.module.scss';
import on from '../helpers/on';

export interface Control {
  isGrabbed: () => boolean;
  setOffset: typeof Draggable.prototype.setOffset;
  toggleTransition: typeof Draggable.prototype.toggleTransition;
}

export type Delta2d = { dx: number; dy: number };

export type DraggableEventHandler = (e: DraggableEvent) => void;

export interface DraggableProps {
  axis?: 'x' | 'y';
  active?: boolean;
  onDragStart?: DraggableEventHandler;
  onDragMove?: DraggableEventHandler;
  onDragEnd?: DraggableEventHandler;
  takeControl?: (c: Control) => void;
  transitionDuration?: number;
  containerProps?: React.HTMLProps<HTMLDivElement>;
}

type Cb = () => void;

const cx = classnames.bind(classes);

const EVENT_NAMES = {
  move: ['mousemove', 'touchmove'],
  moveEnd: ['mouseup', 'touchend', 'touchcancel'],
} as const;

/**
 * Компонент области, которую можно прокручивать перетаскиванием.
 */
export default class Draggable extends Component<DraggableProps> {
  isGrabbed: boolean;
  hasTransition: boolean;
  needPreventClick: boolean;
  currentOffset: IPoint;
  clientPosition: IPoint;
  draggableRef: React.RefObject<HTMLDivElement>;
  offList: Array<Cb>;

  /**
   * Конструктор компонента области, которую можно прокручивать перетаскиванием.
   * @param props Свойства.
   */
  constructor(props: DraggableProps) {
    super(props);

    this.isGrabbed = false;
    this.hasTransition = false;
    this.needPreventClick = false;
    this.currentOffset = Point();
    this.clientPosition = Point();
    this.draggableRef = createRef();
    this.handleClick = this.handleClick.bind(this);
    this.startCapture = this.startCapture.bind(this);
    this.offList = [];
  }

  /**
   * Запускает инициализацию обработки глобальных событий.
   * Запускает передачу управления родительскому компоненту.
   */
  componentDidMount() {
    this.initGlobalListeners();
    this.passControl();
  }

  /**
   * Инициализирует обработчики глобальных событий.
   */
  initGlobalListeners() {
    // eslint-disable-next-line require-jsdoc
    const listen = (fn: (e: MouseEvent | TouchEvent) => void) => (eventName: string) =>
      on<MouseEvent | TouchEvent>(window, eventName, fn);

    const moveHandler = this.handleMove.bind(this);
    const moveEndHandler = this.handleMoveEnd.bind(this);

    this.offList = [
      ...EVENT_NAMES.move.map(listen(moveHandler)),
      ...EVENT_NAMES.moveEnd.map(listen(moveEndHandler)),
    ];
  }

  /**
   * Передает управление родительскому компоненту через "takeControl".
   */
  passControl() {
    const { takeControl } = this.props;

    takeControl &&
      takeControl({
        isGrabbed: () => this.isGrabbed,
        setOffset: this.setOffset.bind(this),
        toggleTransition: this.toggleTransition.bind(this),
      });
  }

  /**
   * Выполняет отписку от глобальных событий.
   */
  componentWillUnmount() {
    (this.offList as Cb[]).forEach(fn => fn());
  }

  /**
   * Сохраняет данные захвата по событию клика/прикосновения.
   * @param event Событие передвижения.
   */
  startCapture(event: EventWithPosition) {
    const { x, y } = this.currentOffset;
    const { active = true, onDragStart } = this.props;
    const isTouch = isTouchEvent(event);

    if (active && (isMainMouseButton(event) || isTouch)) {
      this.toggleGrabbed(true);
      this.saveClientPosition(event);

      if (!isTouch) {
        event.preventDefault();
        (window.getSelection() as Selection).removeAllRanges();
      }

      onDragStart &&
        onDragStart(
          new DraggableEvent({
            offset: Point(x, y),
            client: getEventClientPos(event),
          }),
        );
    }
  }

  /**
   * Обновляет смещение и все данные при необходимости.
   * @param event Событие передвижения.
   */
  handleMove(event: MouseEvent | TouchEvent) {
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
        (window.getSelection() as Selection).removeAllRanges();
      }

      onDragMove && onDragMove(customEvent);

      if (!customEvent.prevented) {
        this.saveClientPosition(event);
        this.setOffset(offsetX, offsetY);
      }
    }
  }

  /**
   * Отключает захват движения.
   * Запускает соответствующий callback.
   * @param event Событие окончания захвата.
   */
  handleMoveEnd(event: MouseEvent | TouchEvent) {
    const { x: clientX, y: clientY } = this.clientPosition;
    const { x, y } = this.currentOffset;
    const { onDragEnd } = this.props;

    if (this.isGrabbed && onDragEnd) {
      !isTouchEvent(event) && event.preventDefault();

      onDragEnd(
        new DraggableEvent({
          offset: Point(x, y),
          client: Point(clientX, clientY),
        }),
      );
    }

    this.toggleGrabbed(false);
  }

  /**
   * Предотвращает клик если было произведено смещение мышью.
   * @param event Событие окончания захвата.
   */
  handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (this.needPreventClick) {
      event.preventDefault();
      this.togglePreventClickNeed(false);
    }
  }

  /**
   * Возвращает разницу последней сохраненной позиции и позиции в переданном событии.
   * @param event Touch- или mouse-событие.
   * @return Разница.
   */
  getClientDelta(event: MouseEvent | TouchEvent): Delta2d {
    const eventPos = getEventClientPos(event);

    return {
      dx: this.clientPosition.x - eventPos.x,
      dy: this.clientPosition.y - eventPos.y,
    };
  }

  /**
   * Переключает состояние активности захвата движения.
   * @param active Активен ли захват движения.
   */
  toggleGrabbed(active: boolean) {
    this.isGrabbed = Boolean(active);
  }

  /**
   * Переключает состояние плавного перехода через CSS-свойство "transition".
   * @param active Нужен ли плавный переход.
   */
  toggleTransition(active: boolean) {
    const { transitionDuration: duration = 320 } = this.props;
    const { current: draggableEl } = this.draggableRef;

    if (draggableEl && this.hasTransition !== Boolean(active)) {
      this.hasTransition = Boolean(active);

      draggableEl.style.transition = active ? getTransitionStyle(duration, 'transform') : '';
    }
  }

  /**
   * Сохраняет данные позиции на экземпляре.
   * @param event Событие.
   */
  saveClientPosition(event: EventWithPosition) {
    const eventPos = getEventClientPos(event);

    this.clientPosition.x = eventPos.x;
    this.clientPosition.y = eventPos.y;
  }

  /**
   * Переключает состояние необходимости предотвратить клик.
   * @param needPrevent Активен ли захват движения.
   */
  togglePreventClickNeed(needPrevent: boolean) {
    this.needPreventClick = Boolean(needPrevent);
  }

  /**
   * Устанавливает смещение через CSS-свойство transform.
   * Сохраняет данные смещения на экземпляре.
   * @param x Смещение по оси абсцисс.
   * @param y Смещение по оси ординат.
   */
  setOffset(x: number, y: number) {
    const { current: draggableEl } = this.draggableRef;

    this.currentOffset.x = x || 0;
    this.currentOffset.y = y || 0;

    draggableEl && (draggableEl.style.transform = getTranslateStyle(x, y));
  }

  /**
   * Рендер.
   * @inheritdoc
   */
  render() {
    const { children, containerProps = {}, transitionDuration: duration = 320 } = this.props;
    const { x, y } = this.currentOffset;

    return (
      <div
        {...containerProps}
        className={cx('draggable-container', containerProps.className)}
        onClick={this.handleClick}
        onMouseDown={this.startCapture}
        onTouchStart={this.startCapture}
      >
        <div
          ref={this.draggableRef}
          style={{
            transform: getTranslateStyle(x, y),
            transition: this.hasTransition ? getTransitionStyle(duration, 'transform') : '',
          }}
          className={cx('draggable')}
          children={children}
        />
      </div>
    );
  }
}

/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import { isMainMouseButton, isTouchEvent } from '../helpers/events';
import on from '../helpers/on';
import { IPoint } from '../helpers/point';

export class DragManager {
  private handlers: Record<'onStart' | 'onMove' | 'onEnd', (event: DragEvent) => void>;
  private grabbed: boolean;
  private needPreventClick: boolean;
  private startPos: IPoint;
  private lastMovePos: IPoint;

  constructor(handlers: Record<'onStart' | 'onMove' | 'onEnd', (event: DragEvent) => void>) {
    this.handlers = handlers;
    this.grabbed = false;
    this.needPreventClick = false;
    this.startPos = { x: 0, y: 0 };
    this.lastMovePos = { x: 0, y: 0 };
  }

  subscribe(element: HTMLElement) {
    const offList = [
      on<MouseEvent | TouchEvent>(element, 'mousedown touchstart', event => {
        const dragEvent = new DragEvent(event);

        if (isMainMouseButton(event) || dragEvent.isTouchEvent) {
          this.startPos = {
            x: dragEvent.client.x,
            y: dragEvent.client.y,
          };

          // событие touchend не содержит координат поэтому сохраняем при перемещении
          this.lastMovePos = {
            ...this.startPos,
          };

          dragEvent.setStart(this.startPos);

          if (!dragEvent.isTouchEvent) {
            dragEvent.preventDefault();
          }

          this.grabbed = true;
          this.handlers.onStart(dragEvent);
        }
      }),

      on<MouseEvent | TouchEvent>(window, 'mousemove touchmove', event => {
        if (this.grabbed) {
          const dragEvent = new DragEvent(event);

          dragEvent.setStart(this.startPos);

          // событие touchend не содержит координат поэтому сохраняем при перемещении
          if (event.type === 'touchmove') {
            this.lastMovePos = {
              x: dragEvent.client.x,
              y: dragEvent.client.y,
            };
          }

          if (!dragEvent.isTouchEvent) {
            dragEvent.preventDefault();
            window.getSelection()?.removeAllRanges();
          }

          this.needPreventClick = true;
          this.handlers.onMove(dragEvent);
        }
      }),

      on<MouseEvent | TouchEvent>(window, 'mouseup touchend', event => {
        if (this.grabbed) {
          const dragEvent = new DragEvent(event);

          dragEvent.setStart(this.startPos);

          if (event.type === 'touchend' && this.lastMovePos) {
            dragEvent.setClient(this.lastMovePos);
          }

          if (dragEvent.isTouchEvent) {
            this.needPreventClick = false;
          }

          this.grabbed = false;
          this.handlers.onEnd(dragEvent);
        }
      }),

      on<MouseEvent>(
        element,
        'click',
        event => {
          if (this.needPreventClick) {
            event.preventDefault();
            this.needPreventClick = false;
          }
        },
        { capture: true },
      ),
    ];

    return {
      unsubscribe() {
        for (const func of offList) {
          func();
        }
      },
    };
  }
}

class DragEvent {
  /** Оригинальное событие. */
  readonly originalEvent: MouseEvent | TouchEvent;

  /** Координаты захвата. Нужны чтобы рассчитать смещение. */
  private dragStart: IPoint;

  /** Статический заменитель позиции (clientX, clientY). Нужен так как не во всех событиях есть координаты. */
  private clientReplacer?: IPoint;

  /** Источник координат. */
  private clientSource?: Touch | MouseEvent;

  /** Оригинальное событие является touch-событием. */
  readonly isTouchEvent: boolean;

  constructor(originalEvent: MouseEvent | TouchEvent) {
    const isTouch = isTouchEvent(originalEvent);

    this.isTouchEvent = isTouch;
    this.originalEvent = originalEvent;
    this.dragStart = { x: 0, y: 0 };
    this.clientSource = isTouch ? originalEvent.touches[0] : originalEvent;
  }

  get client(): IPoint {
    if (this.clientReplacer) {
      return this.clientReplacer;
    }

    return {
      x: this.clientSource?.clientX || 0,
      y: this.clientSource?.clientY || 0,
    };
  }

  get offset(): IPoint {
    return {
      x: this.client.x - this.dragStart.x,
      y: this.client.y - this.dragStart.y,
    };
  }

  setStart(point: IPoint): void {
    this.dragStart = point;
  }

  setClient(point: IPoint): void {
    this.clientReplacer = point;
  }

  preventDefault(): void {
    this.originalEvent.preventDefault();
  }
}

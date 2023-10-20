import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { Point } from './point';

export type EventWithPosition<T extends HTMLElement = HTMLElement> =
  | MouseEvent
  | TouchEvent
  | ReactMouseEvent<T>
  | ReactTouchEvent<T>;

/**
 * Проверяет, является ли событие событием нажатия основной кнопки мыши.
 * @param event Событие.
 * @return Является ли.
 */
export function isMainMouseButton(event: any) {
  return event?.button === 0;
}

/**
 * Проверяет, является ли переданное событие touch-событием.
 * @param event Событие.
 * @return Является ли переданное событие touch-событием.
 */
export function isTouchEvent(event: any): event is TouchEvent | ReactTouchEvent {
  return Boolean(event?.touches);
}

/**
 * Берет данные позиции из события.
 * @param event Touch- или Mouse-событие.
 * @return Данные позиции.
 */
export function getEventClientPos<T extends HTMLElement = HTMLElement>(
  event: EventWithPosition<T>,
) {
  const source = isTouchEvent(event) ? event.touches[0] : event;

  return Point(source?.clientX, source?.clientY);
}

/**
 * Вызывает событие input на элементе input/textarea/select.
 * Полезен когда необходимо сообщить React'у что был произведен ввод значения пользователем.
 * За основу взята реализация отсюда: https://stackoverflow.com/a/47409362/13166471.
 * @param element Элемент.
 * @param value Значение.
 */
export function triggerInput(
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string,
): void {
  const constructors = [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement] as const;

  let constructor:
    | typeof HTMLInputElement
    | typeof HTMLTextAreaElement
    | typeof HTMLSelectElement
    | null = null;

  for (const item of constructors) {
    if (element instanceof item) {
      constructor = item;
    }
  }

  if (constructor) {
    const setValue = Object.getOwnPropertyDescriptor(constructor.prototype, 'value')?.set;

    if (setValue) {
      setValue.call(element, value);
      element.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

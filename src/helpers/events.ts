import React from 'react';
import Point from './point';

export type EventWithPosition<T extends HTMLElement = HTMLElement> =
  | MouseEvent
  | TouchEvent
  | React.MouseEvent<T>
  | React.TouchEvent<T>;

/**
 * Проверяет, является ли событие событием нажатия основной кнопки мыши.
 * @param e Событие.
 * @return Является ли.
 */
export const isMainMouseButton = (e: any) => e?.button === 0;

/**
 * Проверяет, является ли переданное событие touch-событием.
 * @param e Событие.
 * @return Является ли.
 */
export const isTouchEvent = (e: any): e is TouchEvent | React.TouchEvent => Boolean(e?.touches);

/**
 * Берет данные позиции из события.
 * @param e Touch- или Mouse-событие.
 * @return Данные позиции.
 */
export const getEventClientPos = <T extends HTMLElement = HTMLElement>(e: EventWithPosition<T>) => {
  const source = isTouchEvent(e) ? e.touches[0] : e;

  return Point(source?.clientX, source?.clientY);
};

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
) {
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

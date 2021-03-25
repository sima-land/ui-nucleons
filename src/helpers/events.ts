import React from 'react';
import Point from './point';

export type EventWithPosition<T extends HTMLElement = HTMLElement> = MouseEvent
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

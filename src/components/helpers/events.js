import eq from 'lodash/fp/eq';
import pipe from 'lodash/fp/pipe';
import prop from 'lodash/fp/prop';
import identity from 'lodash/identity';
import Point from './point';

/**
 * Проверяет, является ли событие событием нажатия основной кнопки мыши.
 * @type {function (Event): boolean}
 */
export const isMainMouseButton = pipe(identity, prop('button'), eq(0));

/**
 * Проверяет, является ли переданное событие touch-событием.
 * @type {function (Event): boolean}
 */
export const isTouchEvent = pipe(identity, prop('touches'), Boolean);

/**
 * Берет данные позиции из события.
 * @param {Event} event Touch- или Mouse-событие.
 * @return {import('../helpers/point').Point} Данные позиции.
 */
export const getEventClientPos = event => {
  const source = isTouchEvent(event) ? event.touches[0] : event;
  const { clientX: x, clientY: y } = source || {};

  return Point(x, y);
};

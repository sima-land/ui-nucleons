import Point from './point';

/**
 * Возвращает координаты центра прямоугольника.
 * @param {DOMRect} rect Прямоугольник.
 * @return {import('./point').Point} Центр.
 */
const centerOf = rect => Point(
  (rect.right + rect.left) / 2,
  (rect.bottom + rect.top) / 2
);

export default centerOf;

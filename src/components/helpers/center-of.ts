import Point from './point';

/**
 * Возвращает координаты центра прямоугольника.
 * @param rect Прямоугольник.
 * @return Центр.
 */
const centerOf = (rect: ClientRect) => Point(
  (rect.right + rect.left) / 2,
  (rect.bottom + rect.top) / 2
);

export default centerOf;

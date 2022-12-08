import Point from './point';

/**
 * Возвращает координаты центра прямоугольника.
 * @param rect Прямоугольник.
 * @return Центр.
 */
export function centerOf(rect: DOMRect) {
  return Point((rect.right + rect.left) / 2, (rect.bottom + rect.top) / 2);
}

/**
 * @deprecated Следует использовать именованный экспорт. Экспорт по умолчанию будет удалён в будущем.
 */
export default centerOf;

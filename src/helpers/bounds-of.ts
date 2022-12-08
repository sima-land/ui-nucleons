/**
 * Возвращает ограничивающий прямоугольник элемента.
 * @param element Элемент.
 * @return Ограничивающий прямоугольник.
 */
export function boundsOf<T>(element: T): T extends Element ? DOMRect : null {
  return (element instanceof Element ? element.getBoundingClientRect() : null) as T extends Element
    ? DOMRect
    : null;
}

/**
 * @deprecated Следует использовать именованный экспорт. Экспорт по умолчанию будет удалён в будущем.
 */
export default boundsOf;

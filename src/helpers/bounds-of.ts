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

export default boundsOf;

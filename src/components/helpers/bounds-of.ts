/**
 * Возвращает ограничивающий прямоугольник элемента.
 * @param element Элемент.
 * @return Ограничивающий прямоугольник.
 */
const boundsOf = (element?: HTMLElement) => element && element.getBoundingClientRect
  ? element.getBoundingClientRect()
  : null;

export default boundsOf;

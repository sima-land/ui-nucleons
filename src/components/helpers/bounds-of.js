/**
 * Возвращает ограничивающий прямоугольник элемента.
 * @param {Element} [element] Элемент.
 * @return {DOMRect|null} Ограничивающий прямоугольник.
 */
const boundsOf = element => element && element.getBoundingClientRect
  ? element.getBoundingClientRect()
  : null;

export default boundsOf;

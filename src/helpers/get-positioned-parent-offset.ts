import { findOffsetParent } from './find-offset-parent';
import { getScrollParent } from './get-scroll-parent';

/**
 * Преобразует css-значение размера в число.
 * @param cssValue Значение, например "12.23px".
 * @return Число. Неожиданно, правда?
 */
export function cssValueToNumber(cssValue: string): number {
  return parseFloat(cssValue.replace(/[A-z]/g, '')) || 0;
}

/**
 * Возвращает величину смещения элемента относительно его позиционированного родителя.
 * @param element Элемент.
 * @return Величина смещения элемента относительно его позиционированного родителя.
 */
export function getPositionedParentOffset(element: HTMLElement): { x: number; y: number } {
  const offsetParent = findOffsetParent(element);
  const scrollParent = getScrollParent(element);
  const correction = { x: window.pageXOffset, y: window.pageYOffset };

  if (offsetParent) {
    const parentRect = offsetParent.getBoundingClientRect();
    const parentStyle = getComputedStyle(offsetParent);

    correction.x = -parentRect.left;
    correction.y = -parentRect.top;

    // ВАЖНО: border-{top/left} влияют на начало координат родителя, учитываем
    correction.x -= cssValueToNumber(parentStyle.borderLeftWidth);
    correction.y -= cssValueToNumber(parentStyle.borderTopWidth);
  }

  // ВАЖНО: если offsetParent имеет собственную прокрутку - учитываем её
  if (offsetParent === scrollParent) {
    correction.x += scrollParent.scrollLeft;
    correction.y += scrollParent.scrollTop;
  }

  return correction;
}

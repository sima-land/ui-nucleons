import { boundsOf } from './bounds-of';

/**
 * Прокручивает родительский элемент по вертикали так, чтобы дочерний был в зоне видимости.
 * @param parent Родительский элемент.
 * @param child Дочерний элемент.
 */
export function scrollToChild(parent: HTMLElement, child: Element) {
  const [parentRect, childRect] = [parent, child].map(boundsOf) as [DOMRect, DOMRect];

  // ВАЖНО: не надо использовать offsetTop здесь, offsetParent может не соответствовать указанному родителю
  if (childRect.bottom > parentRect.bottom) {
    parent.scrollTop += childRect.bottom - parentRect.bottom;
  } else if (childRect.top < parentRect.top) {
    parent.scrollTop -= parentRect.top - childRect.top;
  }
}

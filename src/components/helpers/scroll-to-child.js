import boundsOf from './bounds-of';

/**
 * Прокручивает родительский элемент по вертикали так, чтобы дочерний был в зоне видимости.
 * @param {HTMLElement} parent Родительский элемент.
 * @param {HTMLElement} child Дочерний элемент.
 */
export const scrollToChild = (parent, child) => {
  const [parentRect, childRect] = [parent, child].map(boundsOf);

  // ВАЖНО: не надо использовать offsetTop здесь, offsetParent может не соответствовать указанному родителю
  if (childRect.bottom > parentRect.bottom) {
    parent.scrollTop += childRect.bottom - parentRect.bottom;
  } else if (childRect.top < parentRect.top) {
    parent.scrollTop -= parentRect.top - childRect.top;
  }
};

/**
 * Возвращает offsetParent с учетом того, что html может иметь или не иметь position !== 'static'.
 * @param element Элемент.
 * @return Правильный offsetParent.
 */
const findOffsetParent = (element: HTMLElement) => {
  let parent: Element | null = element.offsetParent || document.body;

  if (getComputedStyle(parent).position === 'static') {
    parent =
      getComputedStyle(document.documentElement).position === 'static'
        ? null
        : document.documentElement;
  }

  return parent;
};

export { findOffsetParent };

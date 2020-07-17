/**
 * Возвращает offsetParent с учетом того, что html может иметь или не иметь position !== 'static'.
 * @param {Element} element Элемент.
 * @return {Element|null} Правильный offsetParent.
 */
const findOffsetParent = element => {
  let parent = element.offsetParent || document.body;

  if (getComputedStyle(parent).position === 'static') {
    parent = getComputedStyle(document.documentElement).position === 'static'
      ? null
      : document.documentElement;
  }

  return parent;
};

export { findOffsetParent };

/**
 * Определяет, прокручен ли переданный элемент до конца по вертикали.
 * @param {HTMLElement} element Элемент.
 * @param {Object} [options={}] Опции.
 * @param {number} [options.threshold=0] Отступ от конца.
 * @return {boolean} Прокручен ли переданный элемент до конца по вертикали.
 */
export const isFullyScrolled = (element, { threshold = 0 } = {}) => {
  let result = false;

  if (element) {
    const { scrollTop, clientHeight, scrollHeight } = element;
    const bottom = threshold + scrollTop + clientHeight;

    result = bottom >= scrollHeight;
  }

  return result;
};

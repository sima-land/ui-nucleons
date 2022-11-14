/**
 * Определяет, прокручен ли переданный элемент до конца по вертикали.
 * @param element Элемент.
 * @param options Опции.
 * @param options.threshold Отступ от конца.
 * @return Прокручен ли переданный элемент до конца по вертикали.
 */
export function isFullyScrolled(
  element?: HTMLElement | undefined | null,
  { threshold = 0 }: { threshold?: number } = {},
) {
  let result = false;

  if (element) {
    const { scrollTop, clientHeight, scrollHeight } = element;
    const bottom = threshold + scrollTop + clientHeight;

    result = bottom >= scrollHeight;
  }

  return result;
}

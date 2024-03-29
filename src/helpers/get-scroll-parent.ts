// ВАЖНО: не надо использовать глобальный поиск здесь, чтобы regex не сохранял lastIndex
const regex = /(auto|scroll)/;

/**
 * Определяет, имеет ли элемент возможность прокручиваться.
 * @param element Элемент.
 * @return Имеет ли элемент возможность прокручиваться.
 */
function isScrollable(element: HTMLElement | undefined | null): boolean {
  let result = false;

  if (element) {
    const styles = getComputedStyle(element);
    result = regex.test(styles.overflow + styles.overflowX + styles.overflowY);
  }

  return result;
}

/**
 * Возвращает ближайший родительский элемент с возможностью прокрутки.
 * @param element Элемент.
 * @return Ближайший родительский элемент с возможностью прокрутки.
 */
export function getScrollParent(element: Element | undefined | null): HTMLElement {
  let result;

  if (!element || element === document.body) {
    // @todo прокрутка на body не работает с addEventListener, https://stackoverflow.com/a/43632204/13166471
    // надо будет придумать как обновить эту функцию
    result = document.body;
  } else {
    result = isScrollable(element.parentElement)
      ? element.parentElement
      : getScrollParent(element.parentElement);
  }

  return result as HTMLElement;
}

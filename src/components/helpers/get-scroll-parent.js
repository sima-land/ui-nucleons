// не надо использовать глобальный поиск здесь, чтобы regex не сохранял lastIndex
const regex = /(auto|scroll)/;

/**
 * Определяет, имеет ли элемент возможность прокручиваться.
 * @param {Element} element Элемент.
 * @return {boolean} Имеет ли элемент возможность прокручиваться.
 */
const isScrollable = element => {
  let result = false;

  if (element) {
    const styles = getComputedStyle(element);
    result = regex.test(styles.overflow + styles.overflowX + styles.overflowY);
  }

  return result;
};

/**
 * Возвращает ближайший родительский элемент с возможностью прокрутки.
 * @param {Element} element Элемент.
 * @return {Element} Ближайший родительский элемент с возможностью прокрутки..
 */
const getScrollParent = element => {
  let result;

  if (!element || element === document.body) {
    result = document.body;
  } else {
    result = isScrollable(element.parentElement)
      ? element.parentElement
      : getScrollParent(element.parentElement);
  }

  return result;
};

export { getScrollParent };

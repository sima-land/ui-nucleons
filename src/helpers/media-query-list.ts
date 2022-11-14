/**
 * Подписка на изменение MediaQueryList с учетом запуска в Safari < 14.
 * @param mql MediaQueryList.
 * @param fn Обработчик.
 * @return Интерфейс отписки.
 */
export function subscribe(
  mql: MediaQueryList,
  fn: (e: MediaQueryListEvent) => void,
): { unsubscribe: () => void } {
  if (mql.addEventListener) {
    mql.addEventListener('change', fn);
  } else if (mql.addListener) {
    mql.addListener(fn);
  }

  return {
    unsubscribe: () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', fn);
      } else if (mql.removeListener) {
        mql.removeListener(fn);
      }
    },
  };
}

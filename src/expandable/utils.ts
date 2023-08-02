import { RefObject, useEffect, useRef } from 'react';

/**
 * Определяет последний дочерний элемент который должен быть виден чтобы влезла "открывашка".
 * @param payload Данные.
 * @return Результат.
 *
 * ВАЖНО: lastVisibleIndex: -1 означает что все элементы видны и "открывашка" не нужна.
 */
export function defineLastVisible({
  outer,
  inner,
  gap,
  opener,
  openerWidth,
}: {
  outer: Element;
  inner: Element;
  gap: number;
  opener: Element;
  openerWidth: number;
}) {
  const items = [...inner.children].filter(el => el !== opener);

  // если список пуст или состоит из одного элемента - видны все, открывашка не нужна
  if (items.length <= 1) {
    return { lastVisibleIndex: -1 };
  }

  const bounds = outer.getBoundingClientRect();

  // индекс последнего элемента который должен быть виден
  let lastVisibleIndex = items.length - 1;

  while (
    items[lastVisibleIndex] &&
    items[lastVisibleIndex].getBoundingClientRect().bottom > bounds.bottom
  ) {
    lastVisibleIndex--;
  }

  const last: Element | undefined = items[items.length - 1];

  // если последний видимый является последним в списке - видны все, открывашка не нужна
  if (last === items[lastVisibleIndex]) {
    return { lastVisibleIndex: -1 };
  }

  while (
    lastVisibleIndex >= 1 &&
    items[lastVisibleIndex] &&
    bounds.right - items[lastVisibleIndex].getBoundingClientRect().right < openerWidth + gap
  ) {
    lastVisibleIndex--;
  }

  // @todo он не должен быть первым на строке
  return { lastVisibleIndex };
}

/**
 * Регистрирует обработчик изменения ширины элемента.
 * @param element Элемент.
 * @param callback Callback.
 * @return Функция отписки.
 */
export function observeWidth(element: Element, callback: VoidFunction) {
  // eslint-disable-next-line require-jsdoc
  const getWidth = () => element.getBoundingClientRect().width;

  let lastWidth = getWidth();

  const observer = new ResizeObserver(() => {
    requestAnimationFrame(() => {
      const actualWidth = getWidth();

      if (lastWidth !== actualWidth) {
        lastWidth = actualWidth;
        callback();
      }
    });
  });

  observer.observe(element);

  return () => observer.disconnect();
}

/**
 * Хук для регистрации обработчика изменения ширины элемента.
 * @param ref Ref элемента.
 * @param callback Callback.
 */
export function useObserveWidth(ref: RefObject<Element>, callback: VoidFunction) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (ref.current) {
      return observeWidth(ref.current, () => callbackRef.current());
    }
  }, [ref]);
}

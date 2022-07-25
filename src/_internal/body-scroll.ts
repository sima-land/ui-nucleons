import { disableBodyScroll, enableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';
import { BSL_IGNORE_ATTR } from '../constants';
import { useIsomorphicLayoutEffect } from '../hooks';

export interface WithBodyScrollLock {
  /** Нужно ли выключать прокрутку body. */
  withScrollDisable?: boolean;

  /** Опции отключения прокрутки. */
  scrollDisableOptions?: BodyScrollOptions;
}

/**
 * Хук управления блокировкой прокрутки body.
 * @param ref Реф элемента для которого нужно отключить прокрутку body.
 * @param needDisable Нужно ли отключать.
 * @param options Опции.
 */
export const useBodyScrollLock = (
  ref: React.RefObject<HTMLElement>,
  needDisable: boolean | undefined,
  options?: BodyScrollOptions,
): void => {
  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (element && needDisable) {
      disableBodyScroll(element, options);

      return () => enableBodyScroll(element);
    }
  }, [needDisable, options]);
};

/**
 * Проверяет необходимость блокировки дочерних элементов в прокручиваемом элементе.
 * Необходима для того, чтобы в прокручиваемых контейнерах вложенные прокручиваемые элементы,
 * имеющие специальный атрибут, прокручивались нормально.
 * @see {@link https://github.com/willmcpo/body-scroll-lock#more-complex}
 * @param startEl Начальный элемент.
 * @return Нужно ли позволить перетаскивание элемента.
 */
export const allowTouchMove: Required<BodyScrollOptions>['allowTouchMove'] = (startEl): boolean => {
  let el: HTMLElement | Element | null = startEl;

  while (el && el !== document.body) {
    if (el.getAttribute(BSL_IGNORE_ATTR) !== null) {
      return true;
    }

    el = el.parentElement;
  }

  return false;
};

import { disableBodyScroll, enableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';
import { useEffect } from 'react';

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
  useEffect(() => {
    const element = ref.current;

    if (element && needDisable) {
      disableBodyScroll(element, options);

      return () => enableBodyScroll(element);
    }
  }, [needDisable, options]);
};

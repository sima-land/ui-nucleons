import type { RefObject } from 'react';
import type { BodyScrollOptions } from 'body-scroll-lock';
import { useIsomorphicLayoutEffect } from '../../hooks';
import { usePageScrollContext } from './context';

interface HookOptions extends Pick<BodyScrollOptions, 'reserveScrollBarGap'> {
  lockEnabled?: boolean;
}

const DEFAULTS: HookOptions = {
  lockEnabled: true,
  reserveScrollBarGap: true,
} as const;

/**
 * Хук управления блокировкой прокрутки body.
 * @param ref Ref прокручиваемого элемента для которого нужно отключить прокрутку body.
 * @param options Опции.
 */
export function usePageScrollLock(
  ref: RefObject<HTMLElement>,
  options: HookOptions = DEFAULTS,
): void {
  const { adapter } = usePageScrollContext();

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const { lockEnabled, ...restOptions } = options;

    if (element && lockEnabled) {
      const pageScroll = adapter(element, restOptions);

      pageScroll.lock();

      return () => pageScroll.unlock();
    }
  }, [options?.lockEnabled, options?.reserveScrollBarGap]);
}

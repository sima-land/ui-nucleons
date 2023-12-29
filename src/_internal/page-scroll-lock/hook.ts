import { useContext, RefObject } from 'react';
import type { BodyScrollOptions } from 'body-scroll-lock';
import { useIsomorphicLayoutEffect } from '../../hooks';
import { PageScrollLockContext } from './context';

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
export function usePageScrollLock(ref: RefObject<HTMLElement>, options?: HookOptions): void {
  const { adapter } = useContext(PageScrollLockContext);

  const { lockEnabled = DEFAULTS.lockEnabled, reserveScrollBarGap = DEFAULTS.reserveScrollBarGap } =
    options ?? DEFAULTS;

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (element && lockEnabled) {
      const pageScroll = adapter(element, { reserveScrollBarGap });

      pageScroll.lock();

      return () => pageScroll.unlock();
    }
  }, [ref, lockEnabled, reserveScrollBarGap]);
}

import type { ReactNode } from 'react';
import type { BodyScrollOptions } from 'body-scroll-lock-upgrade';

export interface PageScrollLockAdapterFactory {
  (
    target: HTMLElement,
    options?: WithPageScrollLock['scrollDisableOptions'],
  ): PageScrollLockAdapter;
}

export interface PageScrollLockContextValue {
  adapter: PageScrollLockAdapterFactory;
}

export interface PageScrollLockProviderProps extends PageScrollLockContextValue {
  children?: ReactNode;
}

export interface PageScrollLockAdapter {
  lock(): void;
  unlock(): void;
}

export type PageScrollLockOptions = Pick<BodyScrollOptions, 'reserveScrollBarGap'>;

export interface WithPageScrollLock {
  /** Нужно ли выключать прокрутку body. */
  withScrollDisable?: boolean;

  /** Опции отключения прокрутки. */
  scrollDisableOptions?: PageScrollLockOptions;
}

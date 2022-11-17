import React, { createContext, useContext } from 'react';
import { PageScrollLock } from './adapters/body-scroll-lock';
import { PageScrollLockContextValue, PageScrollLockProviderProps } from './types';

const PageScrollContext = createContext<PageScrollLockContextValue | null>(null);

const DEFAULTS: PageScrollLockContextValue = {
  adapter: (element, options) => new PageScrollLock(element, options),
} as const;

/**
 * Провайдер реализации блокировки прокрутки.
 * @param props Свойства.
 * @return Элемент.
 */
export function PageScrollProvider({ children, adapter }: PageScrollLockProviderProps) {
  const contextValue = useContext(PageScrollContext);

  if (contextValue !== null) {
    throw Error('PageScrollContext: only one provider allowed in jsx tree');
  }

  return <PageScrollContext.Provider value={{ adapter }}>{children}</PageScrollContext.Provider>;
}

/**
 * Хук использования реализации блокировки прокрутки.
 * @return Реализация.
 */
export function usePageScrollContext(): PageScrollLockContextValue {
  const context = useContext(PageScrollContext);

  return context || DEFAULTS;
}

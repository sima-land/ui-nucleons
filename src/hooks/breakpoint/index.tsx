import React, { createContext, useContext, useState } from 'react';
import { useIsomorphicLayoutEffect } from '..';
import isBrowser from '../../helpers/is-browser';
import { Registry } from './types';
import { BreakpointQuery, createRegistry } from './utils';

const Context = createContext<Registry | null>(null);

/**
 * Провайдер, необходимый для использования useBreakpoint.
 * @param props Свойства.
 * @return Элемент.
 */
export const BreakpointProvider: React.FC = ({ children }) => {
  const [contextValue, setRegistry] = useState<Registry | null>(null);

  useIsomorphicLayoutEffect(() => {
    isBrowser() && setRegistry(createRegistry());
  }, []);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

/**
 * Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.
 * @param query Запрос, например "xs+".
 * @return Соответствует ли ширина экрана заданному запросу.
 */
export const useBreakpoint = (query: string): boolean => {
  if (!BreakpointQuery.isValid(query)) {
    throw Error(`useBreakpoint: Invalid query, "${query}"`);
  }

  const registry = useContext(Context);
  const [matches, setMatches] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    if (registry) {
      const subscription = registry.subscribe(query, e => {
        setMatches(e.matches);
      });

      setMatches(subscription.matches);

      return subscription.unsubscribe;
    }
  }, [registry]);

  return matches;
};

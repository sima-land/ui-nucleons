import { createContext, ReactNode, useContext, useState } from 'react';
import { useIsomorphicLayoutEffect } from '..';
import { isBrowser } from '../../helpers/is-browser';
import { Registry } from './types';
import { BreakpointQuery, createRegistry } from './utils';

const Context = createContext<Registry | null>(null);

/**
 * Провайдер, предоставляющий контекст для использования хуком useBreakpoint.
 * Не является обязательным, используется в целях оптимизации.
 * @param props Свойства.
 * @return Элемент.
 */
export function BreakpointProvider({ children }: { children: ReactNode }) {
  const [contextValue, setRegistry] = useState<Registry | null>(null);

  useIsomorphicLayoutEffect(() => {
    isBrowser() && setRegistry(createRegistry());
  }, []);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

/**
 * Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.
 * @param query Запрос, например "xs+".
 * @return Соответствует ли ширина экрана заданному запросу.
 */
export function useBreakpoint(query: string): boolean {
  if (!BreakpointQuery.isValid(query)) {
    throw Error(`useBreakpoint: Invalid query, "${query}"`);
  }

  const [, setRegistry] = useState<Registry | null>(null);
  const registryFromContext = useContext(Context);
  const [matches, setMatches] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    let registry: Registry;

    if (registryFromContext) {
      registry = registryFromContext;
    } else {
      registry = createRegistry();
    }

    setRegistry(registryFromContext);

    const subscription = registry.subscribe(query, e => {
      setMatches(e.matches);
    });

    setMatches(subscription.matches);

    return subscription.unsubscribe;
  }, [registryFromContext]);

  return matches;
}

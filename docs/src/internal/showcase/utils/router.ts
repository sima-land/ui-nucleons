import { createContext, useEffect, useMemo, useState } from 'react';

export function createQueryRouter() {
  const listeners = new Set<VoidFunction>();

  let currentPathname = '';

  const updatePathname = (pathname: string) => {
    currentPathname = pathname;
    listeners.forEach(fn => fn());
  };

  return {
    getPathname() {
      return currentPathname;
    },

    setPathname(pathname: string) {
      const url = new URL(window.location.href);

      url.searchParams.delete('path');

      window.history.pushState(
        { pathname: currentPathname },
        '',
        `${url.pathname}${url.search}${
          pathname ? `${url.search ? '&' : '?'}path=${pathname}` : ''
        }`,
      );

      updatePathname(pathname);
    },

    observe() {
      const onPopState = () => {
        // @todo проверить event.target тк iframe на странице тоже вызывает событие на родителе
        updatePathname(new URL(window.location.href).searchParams.get('path') ?? '');
      };

      updatePathname(new URL(window.location.href).searchParams.get('path') ?? '');

      window.addEventListener('popstate', onPopState);

      return () => {
        window.removeEventListener('popstate', onPopState);
      };
    },

    subscribe(listener: VoidFunction) {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
  };
}

export function useRouter() {
  const router = useMemo(createQueryRouter, []);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const unobserve = router.observe();
    const unsubscribe = router.subscribe(() => {
      setPathname(router.getPathname());
    });

    setPathname(router.getPathname());

    return () => {
      unobserve();
      unsubscribe();
    };
  }, [router]);

  const redirect = (path: string): void => {
    router.setPathname(path);
  };

  return [pathname, redirect] as const;
}

export const RouterContext = createContext<{
  pathname: string;
  redirect: (pathname: string) => void;
}>({
  pathname: '',
  redirect: () => {},
});

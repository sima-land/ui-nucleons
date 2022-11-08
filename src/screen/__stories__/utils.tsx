import React, { useCallback, useEffect, useState } from 'react';
import on from '../../helpers/on';

const useViewportVars = () => {
  useEffect(() => {
    const height = window.visualViewport?.height ?? window.innerHeight;

    const define = () => {
      document.documentElement.style.setProperty('--vh', `${height / 100}px`);
    };

    define();

    return on(window, 'resize', define);
  }, []);
};

export const useLoading = () => {
  const [state, setState] = useState<'closed' | 'loading' | 'opened'>('closed');

  const load = useCallback(() => {
    if (state === 'closed') {
      setState('loading');
      setTimeout(() => setState('opened'), 1000);
    }
  }, [state]);

  const reset = useCallback(() => {
    setState('closed');
  }, []);

  return { state, load, reset } as const;
};

export const Bootstrap: React.FC = ({ children }) => {
  useViewportVars();

  return <>{children}</>;
};

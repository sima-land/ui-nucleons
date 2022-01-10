import React, { useCallback, useEffect, useState } from 'react';
import on from '../../helpers/on';

const useViewportVars = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.visualViewport.height / 100}px`);

    return on(window, 'resize', () => {
      document.documentElement.style.setProperty('--vh', `${window.visualViewport.height / 100}px`);
    });
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

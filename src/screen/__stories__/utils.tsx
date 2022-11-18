import { useCallback, useState } from 'react';

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

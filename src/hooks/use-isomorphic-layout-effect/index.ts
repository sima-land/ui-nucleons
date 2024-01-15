import { useEffect, useLayoutEffect } from 'react';

/**
 * Нужен для того чтобы не получать ошибку при использовании в SSR с NodeJS.
 * @see {@link https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85#gistcomment-2911761}
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

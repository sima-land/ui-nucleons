import { MutableRefObject, useContext, useEffect } from 'react';
import { useIdentityRef } from '../use-identity-ref';
import { IntersectionObserverContext } from '../../context';

/**
 * Хук, вызывающий callback при пересечении целевого элемента с областью видимости.
 * @param ref Ref с целевым элементом.
 * @param callback Функция, которая будет вызвана при пересечении целевого элемента с областью видимости.
 * @param options Опции создания IntersectionObserver.
 */
export function useIntersection(
  ref: MutableRefObject<HTMLElement | null>,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
): void {
  const callbackRef = useIdentityRef(callback);

  const { createIntersectionObserver } = useContext(IntersectionObserverContext);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const observer = createIntersectionObserver(([entry]) => {
        callbackRef.current?.(entry);
      }, options);

      observer.observe(element);

      return () => observer.disconnect();
    }
  }, [ref, options, createIntersectionObserver]);
}

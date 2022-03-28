import { MutableRefObject, useEffect } from 'react';
import { useIdentityRef } from '../identity';

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

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const observer = new IntersectionObserver(([entry]) => {
        callbackRef.current?.(entry);
      }, options);

      observer.observe(element);

      return () => observer.disconnect();
    }
  }, [ref, callbackRef, options]);
}

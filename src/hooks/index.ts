import React, { useEffect, useState, useLayoutEffect } from 'react';
import { isTouchDevice } from '../helpers/is-touch-device';
import on from '../helpers/on';
import { useIdentityRef } from './identity';

/**
 * При монтировании проверяет, поддерживает ли устройство touch события.
 * @return True - если поддерживает, false - если нет.
 */
export const useIsTouchDevice = () => {
  const [isTouch, setTouch] = useState<boolean>(false);

  useEffect(() => {
    setTouch(isTouchDevice());
  }, []);

  return isTouch;
};

/**
 * Реализует подписку на событие полной прокрутки списка.
 * @param ref Реф прокручиваемого элемента.
 * @param options Опции.
 * @param options.onFullScroll Сработает при событии полной прокрутки.
 * @param options.threshold Отступ от конца списка по которому событие должно срабатывать.
 * @param moreDeps Зависимости эффекта (нужны, когда ref заполняется не на этапе render'а).
 */
export const useInfiniteScroll = (
  ref: React.MutableRefObject<HTMLElement | undefined | null>,
  {
    onFullScroll,
    threshold = 0,
  }: {
    onFullScroll?: (event: UIEvent) => void;
    threshold?: number;
  },
  moreDeps?: React.DependencyList,
) => {
  const callbackRef = useIdentityRef(onFullScroll);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      return on<UIEvent>(element, 'scroll', event => {
        const { scrollTop, clientHeight, scrollHeight } = event.target as HTMLElement;
        const bottom = threshold + scrollTop + clientHeight;
        const isFullyScrolled = bottom >= scrollHeight;

        isFullyScrolled && callbackRef.current?.(event);
      }) as () => void;
    }
  }, [ref, threshold, ...(moreDeps || [])]);
};

/**
 * Запускает переданный обработчик при клике вне элемента.
 * @param elementRef Ref элемента, клик вне которого нужно обработать.
 * @param callback Сработает при клике вне элемента.
 */
export const useOutsideClick = (
  elementRef: React.MutableRefObject<HTMLElement | undefined | null>,
  callback: (e: MouseEvent) => void,
) => {
  const callbackRef = useIdentityRef(callback);

  useEffect(
    () =>
      on<MouseEvent>(document.documentElement, 'click', event => {
        const { current: element } = elementRef;
        const { current: handler } = callbackRef;

        element &&
          element !== event.target &&
          !element.contains(event.target as Node) &&
          handler?.(event);
      }),
    [],
  );
};

/**
 * Нужен для того чтобы не получать ошибку при использовании в SSR с NodeJS.
 * @see {@link https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85#gistcomment-2911761}
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

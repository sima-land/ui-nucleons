import React, { useEffect, useRef, useState } from 'react';
import { isTouchDevice } from '../helpers/is-touch-device';
import { isFunction } from 'lodash';
import on from '../helpers/on';

/**
 * При монтировании проверяет, поддерживает ли устройство touch события.
 * @return True - если поддерживает, false - если нет.
 */
export const useIsTouchDevice = () => {
  const [isTouch, setTouch] = useState(false);

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
) => {
  useEffect(() => {
    const { current: element } = ref;

    if (element) {
      return on<UIEvent>(element, 'scroll', (event: UIEvent) => {
        const {
          scrollTop,
          clientHeight,
          scrollHeight,
        } = event.target as HTMLElement;
        const bottom = threshold + scrollTop + clientHeight;
        const isFullyScrolled = bottom >= scrollHeight;

        if (isFullyScrolled && onFullScroll) {
          onFullScroll(event);
        }
      }) as () => void;
    }
  }, [ref.current, threshold, onFullScroll]);
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
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  useEffect(
    () =>
      on(document.documentElement, 'click', (event: MouseEvent) => {
        const { current: element } = elementRef;
        const { current: handleClick } = callbackRef;

        element &&
          element !== event.target &&
          !element.contains(event.target as HTMLElement) &&
          isFunction(handleClick) &&
          handleClick(event);
      }) as () => void,
    [],
  );
};

import React, { useRef, useCallback } from 'react';
import { useIdentityRef } from '../hooks/identity';

/**
 * Вызывает callback только если клик был начат и закончен по одному и тому же элементу.
 * @param callback Сработает при клике.
 * @return Свойства для целевого элемента.
 */
export const useCloseHandler = (callback?: () => void) => {
  const callbackRef = useIdentityRef(callback);
  const mouseDownTarget = useRef<EventTarget>();

  const onMouseDown = useCallback(({ button, target }: React.MouseEvent) => {
    if (button === 0) {
      mouseDownTarget.current = target;
    }
  }, []);

  const onMouseUp = useCallback(({ target, currentTarget, button }: React.MouseEvent) => {
    const fn = callbackRef.current;

    fn &&
      button === 0 &&
      target === currentTarget &&
      currentTarget === mouseDownTarget.current &&
      fn();
  }, []);

  return { onMouseUp, onMouseDown };
};

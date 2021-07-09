import { useRef, useCallback } from 'react';

/**
 * @param callback Сработает при закрытии.
 * @return Свойства для закрывающего элемента.
 */
export const useCloseHandler = (callback?: () => void) => {
  const mouseDownTarget = useRef<HTMLElement>();

  const onMouseDown = useCallback(({ button, target }) => {
    if (button === 0) {
      mouseDownTarget.current = target;
    }
  }, []);

  const onMouseUp = useCallback(({ target, currentTarget, button }) => {
    callback
      && button === 0
      && target === currentTarget
      && currentTarget === mouseDownTarget.current
      && callback();
  }, [callback]);

  return { onMouseUp, onMouseDown };
};

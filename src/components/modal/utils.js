import { useRef, useCallback } from 'react';
import isFunction from 'lodash/isFunction';

/**
 * @param {Function} onClose Сработает при закрытии.
 * @return {{ onMouseUp: Function, onMouseDown: Function }} Свойства для закрывающего элемента.
 */
export const useCloseHandler = onClose => {
  const mouseDownTarget = useRef();

  const onMouseDown = useCallback(({ button, target }) => {
    if (button === 0) { mouseDownTarget.current = target; }
  }, []);

  const onMouseUp = useCallback(({ target, currentTarget, button }) => {
    isFunction(onClose)
      && button === 0
      && target === currentTarget
      && currentTarget === mouseDownTarget.current
      && onClose();
  }, [onClose]);

  return { onMouseUp, onMouseDown };
};

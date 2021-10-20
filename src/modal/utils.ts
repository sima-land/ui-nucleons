import { useRef, useCallback } from 'react';

/**
 * Вызывает callback только если клик был начат и закончен по одному и тому же элементу.
 * @param callback Сработает при клике.
 * @return Свойства для целевого элемента.
 */
export const useStrictClick = (callback?: () => void) => {
  const mouseDownTarget = useRef<HTMLElement>();

  const onMouseDown = useCallback(({ button, target }) => {
    if (button === 0) {
      mouseDownTarget.current = target;
    }
  }, []);

  const onMouseUp = useCallback(
    ({ target, currentTarget, button }) => {
      callback &&
        button === 0 &&
        target === currentTarget &&
        currentTarget === mouseDownTarget.current &&
        callback();
    },
    [callback],
  );

  return { onMouseUp, onMouseDown };
};

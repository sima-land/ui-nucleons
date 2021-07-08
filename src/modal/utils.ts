import { useRef, useCallback, useEffect, useState } from 'react';
import { enableBodyScroll, disableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';

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

/**
 * Хук отключения прокрутки body.
 * @param needDisable Нужно ли отключать прокрутку.
 * @param options Опции.
 * @return Ref-callback.
 */
export const useScrollDisable = <T extends HTMLElement>(
  needDisable: boolean,
  options: BodyScrollOptions
): React.RefCallback<T> => {
  // используем состояние здесь чтобы корректно обрабатывать монтирование в портале
  const [element, setElement] = useState<T | null>(null);

  useEffect(() => {
    needDisable && element && disableBodyScroll(element, options);

    return () => {
      needDisable && element && enableBodyScroll(element);
    };
  }, [element, needDisable, options]);

  return setElement;
};

import { MouseEventHandler, useCallback, useRef } from 'react';
import { useIdentityRef } from '../hooks/identity';

/**
 * Вызывает callback только если клик был начат и закончен на одном и том же элементе.
 * @param onExactClick Сработает при клике.
 * @param options Опции.
 * @return Свойства для целевого элемента.
 */
export function useExactClick(
  onExactClick: VoidFunction | undefined,
  {
    onMouseDown,
    onMouseUp,
  }: {
    onMouseDown?: MouseEventHandler;
    onMouseUp?: MouseEventHandler;
  } = {},
) {
  const callbackRef = useIdentityRef(onExactClick);
  const mouseDownTarget = useRef<EventTarget | null>(null);

  const handleMouseDown = useCallback<MouseEventHandler>(event => {
    onMouseDown?.(event);

    if (event.button === 0) {
      mouseDownTarget.current = event.target;
    }
  }, []);

  const handleMouseUp = useCallback<MouseEventHandler>(event => {
    const fn = callbackRef.current;

    onMouseUp?.(event);

    fn &&
      event.button === 0 &&
      event.target === event.currentTarget &&
      event.currentTarget === mouseDownTarget.current &&
      fn();
  }, []);

  return { onMouseUp: handleMouseUp, onMouseDown: handleMouseDown };
}

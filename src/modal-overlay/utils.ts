import { CSSProperties, MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { useIdentityRef } from '../hooks/use-identity-ref';

/**
 * Вызывает callback только если клик был начат и закончен на одном и том же элементе.
 * @param onExactClick Сработает при клике.
 * @param options Опции.
 * @return Свойства для целевого элемента.
 * @todo Экспортировать из точки входа modal-overlay.
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

/**
 * Возвращает пропсы со стилям, которые формируют размер и позицию на основе window.visualViewport.
 * @return Пропсы.
 */
export function useVisualViewportPlacement(): { style: CSSProperties } {
  const [state, setState] = useState<null | {
    width: number;
    height: number;
    offsetTop: number;
    offsetLeft: number;
  }>(null);

  useEffect(() => {
    const { visualViewport } = window;

    if (!visualViewport) {
      return;
    }

    /** Сохраняет значения visualViewport в состояние. */
    const callback = () => {
      setState({
        width: visualViewport.width * visualViewport.scale,
        height: visualViewport.height * visualViewport.scale,

        // @todo проверить на реальном устройстве зум пальцами (iPad с показанной клавиатурой)
        offsetTop: visualViewport.scale === 1 ? visualViewport.offsetTop : 0,
        offsetLeft: visualViewport.scale === 1 ? visualViewport.offsetLeft : 0,
      });
    };

    visualViewport.addEventListener('resize', callback);
    visualViewport.addEventListener('scroll', callback);
    window.addEventListener('resize', callback);
    window.addEventListener('orientationchange', callback);

    callback();

    return () => {
      visualViewport.removeEventListener('resize', callback);
      visualViewport.removeEventListener('scroll', callback);
      window.removeEventListener('resize', callback);
      window.removeEventListener('orientationchange', callback);
    };
  }, []);

  return {
    style: state
      ? {
          top: `${state.offsetTop}px`,
          left: `${state.offsetLeft}px`,
          width: `${state.width}px`,
          height: `${state.height}px`,
        }
      : {},
  };
}

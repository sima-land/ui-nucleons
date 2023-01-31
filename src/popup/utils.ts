import {
  flip,
  offset,
  shift,
  autoUpdate,
  UseFloatingProps,
  UseFloatingReturn,
  useClick,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';
import { createFocusTrap } from 'focus-trap';
import { RefObject } from 'react';
import { useLayer } from '../helpers/layer';
import { useIsomorphicLayoutEffect } from '../hooks';
import { useIdentityRef } from '../hooks/identity';

/**
 * Возвращает конфигурацию для `useFloating` по дизайн-гайдам.
 * @return Конфигурация для `useFloating` по дизайн-гайдам.
 */
export function popupFloatingConfig(): Partial<UseFloatingProps> {
  return {
    strategy: 'absolute',
    placement: 'right-start',
    middleware: [
      offset(8),
      flip({
        padding: 16,
        crossAxis: false,
        fallbackAxisSideDirection: 'start',
      }),
      shift({
        padding: 16,
      }),
    ],
    whileElementsMounted: autoUpdate,
  };
}

/**
 * Возвращает стили для элемента с учетом "слоя".
 * @param floating Результат вызова useFloating.
 * @return Стили для элемента с учетом "слоя".
 */
export function usePopupFloatingStyle({
  strategy,
  x,
  y,
}: Pick<UseFloatingReturn, 'strategy' | 'x' | 'y'>) {
  const layer = useLayer();

  return {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
    zIndex: layer + 2,
  };
}

/**
 * Показ всплывающего элемента по клику и скрытие.
 * @param floating Результат вызова useFloating.
 * @return Опции для открывающего и всплывающего элемента.
 */
export function usePopupOnClick(
  floating: Pick<UseFloatingReturn, 'context' | 'strategy' | 'x' | 'y'>,
) {
  const style = usePopupFloatingStyle(floating);

  const click = useClick(floating.context);
  const dismiss = useDismiss(floating.context);

  return useInteractions([click, dismiss, { floating: { style } }]);
}

/**
 * Хук ловушки фокуса.
 * @todo Вынести в общие утилиты тк понадобится для Modal и тд.
 * @param ref Элемент-контейнер для которого нужно захватить фокус.
 * @param options Опции.
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement | SVGElement>,
  {
    enabled,
    afterDeactivate,
  }: {
    enabled: boolean;
    afterDeactivate?: () => void;
  },
) {
  const afterDeactivateRef = useIdentityRef(afterDeactivate);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (enabled && element) {
      const trap = createFocusTrap(element, {
        allowOutsideClick: true,
        tabbableOptions: { displayCheck: 'none' },
        onPostDeactivate: afterDeactivateRef.current,
        fallbackFocus: element,
      });

      trap.activate();

      return () => {
        trap.deactivate({ returnFocus: true });
      };
    }
  }, [ref, enabled]);
}

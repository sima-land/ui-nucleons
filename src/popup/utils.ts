import {
  flip,
  offset,
  shift,
  autoUpdate,
  UseFloatingOptions,
  UseFloatingReturn,
  useClick,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';
import { createFocusTrap } from 'focus-trap';
import { RefObject } from 'react';
import { useLayer } from '../helpers/layer';
import { useIsomorphicLayoutEffect } from '../hooks';
import { useIdentityRef } from '../hooks/use-identity-ref';

/**
 * Возвращает конфигурацию для `useFloating` по дизайн-гайдам.
 * @param options Опции.
 * @return Конфигурация для `useFloating` по дизайн-гайдам.
 */
export function popupFloatingConfig({
  placement = 'right-start',
  offset: offsetValue = 8,
}: {
  offset?: number;

  // ВАЖНО: не используем интерфейс из библиотеки floating-ui а копируем его так как это деталь реализации
  placement?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'right-start'
    | 'top-start'
    | 'top-end'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end';
} = {}): Partial<UseFloatingOptions> {
  return {
    strategy: 'absolute',
    placement,
    middleware: [
      offset(offsetValue),
      flip({
        padding: 16,
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
    top: y,
    left: x,
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

    if (!enabled || !element) {
      return;
    }

    const trap = createFocusTrap(element, {
      allowOutsideClick: true,
      tabbableOptions: { displayCheck: 'none' },
      onPostDeactivate: afterDeactivateRef.current,

      // ВАЖНО: отключаем тк в противном случае в Safari срабатывает :focus-visible
      initialFocus: false,
    });

    trap.activate();

    return () => {
      trap.deactivate({
        returnFocus: true, // @todo тоже убрать?
      });
    };
  }, [ref, enabled]);
}

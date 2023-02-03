import { UseFloatingProps, flip, autoUpdate, shift, UseFloatingReturn } from '@floating-ui/react';
import { useLayer } from '../helpers/layer';

/**
 * Возвращает конфигурацию для `useFloating` по дизайн-гайдам.
 * @return Конфигурация для `useFloating` по дизайн-гайдам.
 */
export function dropdownFloatingConfig(): Partial<UseFloatingProps> {
  return {
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
    middleware: [
      // @todo в будущем с дизайнерами можем решить использовать autoPlacement
      // но есть сложности: https://github.com/floating-ui/floating-ui/discussions/2155
      flip({
        padding: 16,
      }),
      shift({
        padding: 16,
      }),
    ],
  };
}

/**
 * Возвращает стили для элемента с учетом "слоя".
 * @param floating Результат вызова useFloating.
 * @return Стили для элемента с учетом "слоя".
 */
export function useDropdownFloatingStyle({
  strategy,
  x,
  y,
  refs,
}: Pick<UseFloatingReturn, 'strategy' | 'x' | 'y' | 'refs'>) {
  const layer = useLayer();

  const openerWidth: string | undefined = refs.reference.current
    ? `${refs.reference.current.getBoundingClientRect().width}px`
    : undefined;

  return {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
    minWidth: openerWidth,
    zIndex: layer + 2,

    // для возможности стилизации
    '--opener-width': openerWidth,
  };
}

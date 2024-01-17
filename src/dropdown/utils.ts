import { useContext, useEffect, useMemo, useState } from 'react';
import { UseFloatingOptions, flip, autoUpdate, shift, UseFloatingReturn } from '@floating-ui/react';
import { useLayer } from '../helpers/layer';
import { ResizeObserverContext } from '../context';

/**
 * Возвращает конфигурацию для `useFloating` по дизайн-гайдам.
 * @return Конфигурация для `useFloating` по дизайн-гайдам.
 */
export function dropdownFloatingConfig(): Partial<UseFloatingOptions> {
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

  const [openerWidth, setOpenerWidth] = useState<number | null>(
    () => refs.reference.current?.getBoundingClientRect().width ?? null,
  );

  const { createResizeObserver } = useContext(ResizeObserverContext);

  useEffect(() => {
    const opener = refs.reference.current;

    if (!(opener instanceof Element)) {
      return;
    }

    const observer = createResizeObserver(() => {
      setOpenerWidth(opener.getBoundingClientRect().width);
    });

    setOpenerWidth(opener.getBoundingClientRect().width);

    observer.observe(opener);

    return () => {
      observer.disconnect();
    };
  }, [refs.reference.current, createResizeObserver]);

  return useMemo(() => {
    const base = {
      position: strategy,
      top: y,
      left: x,
      zIndex: layer + 2,
    };

    if (typeof openerWidth === 'number') {
      return {
        ...base,

        minWidth: `${openerWidth}px`,

        // ВАЖНО: для возможности стилизации задаем переменную с шириной
        // @todo при необходимости добавить высоту и другие размеры или же наоборот отказаться от этой переменной
        '--opener-width': `${openerWidth}px`,
      };
    }

    return base;
  }, [strategy, x, y, layer, openerWidth]);
}

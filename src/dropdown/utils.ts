import { useFloating, flip, autoUpdate } from '@floating-ui/react';
import { useImperativeHandle, RefObject, CSSProperties, useEffect } from 'react';
import { useLayer } from '../helpers/layer';

/**
 * Хук для позиционирования Dropdown рядом с открывающим элементом.
 * @param dropdownRef Ref Dropdown.
 * @param referenceRef Ref открывающего элемента.
 * @return Пропсы для Dropdown.
 */
export function useFloatingDropdown(
  dropdownRef: RefObject<Element | null>,
  referenceRef: RefObject<Element | null>,
): { style: CSSProperties } {
  const layer = useLayer();

  const { refs, x, y, strategy, update } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
    middleware: [flip()],
  });

  useImperativeHandle<Element | null, Element | null>(refs.setFloating, () => dropdownRef.current);
  useImperativeHandle<Element | null, Element | null>(
    refs.setReference,
    () => referenceRef.current,
  );

  // @todo следующая строка здесь временно из-за проблем после обновления "@floating-ui/*"
  // нужно разобраться и постараться убрать
  useEffect(update);

  const openerWidth: string | undefined = referenceRef.current
    ? `${referenceRef.current.getBoundingClientRect().width}px`
    : undefined;

  const style: CSSProperties = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
    minWidth: openerWidth,
    '--opener-width': openerWidth, // для стилизации
    zIndex: layer + 2,
  } as CSSProperties;

  return { style };
}

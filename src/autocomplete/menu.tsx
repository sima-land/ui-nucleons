import { useImperativeHandle, useRef } from 'react';
import { Dropdown, DropdownProps, useDismissByWheel } from '../dropdown';

/**
 * Выпадающее меню для Autocomplete.
 * @inheritdoc
 */
export function AutocompleteMenu({
  rootRef,
  children,
  onDismiss,
  ...restProps
}: DropdownProps & { onDismiss?: VoidFunction }) {
  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle(rootRef, () => ref.current);

  // скрытие меню при прокрутке колесом за пределами меню
  useDismissByWheel(ref, () => {
    onDismiss?.();
  });

  return (
    <Dropdown {...restProps} rootRef={ref}>
      {children}
    </Dropdown>
  );
}

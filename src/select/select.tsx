import { isValidElement, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { SelectContext } from './utils';
import { SelectMenuProps, SelectOpenerBinding, SelectProps } from './types';
import { useIdentityRef } from '../hooks/identity';
import { DropdownItemUtils } from '../dropdown-item/utils';
import { FloatingPortal, useFloating } from '@floating-ui/react';
import { SelectMenu } from './parts/menu';
import { SelectFieldBlock } from './parts/block';
import { SelectTextButton } from './parts/button';
import { dropdownFloatingConfig, useDropdownFloatingStyle } from '../dropdown/utils';

/**
 * Поле выбора из списка.
 * @param props Свойства.
 * @return Элемент.
 */
export function Select({
  children,
  disabled,
  failed,
  loading,
  onValueChange,
  onMenuToggle,
  value,
  defaultValue,
  label,
  opener = <SelectFieldBlock />,
  renderValue = v => v,
  dropdownProps,
}: SelectProps) {
  // @todo по аналогии с <select /> надо проверять, есть ли значение в списке переданных
  const [initialValue] = useState<string>(() => value ?? defaultValue ?? '');
  const [currentValue, setCurrentValue] = useState<string>(initialValue);
  const [needMenu, setNeedMenu] = useState<boolean>(false);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);
  const [menuFocused, setMenuFocused] = useState<boolean>(false);
  const onMenuToggleRef = useIdentityRef(onMenuToggle);
  const openerRef = useRef<HTMLElement>(null);
  const menuShown = needMenu && menuElement !== null;

  const { refs, isPositioned, ...floating } = useFloating({
    open: needMenu,
    ...dropdownFloatingConfig(),
  });

  useImperativeHandle(refs.setFloating, () => menuElement as HTMLElement, [menuElement]);

  useEffect(() => {
    if (typeof value !== 'undefined') {
      // @todo по аналогии с <select /> надо проверять, есть ли значение в списке переданных
      setCurrentValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (disabled) {
      setNeedMenu(false);
    }

    if (!disabled && menuElement && isPositioned) {
      menuElement.focus();
    }

    // @todo menuShown в зависимости или useCallback
    onMenuToggleRef.current?.({ opened: menuShown });
  }, [disabled, menuElement, isPositioned]);

  const openerBinding: SelectOpenerBinding = {
    label,
    anchorRef: refs.setReference,
    openerRef,
    value: renderValue(currentValue),
    opened: menuShown,
    failed,
    disabled,
    menuFocused,
    onMouseDown: event => {
      if (!disabled) {
        !menuElement && event.preventDefault();
        setNeedMenu(a => !a);
      }
    },
    onKeyDown: e => {
      if (!disabled) {
        switch (e.code) {
          case 'Enter':
          case 'ArrowUp':
          case 'ArrowDown':
            setNeedMenu(true);
            break;
        }
      }
    },
  };

  const floatingStyle = useDropdownFloatingStyle({ refs, ...floating });

  const menuProps: SelectMenuProps = {
    ...dropdownProps,
    style: {
      ...dropdownProps?.style,
      ...floatingStyle,
    },
    menuRef: setMenuElement,
    value,
    loading,
    onFocus: () => {
      setMenuFocused(true);
    },
    onBlur: () => {
      setNeedMenu(false);
      setMenuFocused(false);
    },
    onKeyDown: event => {
      switch (event.code) {
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault(); // предотвращаем прокрутку страницы
          break;
        case 'Enter':
        case 'Escape':
          openerRef.current?.focus();
          break;
        case 'Tab':
          event.preventDefault(); // предотвращаем фокус на следующем элементе
          openerRef.current?.focus();
          break;
      }
    },
    onItemSelect: item => {
      const nextValue = DropdownItemUtils.getValue(item);

      setCurrentValue(nextValue);
      onValueChange?.(nextValue);
      setNeedMenu(false);
      openerRef.current?.focus();
    },
  };

  return (
    <>
      <SelectContext.Provider value={openerBinding}>
        {isValidElement(opener) && opener}
      </SelectContext.Provider>

      <FloatingPortal id=''>
        {needMenu && <SelectMenu {...menuProps}>{children}</SelectMenu>}
      </FloatingPortal>
    </>
  );
}

Select.FieldBlock = SelectFieldBlock;
Select.TextButton = SelectTextButton;

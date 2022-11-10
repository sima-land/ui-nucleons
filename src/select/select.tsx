import React, { isValidElement, useEffect, useRef, useState } from 'react';
import { SelectContext } from './utils';
import { SelectMenuProps, SelectOpenerBinding, SelectProps } from './types';
import { useIdentityRef } from '../hooks/identity';
import { DropdownItemUtils } from '../dropdown-item/utils';
import { FloatingPortal } from '@floating-ui/react-dom-interactions';
import { SelectMenu } from './parts/menu';
import { SelectFieldBlock } from './parts/block';
import { SelectTextButton } from './parts/button';

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
  label,
  opener = <SelectFieldBlock />,
  dropdownProps,
}: SelectProps) {
  // @todo добавить defaultValue при необходимости
  const [needMenu, setNeedMenu] = useState<boolean>(false);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);
  const [menuFocused, setMenuFocused] = useState<boolean>(false);
  const openerRef = useRef<HTMLElement>(null);
  const onMenuToggleRef = useIdentityRef(onMenuToggle);
  const menuShown = needMenu && menuElement !== null;

  useEffect(() => {
    if (disabled) {
      setNeedMenu(false);
    }

    if (!disabled && menuElement) {
      menuElement.focus();
    }

    onMenuToggleRef.current?.({ opened: menuShown });
  }, [menuElement, disabled]);

  const openerBinding: SelectOpenerBinding = {
    label,
    openerRef,
    value,
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

  const menuProps: SelectMenuProps = {
    ...dropdownProps,
    menuRef: setMenuElement,
    openerRef,
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
        case 'Enter':
        case 'Escape':
          openerRef.current?.focus();
          break;
        case 'Tab':
          event.preventDefault();
          openerRef.current?.focus();
          break;
      }
    },
    onItemSelect: item => {
      onValueChange?.(DropdownItemUtils.getValue(item));
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

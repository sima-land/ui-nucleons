import React, { isValidElement, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { SelectContext } from './utils';
import { SelectMenuProps, SelectOpenerBinding, SelectProps } from './types';
import { useIdentityRef } from '../hooks/identity';
import { DropdownItemUtils } from '../dropdown-item/utils';
import { FloatingPortal } from '@floating-ui/react';
import { SelectMenu } from './parts/menu';
import { SelectFieldBlock } from './parts/block';
import { SelectTextButton } from './parts/button';
import { useFloatingDropdown } from '../dropdown/utils';

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
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [needMenu, setNeedMenu] = useState<boolean>(false);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);
  const [menuFocused, setMenuFocused] = useState<boolean>(false);
  const openerRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLElement>(null);
  const referenceRef = useRef<HTMLElement>(null);
  const menuRef = useIdentityRef(menuElement);
  const onMenuToggleRef = useIdentityRef(onMenuToggle);
  const menuShown = needMenu && menuElement !== null;

  useImperativeHandle<HTMLElement | null, HTMLElement | null>(
    referenceRef,
    // если дополнительно указан якорь - используем его
    () => anchorRef.current ?? openerRef.current,
  );

  // ВАЖНО: вызываем useFloatingDropdown() **после** useImperativeHandle(referenceRef)
  const floating = useFloatingDropdown(menuRef, referenceRef);

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

    if (!disabled && menuElement) {
      menuElement.focus();
    }

    onMenuToggleRef.current?.({ opened: menuShown });
  }, [menuElement, disabled]);

  const openerBinding: SelectOpenerBinding = {
    label,
    openerRef,
    anchorRef,
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

  const menuProps: SelectMenuProps = {
    ...dropdownProps,
    style: {
      ...dropdownProps?.style,
      ...floating.style,
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

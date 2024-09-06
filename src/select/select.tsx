import { useCallback, useState } from 'react';
import { SelectContext } from './utils';
import { SelectContextValue, SelectProps } from './types';
import { SelectFieldBlock } from './parts/field-block';
import { SelectMenu } from './parts/menu';
import { useFloating } from '@floating-ui/react';
import { dropdownFloatingConfig, useDropdownFloatingStyle } from '../dropdown';
import { useIsomorphicLayoutEffect } from '../hooks';

/**
 * Поле выбора из списка.
 * @param props Свойства.
 * @return Элемент.
 */
export function Select(props: SelectProps) {
  const {
    opener = <SelectFieldBlock />,
    menu = <SelectMenu />,
    value,
    defaultValue,
    onValueChange,
  } = props;

  // @todo по аналогии с <select /> надо проверять, есть ли значение в списке переданных
  const [currentValue, setCurrentValue] = useState(() => value ?? defaultValue ?? '');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openerElement, setOpenerElement] = useState<HTMLElement | null>(null);
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);

  const menuFloating = useFloating({ open: menuOpen, ...dropdownFloatingConfig() });
  const { setReference, setFloating } = menuFloating.refs;
  const menuFloatingStyle = useDropdownFloatingStyle(menuFloating);

  useIsomorphicLayoutEffect(() => {
    if (typeof value === 'string') {
      setCurrentValue(value);
    }
  }, [value]);

  const contextValue: SelectContextValue = {
    selectProps: props,

    currentValue,
    setCurrentValue: useCallback(
      valueInit => {
        let nextValue = valueInit;

        if (typeof nextValue === 'function') {
          nextValue = nextValue(currentValue);
        }

        if (currentValue !== nextValue) {
          setCurrentValue(nextValue);
          onValueChange?.(nextValue);
        }
      },
      [currentValue, onValueChange],
    ),

    menuOpen,
    setMenuOpen,

    openerElement,
    setOpenerElement: useCallback(element => {
      setOpenerElement(element);
    }, []),

    anchorElement,
    setAnchorElement: useCallback(
      element => {
        setReference(element);
        setAnchorElement(element);
      },
      [setReference],
    ),

    menuElement,
    setMenuElement: useCallback(
      element => {
        setFloating(element);
        setMenuElement(element);
      },
      [setFloating],
    ),

    menuFloatingStyle,
  };

  return (
    <>
      <SelectContext.Provider value={contextValue}>
        {opener}
        {menu}
      </SelectContext.Provider>
    </>
  );
}

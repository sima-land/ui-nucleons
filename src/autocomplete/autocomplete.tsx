import React, { Children, KeyboardEventHandler, useCallback, useRef, useState } from 'react';
import { AutocompleteProps } from './types';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { DropdownItemElement } from '../dropdown-item/types';
import { DropdownItemUtils } from '../dropdown-item/utils';
import { DropdownLoading } from '../_internal/dropdown-loading';
import { FloatingPortal } from '@floating-ui/react-dom-interactions';
import { Input } from '../input';
import { useIsomorphicLayoutEffect } from '../hooks';
import { useFloatingDropdown } from '../dropdown/utils';
import { triggerInput } from '../helpers/events';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/up';
import styles from './autocomplete.module.scss';

/**
 * Поле ввода с подсказками.
 * @param props Свойства.
 * @return Элемент.
 */
export function Autocomplete({
  // specific Autocomplete props:
  children,
  loading,
  filterOption = defaultFilterOption,
  dropdownProps,

  // rest props:
  autoComplete,
  autoFocus,
  defaultValue,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  onInput,
  placeholder,
  readOnly,
  required,
  type,
  value,
  adornmentEnd = getDefaultAdornmentEnd,
  baseInputProps,
  ...restProps
}: AutocompleteProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openerRef = useRef<HTMLDivElement>(null);
  const { style: dropdownStyle } = useFloatingDropdown(menuRef, openerRef);

  const [needMenu, setNeedMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [currentValue, setCurrentValue] = useState<string>(() => `${value ?? defaultValue ?? ''}`);

  const items = Children.toArray(children).filter(
    (item): item is DropdownItemElement =>
      DropdownItemUtils.is(item) && filterOption(item, currentValue),
  );

  const canShowMenu = !disabled && (currentValue.length > 0 || items.length > 0);
  const menuShown = needMenu && canShowMenu;

  const selectItem = useCallback(
    (item: DropdownItemElement) => {
      inputRef.current && triggerInput(inputRef.current, DropdownItemUtils.getValue(item));
      setNeedMenu(false);
      setActiveIndex(-1);
    },
    [inputRef],
  );

  useIsomorphicLayoutEffect(() => {
    inputRef.current && setCurrentValue(inputRef.current.value);
  }, [value]);

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    event => {
      baseInputProps?.onKeyDown?.(event);

      switch (event.code) {
        case 'Escape': {
          setNeedMenu(false);
          break;
        }
        case 'Enter': {
          if (menuShown) {
            const item = items[activeIndex];
            item && selectItem(item);
            setNeedMenu(false);
          } else {
            setNeedMenu(true);
          }
          break;
        }
        case 'ArrowUp': {
          if (menuShown) {
            event.preventDefault();
            setActiveIndex(n => DropdownItemUtils.asLoopedIterator(items, n).prev() ?? -1);
          } else {
            setNeedMenu(true);
          }
          break;
        }
        case 'ArrowDown': {
          if (menuShown) {
            event.preventDefault();
            setActiveIndex(n => DropdownItemUtils.asLoopedIterator(items, n).next() ?? -1);
          } else {
            setNeedMenu(true);
          }
          break;
        }
      }
    },
    [menuShown, activeIndex, items, selectItem, baseInputProps?.onKeyDown],
  );

  return (
    <>
      <Input
        {...restProps}
        {...{
          autoComplete,
          autoFocus,
          defaultValue,
          disabled,
          id,
          name,
          onInput,
          placeholder,
          readOnly,
          required,
          type,
          value,
        }}
        inputRef={inputRef}
        blockRef={openerRef}
        onFocus={e => {
          onFocus?.(e);
          setNeedMenu(true);
        }}
        onBlur={e => {
          onBlur?.(e);
          setNeedMenu(false);
          setActiveIndex(-1);
        }}
        onChange={e => {
          onChange?.(e);
          setNeedMenu(true);
          setActiveIndex(-1);
          setCurrentValue(e.target.value);
        }}
        baseInputProps={{
          ...baseInputProps,
          onKeyDown: handleKeyDown,
        }}
        adornmentEnd={
          typeof adornmentEnd === 'function' ? adornmentEnd({ menuShown }) : adornmentEnd
        }
      />

      <FloatingPortal id=''>
        {menuShown && (
          <Dropdown
            ref={menuRef}
            {...dropdownProps}
            style={{ ...dropdownProps?.style, ...dropdownStyle }}
          >
            {!loading &&
              items.length > 0 &&
              items.map((item, index) => (
                <DropdownItem
                  key={index}
                  checked={index === activeIndex}
                  {...item.props}
                  onMouseDown={e => {
                    e.preventDefault();
                    item.props.onMouseDown?.(e);
                  }}
                  onClick={e => {
                    item.props.onClick?.(e);
                    !e.defaultPrevented && selectItem(item);
                  }}
                />
              ))}

            {!loading && items.length === 0 && (
              <DropdownItem size='s' noHover>
                Не найдено
              </DropdownItem>
            )}

            {loading && <DropdownLoading />}
          </Dropdown>
        )}
      </FloatingPortal>
    </>
  );
}

/**
 * Фильтр вариантов выбора по умолчанию.
 * @param item Вариант из меню.
 * @param inputValue Текущее значение в поле.
 * @return Нужно ли выводить опцию.
 */
function defaultFilterOption(item: DropdownItemElement, inputValue: string) {
  return DropdownItemUtils.getValue(item).toLowerCase().includes(inputValue.toLowerCase());
}

/**
 * Возвращает стандартную стрелку для поля ввода с подсказками.
 * @param data Данные о состоянии поля.
 * @return Элемент.
 */
function getDefaultAdornmentEnd(data: { menuShown: boolean }) {
  const ArrowSVG = data.menuShown ? UpSVG : DownSVG;

  return <ArrowSVG className={styles.arrow} data-testid='autocomplete:arrow-up' />;
}

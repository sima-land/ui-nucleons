import React, {
  Children,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Dropdown, DropdownProps } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { DropdownLoading } from '../_internal/dropdown-loading';
import { SelectContext, SelectFieldBlock, SelectTextButton } from './utils';
import { SelectOpenerProps, SelectProps } from './types';
import classNames from 'classnames/bind';
import styles from './select.module.scss';
import { useIdentityRef } from '../hooks/identity';
import { DropdownItemUtils } from '../dropdown-item/utils';
import { DropdownItemElement } from '../dropdown-item/types';

const cx = classNames.bind(styles);

/**
 * Поле выбора из списка.
 * @param props Свойства.
 * @return Элемент.
 */
export function Select({
  children,
  className,
  disabled,
  failed,
  loading,
  onValueChange,
  onMenuToggle,
  style,
  value,
  menuAlign = 'left',
  label,
  opener: Opener = 'field-block',
  fieldBlockProps,
  textButtonProps,
}: SelectProps) {
  const openerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const osComponentRef = useRef<OverlayScrollbarsComponent>(null);
  const [opened, setOpened] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [checkedIndex, setCheckedIndex] = useState<number>(-1);
  const [dropdownProps, setDropdownProps] = useState<DropdownProps | null>(null);
  const options = Children.toArray(children).filter(DropdownItemUtils.is);
  const isInitialRender = useRef<boolean>(true);
  const onMenuToggleRef = useIdentityRef(onMenuToggle);

  useEffect(() => {
    if (disabled) {
      setOpened(false);
      setFocused(false);
      openerRef.current?.blur();
    } else {
      const menu = menuRef.current;

      if (menu && opened) {
        menu.focus();
      }

      if (!isInitialRender.current) {
        // @todo вызывать на unmount при необходимости
        onMenuToggleRef.current?.({ opened });
      }
    }

    isInitialRender.current = false;
  }, [opened, disabled]);

  useEffect(() => {
    const menu = menuRef.current;
    const selector = '[data-select-role="option"]';
    const targetOption = menu?.querySelectorAll(selector)[checkedIndex];

    if (targetOption instanceof HTMLElement) {
      osComponentRef.current?.osInstance()?.scroll({
        el: targetOption,
        scroll: { y: 'ifneeded' },
      });
    }
  }, [checkedIndex]);

  const selectItem = useCallback(
    (item: DropdownItemElement) => {
      onValueChange?.(DropdownItemUtils.getValue(item));
    },
    [onValueChange],
  );

  const handleMenuKeyDown = useCallback<KeyboardEventHandler>(
    event => {
      switch (event.key) {
        case 'Enter': {
          const item = options[checkedIndex];

          if (item) {
            selectItem(item);
          }

          setCheckedIndex(-1);
          openerRef.current?.focus();
          break;
        }
        case 'ArrowUp':
          setCheckedIndex(n => {
            const nextIndex = DropdownItemUtils.asLoopedIterator(options, n).prev();
            return typeof nextIndex === 'undefined' ? -1 : nextIndex;
          });
          break;
        case 'ArrowDown':
          setCheckedIndex(n => {
            const nextIndex = DropdownItemUtils.asLoopedIterator(options, n).next();
            return typeof nextIndex === 'undefined' ? -1 : nextIndex;
          });
          break;
      }
    },
    [checkedIndex],
  );

  const handleMenuBlur = useCallback(() => {
    setOpened(false);
    setFocused(false);
  }, []);

  const handleOptionClick = useCallback(
    (item: DropdownItemElement): MouseEventHandler<HTMLDivElement> =>
      event => {
        item.props.onClick?.(event);
        selectItem(item);
        setOpened(false);
        openerRef.current?.focus();
      },
    [],
  );

  const openerData: SelectOpenerProps = {
    label,
    openerRef,
    value,
    opened,
    focused, // @todo возможно не стоит хранить состояние focused не в Select а в компонентах "открывашек"
    failed,
    disabled,
    onFocus: () => {
      !disabled && setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    },
    onMouseDown: () => {
      !disabled && setOpened(a => !a);
    },
    onKeyDown: e => {
      !disabled && e.key === 'Enter' && setOpened(a => !a);
    },
  };

  // @todo переделать на floating-ui без корневого элемента?
  return (
    <div className={cx('root', className)} style={style} data-testid='select'>
      <SelectContext.Provider value={{ fieldBlockProps, textButtonProps, setDropdownProps }}>
        {Opener === 'field-block' && <SelectFieldBlock {...openerData} />}
        {Opener === 'text-button' && <SelectTextButton {...openerData} />}
        {typeof Opener === 'function' && <Opener {...openerData} />}
      </SelectContext.Provider>

      {opened && (
        <Dropdown
          {...dropdownProps}
          ref={menuRef}
          customScrollbarProps={{ osComponentRef }}
          className={cx('menu', `align-${menuAlign}`)}
          tabIndex={0}
          role='listbox'
          onBlur={handleMenuBlur}
          onKeyDown={handleMenuKeyDown}
        >
          {loading ? (
            <DropdownLoading data-testid='select:loading-area' />
          ) : (
            options.map((item, index) => (
              <DropdownItem
                checked={checkedIndex === index}
                selected={value === DropdownItemUtils.getValue(item)}
                {...item.props}
                key={index}
                role='option'
                data-select-role='option'
                onClick={item.props.disabled ? undefined : handleOptionClick(item)}
              />
            ))
          )}
        </Dropdown>
      )}
    </div>
  );
}

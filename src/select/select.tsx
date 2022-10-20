import React, {
  Children,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Dropdown, DropdownProps } from '../dropdown';
import { DropdownItem, DropdownItemProps } from '../dropdown-item';
import { DropdownLoading } from '../_internal/dropdown-loading';
import { isMenuItem, SelectContext, SelectFieldBlock, SelectTextButton } from './utils';
import { SelectOpenerProps, SelectProps } from './types';
import classNames from 'classnames/bind';
import styles from './select.module.scss';
import { useIdentityRef } from '../hooks/identity';

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
  onChange,
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
  const options = Children.toArray(children).filter(isMenuItem);
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
    (item: ReactElement<DropdownItemProps>) => {
      const { value: itemValue, children: itemChildren } = item.props;

      // нативный select преобразует содержимое option к строке если не указан value, делаем также
      const result = typeof itemValue === 'string' ? itemValue : String(itemChildren);

      onChange?.({ value: result });
    },
    [onChange],
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
            const next = n - 1;
            return next >= 0 ? next : options.length - 1;
          });
          break;
        case 'ArrowDown':
          setCheckedIndex(n => {
            const next = n + 1;
            return next < options.length ? next : 0;
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
    (item: ReactElement<DropdownItemProps>): MouseEventHandler<HTMLDivElement> =>
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
                {...item.props}
                key={index}
                role='option'
                data-select-role='option'
                // @todo вызывать callback из пропсов DropdownItem если понадобится
                onClick={handleOptionClick(item)}
              />
            ))
          )}
        </Dropdown>
      )}
    </div>
  );
}

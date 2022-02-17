import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownItem, DropdownItemProps } from '../dropdown-item';
import { TextField, TextFieldProps } from '../text-field';
import { placeDropdown } from '../_internal/utils/dropdown';
import classnames from 'classnames/bind';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';
import { COLORS } from '../colors';
import { useOutsideClick } from '../hooks';
import { DropdownLoading } from '../_internal/dropdown-loading';
import { isNull } from 'lodash';
import styles from './autocomplete.module.scss';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export interface AutocompleteProps extends Omit<TextFieldProps, 'ref' | 'value' | 'defaultValue'> {
  /** Значение по умолчанию. */
  defaultValue?: string;

  /** Элементы меню. */
  items?: any[];

  /** Размер элемента меню. */
  itemSize?: DropdownItemProps['size'];

  /** Нужно ли выводить состояние загрузки списка. */
  loading?: boolean;

  /** Сработает при выборе. */
  onSelect?: (item: any) => void;

  /** Пресет (со стрелкой или без). */
  preset?: 'default' | 'filled-only-list';

  /** Выведет содержимое элемента. */
  renderItem?: (item: any) => React.ReactNode;

  /** Значение. */
  value?: string;
}

const cx = classnames.bind(styles);

/**
 * Поле ввода с подсказками.
 * @param props Свойства.
 * @param props.defaultValue Значение по умолчанию.
 * @param props.items Элементы меню.
 * @param props.itemSize Размер элемента меню.
 * @param props.loading Нужно ли выводить состояние загрузки списка.
 * @param props.onSelect Сработает при выборе.
 * @param props.preset Пресет (со стрелкой или без).
 * @param props.renderItem Выведет содержимое элемента.
 * @param props.value Значение.
 * @return Элемент.
 */
export const Autocomplete = ({
  items,
  itemSize,
  onSelect,
  onChange,
  onClick,
  onKeyDown,
  style,
  className,
  value,
  defaultValue,
  loading,
  renderItem = String,
  preset = 'default',
  'data-testid': dataTestId,
  ...restProps
}: AutocompleteProps) => {
  const osComponentRef = useRef<OverlayScrollbarsComponent>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLInputElement>();
  const menuRef = useRef<HTMLDivElement>();
  const [withMenu, toggleMenu] = useState(false);
  const [realValue, setRealValue] = useState<string | undefined>(value || defaultValue);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const canShowDropdown =
    preset === 'filled-only-list' ? withMenu && realValue && realValue.length > 0 : withMenu;

  const endAdornment = preset === 'default' ? <DownSVG fill={COLORS.get('gray38')} /> : undefined;

  useOutsideClick(rootRef, () => {
    toggleMenu(false);
  });

  useEffect(() => {
    setRealValue(value);
  }, [value]);

  useEffect(() => {
    setActiveIndex(null);
  }, [items]);

  useEffect(() => {
    const menu = menuRef.current;
    const osInstance = osComponentRef.current?.osInstance();

    if (menu && osInstance && activeIndex !== null) {
      const child = menu.querySelectorAll('[role="menuitem"]')[activeIndex];

      child instanceof HTMLElement &&
        osInstance.scroll({
          el: child,
          scroll: { y: 'ifneeded' },
        });
    }
  }, [activeIndex]);

  return (
    <div
      ref={rootRef as any}
      style={style}
      className={cx('root', className)}
      data-testid={dataTestId}
    >
      <TextField
        {...restProps}
        ref={fieldRef}
        focused={withMenu}
        endAdornment={endAdornment}
        data-testid='autocomplete:field'
        variant='desktop'
        value={value}
        multiline={false}
        onClick={e => {
          toggleMenu(true);
          onClick && onClick(e);
        }}
        onChange={(e: any) => {
          toggleMenu(true);
          setRealValue(e.target.value);
          setActiveIndex(0);
          onChange && onChange(e);
        }}
        className={cx('field')}
        onKeyDown={(e: React.KeyboardEvent) => {
          const size = items?.length || 0;

          let nextIndex;

          switch (e.key) {
            case 'ArrowDown':
              nextIndex = (!isNull(activeIndex) ? size + activeIndex + 1 : 0) % size;
              break;
            case 'ArrowUp':
              nextIndex = (size + Number(activeIndex) - 1) % size;
              break;
            case 'Enter':
              if (items && !isNull(activeIndex) && items.length > activeIndex) {
                onSelect && onSelect(items[activeIndex]);
                toggleMenu(false);
              }
              break;
          }

          Number.isFinite(nextIndex) && setActiveIndex(nextIndex as number);

          onKeyDown && onKeyDown(e as any);
        }}
      />

      {canShowDropdown && (
        <Dropdown
          {...placeDropdown(restProps.size)}
          ref={menuRef as any}
          data-testid='autocomplete:menu'
          className={cx('menu')}
          role='menu'
          customScrollbarProps={{ osComponentRef }}
        >
          {loading ? (
            <DropdownLoading data-testid='autocomplete:loading-area' />
          ) : (
            <>
              {items && items.length > 0 ? (
                items.map((item, index) => (
                  <DropdownItem
                    size={itemSize}
                    key={index}
                    role='menuitem'
                    checked={index === activeIndex}
                    onClick={() => {
                      onSelect && onSelect(item);
                      setActiveIndex(null);
                      toggleMenu(false);
                      fieldRef.current && fieldRef.current.focus();
                    }}
                  >
                    {renderItem(item)}
                  </DropdownItem>
                ))
              ) : (
                <DropdownItem size='m' noHover>
                  Не найдено
                </DropdownItem>
              )}
            </>
          )}
        </Dropdown>
      )}
    </div>
  );
};

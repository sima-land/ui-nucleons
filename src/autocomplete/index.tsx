import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownItem, DropdownItemProps } from '../dropdown-item';
import { TextField, TextFieldProps } from '../text-field';
import { placeDropdown } from '../_internal/utils/dropdown';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/up';
import { DropdownLoading } from '../_internal/dropdown-loading';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classnames from 'classnames/bind';
import styles from './autocomplete.module.scss';

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
 * @return Элемент.
 */
export const Autocomplete = ({
  items,
  itemSize,
  onSelect,
  onChange,
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
  const fieldRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [withMenu, toggleMenu] = useState(false);
  const [realValue, setRealValue] = useState<string | undefined>(value || defaultValue);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const needMenu =
    preset === 'filled-only-list' ? withMenu && realValue && realValue.length > 0 : withMenu;

  const arrowIcon = needMenu ? (
    <UpSVG className={cx('arrow')} data-testid='autocomplete:arrow-up' />
  ) : (
    <DownSVG className={cx('arrow')} data-testid='autocomplete:arrow-down' />
  );

  const endAdornment = preset === 'default' ? arrowIcon : undefined;

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
    <div style={style} className={cx('root', className)} data-testid={dataTestId}>
      <TextField
        {...restProps}
        ref={fieldRef}
        focused={withMenu}
        endAdornment={endAdornment}
        data-testid='autocomplete:field'
        variant='desktop'
        value={realValue}
        multiline={false}
        className={cx('field')}
        onFocus={() => {
          toggleMenu(true);
          setActiveIndex(null);
        }}
        onBlur={() => {
          toggleMenu(false);
        }}
        onChange={(event: any) => {
          toggleMenu(true);
          setRealValue(event.target.value);
          setActiveIndex(0);
          onChange?.(event);
        }}
        onKeyDown={(event: React.KeyboardEvent) => {
          const size = items?.length || 0;

          let nextIndex: number | undefined;

          switch (event.key) {
            case 'ArrowDown':
              nextIndex = (activeIndex !== null ? size + activeIndex + 1 : 0) % size;
              break;
            case 'ArrowUp':
              nextIndex = (size + Number(activeIndex) - 1) % size;
              break;
            case 'Enter':
              if (items && activeIndex !== null && items.length > activeIndex) {
                onSelect && onSelect(items[activeIndex]);
                toggleMenu(false);
              }
              break;
          }

          if (typeof nextIndex === 'number') {
            event.preventDefault(); // не даём каретке в поле перемещаться
            setActiveIndex(nextIndex);
          }

          onKeyDown?.(event as any);
        }}
      />

      {needMenu && (
        <Dropdown
          {...placeDropdown(restProps.size)}
          ref={menuRef}
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
                    onMouseDown={event => {
                      // чтобы при нажатии на опцию предотвратить blur на поле
                      event.preventDefault();
                    }}
                    onClick={() => {
                      onSelect?.(item);
                      setActiveIndex(null);
                      toggleMenu(false);
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

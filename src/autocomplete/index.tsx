import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownItem, Props as ItemProps } from '../dropdown-item';
import TextField, { Props as TextFieldProps } from '../text-field';
import { placeDropdown } from '../_internal/utils/dropdown';
import classnames from 'classnames/bind';
import DownSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/down';
import { COLORS } from '../colors';
import { useOutsideClick } from '../hooks';
import { scrollToChild } from '../helpers/scroll-to-child';
import { DropdownLoading } from '../_internal/dropdown-loading';
import { isNull } from 'lodash';
import styles from './autocomplete.scss';

export interface Props extends Omit<TextFieldProps, 'ref' | 'value' | 'defaultValue'> {
  value?: string
  defaultValue?: string
  items?: any[]
  itemSize?: ItemProps['size']
  onSelect?: (item: any) => void
  loading?: boolean
  renderItem?: (item: any) => React.ReactNode
  preset?: 'default' | 'filled-only-list'
}

const cx = classnames.bind(styles);

/**
 * Поле ввода с подсказками.
 * @param {Object} props Свойства.
 * @param {Array} props.items Элементы меню.
 * @param {string} props.itemSize Размер элемента меню.
 * @param {Function} props.onSelect Сработает при выборе.
 * @param {Function} props.onChange Сработает при вводе значения в поле.
 * @param {Function} props.onClick Сработает при клике.
 * @param {Function} props.onKeyDown Сработает при событии "keydown".
 * @param {Object} props.style Стили.
 * @param {string} props.className Класс.
 * @param {string} props.value Значение.
 * @param {string} props.defaultValue Значение по умолчанию.
 * @param {boolean} props.loading Нужно ли выводить состояние загрузки списка.
 * @param {Function} props.renderItem Выведет содержимое элемента.
 * @param {'default' | 'filled-only-list'} props.preset Пресет (со стрелкой или без).
 * @param {string} props.'data-testid' Идентификатор для систем автоматизированного тестирования.
 * @return {ReactElement} Элемент.
 */
export const Autocomplete: React.FC<Props> = ({
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
}) => {
  const rootRef = useRef();
  const fieldRef = useRef<HTMLInputElement>();
  const menuRef = useRef<HTMLDivElement>();
  const [needDropdown, toggleDropdown] = useState(false);
  const [realValue, setRealValue] = useState<string | undefined>(value || defaultValue);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const canShowDropdown = preset === 'filled-only-list'
    ? needDropdown && realValue && realValue.length > 0
    : needDropdown;

  const endAdornment = preset === 'default'
    ? <DownSVG fill={COLORS.get('gray38')} />
    : undefined;

  useOutsideClick(rootRef, () => {
    toggleDropdown(false);
  });

  useEffect(() => {
    setRealValue(value);
  }, [value]);

  useEffect(() => {
    setActiveIndex(null);
  }, [items]);

  useEffect(() => {
    const menu = menuRef.current;

    !isNull(activeIndex)
      && menu?.children?.[activeIndex]
      && scrollToChild(menu, menu.children[activeIndex] as HTMLElement);
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
        focused={needDropdown}
        endAdornment={endAdornment}
        data-testid='autocomplete:field'
        variant='desktop'
        value={value}
        multiline={false}
        onClick={e => {
          toggleDropdown(true);
          onClick && onClick(e);
        }}
        onChange={(e: any) => {
          toggleDropdown(true);
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
                toggleDropdown(false);
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
        >
          {loading
            ? (
              <DropdownLoading data-testid='autocomplete:loading-area' />
            )
            : (
              <>
                {
                  items && items.length > 0
                    ? items.map((item, index) => (
                      <DropdownItem
                        size={itemSize}
                        key={index}
                        role='menuitem'
                        checked={index === activeIndex}
                        noHover={index !== activeIndex}
                        onClick={() => {
                          onSelect && onSelect(item);
                          setActiveIndex(null);
                          toggleDropdown(false);
                          fieldRef.current && fieldRef.current.focus();
                        }}
                        onMouseEnter={() => {
                          setActiveIndex(index);
                        }}
                      >
                        {renderItem(item)}
                      </DropdownItem>
                    ))
                    : (
                      <DropdownItem size='m' noHover>
                        Не найдено
                      </DropdownItem>
                    )
                }
              </>
            )
          }
        </Dropdown>
      )}
    </div>
  );
};

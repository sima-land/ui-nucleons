import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { TextField, Props as TextFieldProps } from '../text-field';
import { placeDropdown } from '../_internal/utils/dropdown';
import classnames from 'classnames/bind';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/up';
import styles from './select.module.scss';
import { COLORS } from '../colors';
import { useOutsideClick } from '../hooks';
import { DropdownLoading } from '../_internal/dropdown-loading';

type Size = 's' | 'm' | 'l' | 'xl';

export interface Props extends Omit<TextFieldProps, 'style'> {

  /** Нужно ли выводить состояние загрузки списка. */
  loading?: boolean

  /** Сработает при открытии/закрытии меню. */
  onMenuToggle?: (opened: boolean) => void

  /** Сработает при выборе. */
  onSelect?: (option: any) => void

  /** Список опций. */
  options: any[]

  /** Размер для DropdownItem. */
  optionSize?: Size

  /** Вернет содержимое опции. */
  renderOption?: (option: any) => React.ReactNode

  /** Стили. */
  style?: React.CSSProperties
}

const cx = classnames.bind(styles);

/**
 * Поле выбора из списка.
 * @param props Свойства.
 * @return Элемент.
 */
export const Select: React.FC<Props> = ({
  options,
  optionSize,
  onSelect,
  style,
  className,
  label,
  onClick,
  value,
  loading,
  onMenuToggle,
  renderOption = String,
  'data-testid': dataTestId,
  ...restProps
}) => {
  const fieldRef = useRef<HTMLInputElement>();
  const menuRef = useRef<HTMLDivElement>();
  const [opened, toggleMenu] = useState(false);

  const ArrowSVG = opened ? UpSVG : DownSVG;

  useOutsideClick(menuRef, () => {
    toggleMenu(false);
  });

  useEffect(() => {
    opened && (menuRef.current as any).focus();
    onMenuToggle && onMenuToggle(opened);
  }, [opened]);

  return (
    <div
      style={style}
      className={cx('root', className)}
      data-testid={dataTestId}
    >
      <TextField
        {...restProps}
        readOnly
        data-testid='select:field'
        ref={fieldRef}
        variant='desktop'
        label={label}
        value={value}
        multiline={false}
        focused={opened}
        onClick={e => {
          toggleMenu(!opened);
          onClick && onClick(e);
        }}
        onBlur={({ relatedTarget }) => {
          relatedTarget !== menuRef.current && toggleMenu(false);
        }}
        onKeyDown={(e: React.KeyboardEvent) => {
          e.key === 'Enter' && toggleMenu(true);
        }}
        className={cx('field')}
        endAdornment={(
          <ArrowSVG
            fill={COLORS.get('gray38')}
          />
        )}
      />

      {opened && (loading || options.length > 0) && (
        <Dropdown
          {...placeDropdown(restProps.size)}
          ref={menuRef as any}
          data-testid='select:menu'
          tabIndex={-1}
          className={cx('menu')}
          onBlur={() => {
            toggleMenu(false);
          }}
          role='menu'
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              toggleMenu(false);
              fieldRef.current && fieldRef.current.focus();
            }
          }}
        >
          {loading
            ? (
              <DropdownLoading data-testid='select:loading-area' />
            )
            : options.map((option, index) => (
              <DropdownItem
                size={optionSize}
                key={index}
                role='menuitem'
                onClick={() => {
                  toggleMenu(false);
                  onSelect && onSelect(option);
                }}
              >
                {renderOption(option)}
              </DropdownItem>
            ))
          }
        </Dropdown>
      )}
    </div>
  );
};

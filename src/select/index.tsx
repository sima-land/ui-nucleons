import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import TextField, { Props as TextFieldProps } from '../text-field';
import { placeDropdown } from '../_internal/utils/dropdown';
import classnames from 'classnames/bind';
import DownSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/up';
import styles from './select.scss';
import { COLORS } from '../colors';
import { useOutsideClick } from '../hooks';
import { DropdownLoading } from '../_internal/dropdown-loading';

type Size = 's' | 'm' | 'l' | 'xl';

export interface Props extends Omit<TextFieldProps, 'style'> {
  options: any[]
  optionSize?: Size
  onSelect?: (option: any) => void
  style?: React.CSSProperties
  loading?: boolean
  onMenuToggle?: (opened: boolean) => void
  renderOption?: (option: any) => React.ReactNode
}

const cx = classnames.bind(styles);

/**
 * Поле выбора из списка.
 * @param props Свойства.
 * @param props.options Список опций.
 * @param props.optionSize Размер для DropdownItem.
 * @param props.onSelect Сработает при выборе.
 * @param props.style Стили.
 * @param props.className Класс.
 * @param props.label Ярлык.
 * @param props.onClick Сработает при клике по полю.
 * @param props.value Введенное значение.
 * @param props.loading Нужно ли выводить состояние загрузки списка.
 * @param props.onMenuToggle Сработает при открытии/закрытии меню.
 * @param props.renderOption Вернет содержимое опции.
 * @param props.'data-testid' Идентификатор для систем автоматизированного тестирования.
 * @return {ReactElement} Компонент.
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

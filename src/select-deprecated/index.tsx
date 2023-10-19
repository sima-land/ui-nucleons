import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { TextField, TextFieldProps } from '../text-field';
import { placeDropdown } from '../_internal/utils/dropdown';
import classnames from 'classnames/bind';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Down';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Up';
import styles from './select.module.scss';
import { COLORS } from '../colors';
import { DropdownLoading } from '../_internal/dropdown-loading';
import { useOutsideClick } from '../hooks';

type Size = 's' | 'm' | 'l' | 'xl';

export interface SelectProps extends Omit<TextFieldProps, 'style' | 'endAdornment'> {
  /** Нужно ли выводить состояние загрузки списка. */
  loading?: boolean;

  /** Сработает при открытии/закрытии меню. */
  onMenuToggle?: (opened: boolean) => void;

  /** Сработает при выборе. */
  onSelect?: (option: any) => void;

  /** Список опций. */
  options: any[];

  /** Размер для DropdownItem. */
  optionSize?: Size;

  /** Вернет содержимое опции. */
  renderOption?: (option: any) => ReactNode;

  /** Стили. */
  style?: CSSProperties;

  endAdornment?: TextFieldProps['endAdornment'] | ((opened: boolean) => ReactNode);
}

const cx = classnames.bind(styles);

/**
 * Выводит иконку стрелки для поля Select по умолчанию.
 * @param opened Открыт ли список опций.
 * @return Элемент.
 */
export const renderDefaultArrow = (opened: boolean) => {
  const ArrowSVG = opened ? UpSVG : DownSVG;
  return <ArrowSVG fill={COLORS.get('basic-gray38')} />;
};

/**
 * Поле выбора из списка.
 * @deprecated Следует использовать новую реализацию из "@sima-land/ui-nucleons/select".
 * @param props Свойства.
 * @return Элемент.
 */
export const Select = ({
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
  size,
  endAdornment = renderDefaultArrow,
  ...restProps
}: SelectProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [opened, toggleMenu] = useState<boolean>(false);

  useEffect(() => {
    opened && menuRef.current && menuRef.current.focus();
    onMenuToggle && onMenuToggle(opened);
  }, [opened]);

  useOutsideClick(rootRef, toggleMenu.bind(null, false));

  return (
    <div ref={rootRef} style={style} className={cx('root', className)} data-testid={dataTestId}>
      <TextField
        {...restProps}
        size={size}
        blockProps={{
          ref: fieldRef,
          tabIndex: 0,
          onMouseDown: () => {
            toggleMenu(a => !a);
          },
          onKeyDown: e => {
            e.key === 'Enter' && toggleMenu(true);
          },
        }}
        onClick={e => {
          e.preventDefault();
          onClick && onClick(e);
        }}
        className={styles.field}
        data-testid='select:field'
        label={label}
        focused={opened}
        baseInputProps={{
          // чтобы не ловить фокус на поле
          style: { pointerEvents: 'none' },
          tabIndex: -1,
        }}
        value={value}
        multiline={false}
        variant='desktop'
        readOnly
        endAdornment={typeof endAdornment === 'function' ? endAdornment(opened) : endAdornment}
      />

      {opened && (loading || options.length > 0) && (
        <Dropdown
          {...placeDropdown(size)}
          ref={menuRef as any}
          data-testid='select:menu'
          role='menu'
          tabIndex={-1}
          className={cx('menu')}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              toggleMenu(false);
              fieldRef.current && fieldRef.current.focus();
            }
          }}
          onBlur={() => {
            toggleMenu(false);
            fieldRef.current && fieldRef.current.focus();
          }}
        >
          {loading ? (
            <DropdownLoading data-testid='select:loading-area' />
          ) : (
            options.map((option, index) => (
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
          )}
        </Dropdown>
      )}
    </div>
  );
};

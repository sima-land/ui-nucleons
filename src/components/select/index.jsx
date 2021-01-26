import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import TextField from '../text-field';
import classnames from 'classnames/bind';
import DownSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/up';
import styles from './select.scss';
import { COLORS } from '../constants';
import { useOutsideClick } from '../hooks';
import Spinner from '../spinner';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Поле выбора из списка.
 * @param {Object} props Свойства.
 * @param {Array} [props.options] Список опций.
 * @param {'s' | 'm' | 'l'} [props.optionSize] Размер для DropdownItem.
 * @param {Function} [props.onSelect] Сработает при выборе.
 * @param {Object} [props.style] Стили.
 * @param {string} [props.className] Класс.
 * @param {string} [props.label] Ярлык.
 * @param {Function} [props.onClick] Сработает при клике по полю.
 * @param {string} props.value Введенное значение.
 * @param {boolean} [props.loading] Нужно ли выводить состояние загрузки списка.
 * @param {string} [props.'data-testid'] Идентификатор для систем автоматизированного тестирования.
 * @param {Function} props.onMenuToggle Сработает при открытии/закрытии меню.
 * @param {Function} props.renderOption Вернет содержимое опции.
 * @return {ReactElement} Компонент.
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
  ...restProps
}) => {
  const fieldRef = useRef();
  const menuRef = useRef();
  const [opened, toggleMenu] = useState(false);

  const ArrowSVG = opened ? UpSVG : DownSVG;

  useOutsideClick(menuRef, () => {
    toggleMenu(false);
  });

  useEffect(() => {
    opened && menuRef.current?.focus();
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
        baseInputProps={{
          onKeyDown: event => {
            event.key === 'Enter' && toggleMenu(true);
          },
        }}
        className={cx('field')}
        endAdornment={(
          <ArrowSVG
            fill={COLORS.get('gray38')}
          />
        )}
      />

      {opened && (loading || options?.length > 0) && (
        <Dropdown
          ref={menuRef}
          data-testid='select:menu'
          tabIndex={-1}
          className={cx('menu')}
          onBlur={() => {
            toggleMenu(false);
          }}
          role='menu'
          onKeyDown={event => {
            if (event.key === 'Enter') {
              toggleMenu(false);
              fieldRef.current && fieldRef.current.focus();
            }
          }}
        >
          {loading
            ? (
              <div
                data-testid='select:loading-area'
                className={cx('loading-area')}
              >
                <Spinner size='small' />
              </div>
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

Select.propTypes = {
  /**
   * Список опций.
   */
  options: PropTypes.array,

  /**
   * Размер для DropdownItem.
   */
  optionSize: PropTypes.oneOf(['s', 'm', 'l']),

  /**
   * Сработает при выборе.
   */
  onSelect: PropTypes.func,

  /**
   * Стили.
   */
  style: PropTypes.object,

  /**
   * Класс.
   */
  className: PropTypes.string,

  /**
   * Ярлык.
   */
  label: PropTypes.string,

  /**
   * Сработает при клике по полю.
   */
  onClick: PropTypes.func,

  /**
   * Введенное значение.
   */
  value: PropTypes.string,

  /**
   * Нужно ли выводить состояние загрузки списка.
   */
  loading: PropTypes.bool,

  /**
   * Сработает при открытии/закрытии меню.
   */
  onMenuToggle: PropTypes.func,

  /**
   * Вернет содержимое опции.
   */
  renderOption: PropTypes.func,

  /**
   * Идентификатор для систем автоматизированного тестирования.
   */
  'data-testid': PropTypes.string,
};

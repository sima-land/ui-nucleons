import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import DownSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/up';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import TextField from '../text-field';
import { MaskedField } from '../masked-field';
import { useOutsideClick } from '../hooks';
import { IDS, countriesList } from './presets';
import { marginLeft } from '../styling/sizes';
import { COLORS } from '../colors';
import classes from './phone-input.scss';
import PropTypes from 'prop-types';
import { defineCountry } from './utils';

const cx = classnames.bind(classes);

/**
 * Удаляет из значения код переданной страны.
 * @param {string} value Значение.
 * @param {Object} country Данные страны.
 * @return {string} Значение без кода.
 */
const formatValue = (value, country) => value.replace(/\D/g, '').slice(country.codeChars.length);

/**
 * Компонент поля ввода номера телефона.
 * @param {Object} props Параметры компонента.
 * @param {string} props.label Ярлык.
 * @param {Function} [props.onCountrySelect] Срабатывает при изменении страны.
 * @param {Object} [props.style] Стили.
 * @param {string} [props.className] Класс.
 * @param {string} [props.'data-testid'] Идентификатор для систем автоматизированного тестирования.
 * @param {Function} [props.onBlur] Сработает при "blur".
 * @param {string} props.value Значение.
 * @param {Function} [props.onChange] Сработает при изменении поля. Не рекомендуется использовать.
 * @return {ReactElement} Компонент.
 */
export const PhoneInput = ({
  'data-testid': testId,
  className,
  label = 'Телефон',
  onBlur,
  onCountrySelect,
  style,
  value = '',
  onChange,
  ...restProps
}) => {
  // маску определяем автоматически только при старте
  const [country, setCountry] = useState(defineCountry(value));
  const [cleanValue, setCleanValue] = useState(formatValue(value, country));
  const [isPopupOpen, togglePopup] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    setCleanValue(formatValue(value, country));
  }, [value]);

  useOutsideClick(dropdownRef, event => {
    event.stopPropagation();
    togglePopup(false);
  });

  const AdornmentSVG = isPopupOpen ? UpSVG : DownSVG;

  const commonFieldProps = {
    ...restProps,
    label,
    multiline: false,
    className: cx('field'),
    endAdornment: (
      <div
        className={cx('adornment')}
        data-testid='phone-input:dropdown-opener'
        onClick={event => {
          event.stopPropagation();
          togglePopup(true);
        }}
      >
        <img
          alt=''
          width={24}
          height={24}
          src={country.imageSrc}
        />
        <AdornmentSVG
          fill={COLORS.get('gray38')}
          className={marginLeft(1)}
        />
      </div>
    ),
  };

  return (
    <div
      data-testid={testId}
      style={style}
      className={cx('root', className)}
    >
      {
        country.id === IDS.other
          ? (
            <TextField
              {...commonFieldProps}
              onChange={e => {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 20);
                onChange && onChange(e);
              }}
              onBlur={e => {
                onBlur && onBlur(e, {
                  value: e.target.value,
                  cleanValue: e.target.value,
                  ready: e.target.value.length > 0,
                });
              }}
            />
          ) : (
            <MaskedField
              {...commonFieldProps}

              // убираем код страны, так как он уже зашит в маску
              value={cleanValue}

              mask={country.mask}
              onBlur={(event, state) => {
                onBlur && onBlur(event, {
                  ...state,

                  // вставляем код страны обратно в чистое значение
                  cleanValue: `${country.codeChars}${state.cleanValue}`,
                });
              }}
            />
          )
      }

      {isPopupOpen && (
        <Dropdown
          ref={dropdownRef}
          role='menu'
          className={cx('popup')}
          data-testid='phone-input:dropdown'
        >
          {countriesList.map(
            (item, index) => item.id === country.id
              ? null
              : (
                <DropdownItem
                  key={index}
                  size='l'
                  role='menuitem'
                  className={cx('popup-item')}
                  onClick={() => {
                    togglePopup(false);
                    setCountry(item);
                    onCountrySelect && onCountrySelect(item);
                  }}
                >
                  <img
                    alt=''
                    width={24}
                    height={24}
                    src={item.imageSrc}
                  />
                  <span className={cx('item-name')}>{item.name}</span>
                  <span className={cx('item-code')}>{item.code}</span>
                </DropdownItem>
              )
          )}
        </Dropdown>
      )}
    </div>
  );
};

PhoneInput.propTypes = {
  /**
   * Ярлык.
   */
  label: PropTypes.string,

  /**
   * Сработает при выборе страны.
   */
  onCountrySelect: PropTypes.func,

  /**
   * Стили.
   */
  style: PropTypes.object,

  /**
   * Класс.
   */
  className: PropTypes.string,

  /**
   * Идентификатор для систем автоматизированного тестирования.
   */
  'data-testid': PropTypes.string,

  /**
   * Значение.
   */
  value: PropTypes.string,

  /**
   * Сработает при событии "blur".
   */
  onBlur: PropTypes.func,

  /**
   * Сработает при изменении поля. Не рекомендуется использовать.
   */
  onChange: PropTypes.func,
};

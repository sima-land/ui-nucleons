import React, { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import DownSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/up';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { MaskedField } from '../masked-field';
import { useOutsideClick } from '../hooks';
import { countries, countriesList } from './presets';
import { marginLeft } from '../styling/sizes';
import { COLORS } from '../constants';
import classes from './phone-input.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Компонент поля ввода номера телефона.
 * @param {Object} props Параметры компонента.
 * @param {string} props.label Ярлык.
 * @param {Function} [props.onCountrySelect] Срабатывает при изменении страны.
 * @param {Object} [props.style] Стили.
 * @param {string} [props.className] Класс.
 * @return {ReactElement} Компонент.
 */
export const PhoneInput = ({
  label = 'Телефон',
  onCountrySelect,
  style,
  className,
  'data-testid': testId,
  ...restOptions
}) => {
  const [countryId, setCountryId] = useState('russia');
  const [isPopupOpen, togglePopup] = useState(false);
  const dropdownRef = useRef();
  const country = countries[countryId];

  useOutsideClick(dropdownRef, event => {
    event.stopPropagation();
    togglePopup(false);
  });

  const AdornmentSVG = isPopupOpen ? UpSVG : DownSVG;

  return (
    <div
      data-testid={testId}
      style={style}
      className={cx('root', className)}
    >
      <MaskedField
        {...restOptions}
        mask={country.mask}
        label={label}
        className={cx('field')}
        endAdornment={(
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
        )}
      />

      {isPopupOpen && (
        <Dropdown
          ref={dropdownRef}
          role='menu'
          className={cx('popup')}
          data-testid='phone-input:dropdown'
        >
          {countriesList.map(
            (item, index) => item.id === countryId
              ? null
              : (
                <DropdownItem
                  key={index}
                  size='l'
                  role='menuitem'
                  className={cx('popup-item')}
                  onClick={() => {
                    togglePopup(false);
                    setCountryId(item.id);
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
};

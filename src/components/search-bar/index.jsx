import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './search-bar.scss';
import Link from '../link';
import { isFunction, once } from 'lodash';
import { COLORS } from '../colors';
import { Dropdown } from '../dropdown';
import { DropdownItem } from '../dropdown-item';
import { useOutsideClick } from '../hooks/';
import on from '../helpers/on';

import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Filled/cross';
import SearchSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/magnifier';
import MoreVertSVG from '@dev-dep/ui-quarks/icons/24x24/Filled/more-vert.js';

export const cx = classnames.bind(classes);

/**
 * Компонент поисковой строки.
 * @param {Object} props Свойства компонента.
 * @param {string} props.value Поисковый Запрос.
 * @param {Function} props.onChange Вызовется при изменении поискового запроса.
 * @param {'none'|'text'|'decimal'|'numeric'|'tel'|'search'|'email'|'url'} [props.inputMode] Тип клавиатуры.
 * @param {string} [props.placeholder] Подсказка.
 * @param {Function} [props.onClear] Вызовется при нажатии на кнопку очистки.
 * @param {string} [props.buttonText] Текст кнопки.
 * @param {Function} [props.onButtonClick] Обработчик нажатия на кнопку.
 * @param {Array} [props.endButtons] Кнопки(а) после поля.
 * @param {Array} [props.startButtons] Кнопки(а) до поля.
 * @param {boolean} [props.withSearchIcon] Признак наличия иконки поиска слева.
 * @param {boolean} [props.autoFocus] Признак автофокуса.
 * @param {string} [props.description] Описание в поле ввода.
 * @return {ReactElement} Компонент.
 */
export const SearchBar = ({
  inputMode,
  value,
  onChange,
  placeholder = 'Поиск',
  onClear,
  endButtons = [],
  startButtons = [],
  withSearchIcon = true,
  autoFocus = true,
  description,
}) => {
  const [shownDropdown, toggleDropdown] = useState(false);
  const inputRef = useRef();
  const dropDownRef = useRef();
  const dropDownButtonRef = useRef();

  const needHideEndButtons = endButtons.length > 1;

  useOutsideClick(dropDownRef, event => !dropDownButtonRef.current.contains(event.target) && toggleDropdown(false));
  needHideEndButtons && useEffect(() => on(window, 'resize', once(() => toggleDropdown(false)), []));

  return (
    <div className={cx('wrapper')}>
      {Boolean(startButtons.length) && (
        <div className={cx('before-field')}>
          <div className={cx('buttons-container')}>
            {startButtons.map((props, index) => <Button {...props} key={index} />)}
          </div>
        </div>
      )}
      <label className={cx('input-wrapper')}>
        {withSearchIcon && (
          <span className={cx('search-icon')}>
            <SearchSVG
              fill={COLORS.get('gray38')}
              aria-hidden
            />
          </span>
        )}
        <div className={cx('input-container')}>
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            className={cx('search-field')}
            placeholder={placeholder}
            autoFocus={autoFocus}
            data-testid='search-bar-input'
            type='text'
            inputMode={inputMode}
            tabIndex={0}
          />
          {description && (
            <div className={cx('description-container')}>
              <span className={cx('description')}>{description}</span>
            </div>
          )}
        </div>
        {isFunction(onClear) && value && (
          <Link
            onClick={event => {
              onClear(event);
              inputRef.current.focus();
            }}
            pseudo
            aria-label='Очистить'
            data-testid='search-bar:clear-icon'
            className={cx('clear-icon')}
            children={(
              <CrossSVG
                fill={COLORS.get('gray38')}
                aria-hidden
              />
            )}
          />
        )}
      </label>
      {Boolean(endButtons.length) && (
        <>
          <div className={cx('after-field', needHideEndButtons && 'wide-screen')}>
            <div className={cx('buttons-container')}>
              {endButtons.map((props, index) => <Button {...props} key={index} />)}
            </div>
          </div>
          {needHideEndButtons && (
            <div className={cx('after-field', 'narrow-screen')}>
              <div className={cx('buttons-container')}>
                <Button
                  text='Больше'
                  ref={dropDownButtonRef}
                  icon={MoreVertSVG}
                  onClick={() => toggleDropdown(!shownDropdown)}
                />
              </div>
              {shownDropdown && (
                <div ref={dropDownRef} className={cx('dropdown-container')}>
                  <Dropdown>
                    {endButtons.map(({ text, onClick }, index) => (
                      <DropdownItem
                        size='s'
                        key={index}
                        onClick={event => {
                          onClick(event);
                          toggleDropdown(false);
                        }}
                        children={text}
                      />
                    ))}
                  </Dropdown>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

/**
 * Компонент кнопки.
 * @param {Object} props Свойства.
 * @param {string} props.text Текст кнопки.
 * @param {Function} props.onClick Обработчик клика.
 * @param {ReactElement} [props.icon] Иконка.
 * @param {string} [props.iconColor] Цвет иконки.
 * @return {ReactElement} Компонент.
 */
const Button = forwardRef(function Button ({ text, icon: Icon, iconColor = 'gray87', onClick }, ref) {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cx('button')}
      role='button'
      data-testid='search-bar-button'
      tabIndex={0}
      aria-label={Icon && text}
    >
      {Icon
        ? (
          <Icon
            fill={COLORS.get(iconColor)}
            aria-hidden='true'
          />
        )
        : text
      }
    </div>
  );
});

const ButtonTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
};

Button.propTypes = ButtonTypes;

SearchBar.propTypes = {
  inputMode: PropTypes.oneOf(['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  onClear: PropTypes.func,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  endButtons: PropTypes.arrayOf(PropTypes.shape(ButtonTypes)),
  startButtons: PropTypes.arrayOf(PropTypes.shape(ButtonTypes)),
  withSearchIcon: PropTypes.bool,
  autoFocus: PropTypes.bool,
  description: PropTypes.string,
};

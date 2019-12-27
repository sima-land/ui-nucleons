import React, { useState, forwardRef, useEffect } from 'react';
import CheckboxIcon from '../icons/checkbox.svg';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './checkbox.scss';
import isFunction from 'lodash/isFunction';

const cx = classnames.bind(classes);

/**
 * Возвращает компонент галочки.
 * @param {Object} props Свойства.
 * @param {boolean} props.checked Отмечена ли галочка.
 * @param {boolean} props.disabled Отключена ли галочка.
 * @param {Function} props.onChange Сработает при смене состояния.
 * @param {string} props.className CSS-класс.
 */
const Checkbox = forwardRef(function Checkbox ({
  checked = false,
  disabled,
  onChange,
  className,
  ...restProps
}, ref) {
  const [isChecked, toggleCheck] = useState(checked);

  useEffect(() => toggleCheck(checked), [checked]);

  return (
    <span className={cx('checkbox-wrapper', className)}>
      <input
        {...restProps}
        ref={ref}
        type='checkbox'
        className={cx('checkbox-input')}
        onChange={event => {
          toggleCheck(event.target.checked);
          isFunction(onChange) && onChange(event);
        }}
        checked={isChecked}
        disabled={disabled}
      />
      <CheckboxIcon
        className={cx([
          'checkbox-icon',
          isChecked && 'checked',
          disabled && 'disabled',
        ])}
      />
    </span>
  );
});

Checkbox.propTypes = {
  /**
   * Отмечена ли галочка.
   */
  checked: PropTypes.bool,

  /**
   * Отключена ли галочка.
   */
  disabled: PropTypes.bool,

  /**
   * Сработает при смене состояния.
   */
  onChange: PropTypes.func,

  /**
   * CSS-класс.
   */
  className: PropTypes.string,
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;

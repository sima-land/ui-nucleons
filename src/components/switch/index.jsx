import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './switch.scss';

const cx = classnames.bind(classes);

/**
 * Возвращает компонент стилизованного переключателя (input[type=checkbox]).
 * @param {Object} props Свойства.
 * @param {boolean} [props.checked=props.defaultChecked] Отмечен ли переключатель.
 * @param {string} [props.className] CSS-классы корневого компонента.
 * @param {boolean} [props.defaultChecked=false] Отмечен ли переключатель по умолчанию.
 * @param {Object} [props.inputProps] Свойства внутреннего элемента input.
 * @param {Function} [props.onChange] Сработает при смене состояния.
 * @param {Function} [props.style] Стили корневого компонента.
 * @param {import('react').RefObject|Function} [props.inputRef] Ref внутреннего элемента input.
 * @return {ReactElement} Компонент стилизованного переключателя.
 */
const Switch = ({
  checked,
  className,
  defaultChecked,
  inputProps,
  inputRef,
  onChange,
  style,
}) => (
  <label className={cx('switch-root', className)} style={style}>
    <input
      {...inputProps}
      checked={checked}
      className={cx('switch-input')}
      defaultChecked={defaultChecked}
      onChange={onChange}
      ref={inputRef}
      type='checkbox'
    />
    <span className={cx('switch')} />
  </label>
);

Switch.propTypes = {
  /**
   * Отмечен ли переключатель по умолчанию.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Отмечен ли переключатель.
   */
  checked: PropTypes.bool,

  /**
   * Сработает при смене состояния.
   */
  onChange: PropTypes.func,

  /**
   * Ref внутреннего элемента input.
   */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),

  /**
   * Свойства внутреннего элемента input.
   */
  inputProps: PropTypes.object,

  /**
   * CSS-классы корневого элемента.
   */
  className: PropTypes.string,

  /**
   * Стили корневого элемента.
   */
  style: PropTypes.string,
};

export default Switch;

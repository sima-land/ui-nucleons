import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './toggle.scss';

const cx = classnames.bind(styles);

/**
 * Возвращает компонент стилизованного переключателя (input[type=checkbox]).
 * @param {Object} props Свойства.
 * @param {boolean} [props.checked=props.defaultChecked] Отмечен ли переключатель.
 * @param {boolean} [props.disabled] Отключен ли переключатель.
 * @param {string} [props.className] CSS-классы корневого компонента.
 * @param {boolean} [props.defaultChecked=false] Отмечен ли переключатель по умолчанию.
 * @param {Object} [props.inputProps] Свойства внутреннего элемента input.
 * @param {Function} [props.onChange] Сработает при смене состояния.
 * @param {Function} [props.style] Стили корневого компонента.
 * @param {import('react').RefObject | Function} [props.inputRef] Ref внутреннего элемента input.
 * @return {ReactElement} Компонент стилизованного переключателя.
 */
export const Toggle = forwardRef(({
  checked,
  className,
  defaultChecked,
  inputProps,
  onChange,
  style,
  disabled,
}, ref) => (
  <label className={cx('root', className)} style={style}>
    <input
      {...inputProps}
      disabled={disabled}
      checked={checked}
      className={cx('input')}
      defaultChecked={defaultChecked}
      onChange={onChange}
      ref={ref}
      type='checkbox'
    />
    <span className={cx('switch')} />
  </label>
));

Toggle.propTypes = {
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.string,
};

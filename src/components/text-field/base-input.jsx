import React, { forwardRef } from 'react';
import { cx } from './classes';
import PropTypes from 'prop-types';

/**
 * Компонент поля ввода.
 * @param {Object} props Свойства. Поддерживаются свойства элемента input.
 * @param {'xs'|'s'|'l'} props.size Размер.
 * @param {boolean} [props.failed] Ошибочно ли введено значение.
 * @param {boolean} [props.disabled] Отключено ли поле.
 * @param {string} [props.className] CSS-класс.
 * @return {ReactElement} Компонент поля ввода.
 */
export const BaseInput = forwardRef(function BaseInput ({
  size,
  failed,
  disabled,
  className,
  ...props
}, ref) {
  return (
    <input
      {...props}
      ref={ref}
      disabled={disabled}
      className={cx([
        className,
        'reset',
        'base-input',
        failed && 'failed',
        disabled && 'disabled',
        size && `size-${size}`,
      ])}
    />
  );
});

BaseInput.propTypes = {
  /**
   * Размер.
   */
  size: PropTypes.oneOf(['xs', 's', 'l']),

  /**
   * Ошибочно ли введено значение.
   */
  failed: PropTypes.bool,

  /**
   * Отключено ли поле.
   */
  disabled: PropTypes.bool,

  /**
   * CSS-класс.
   */
  className: PropTypes.string,
};

import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { cx } from './classes';
import PropTypes from 'prop-types';
import { fitElementHeight } from '../helpers/fit-element-height';
import isFunction from 'lodash/isFunction';

/**
 * Компонент поля ввода.
 * @param {Object} props Свойства. Поддерживаются свойства элемента input.
 * @param {'xs'|'s'|'l'} props.size Размер.
 * @param {boolean} [props.failed] Ошибочно ли введено значение.
 * @param {boolean} [props.disabled] Отключено ли поле.
 * @param {string} [props.className] CSS-класс.
 * @param {Function} [props.onInput] Сработает при событии input.
 * @param {boolean} [props.multiline] Нужно ли выводить textarea вместо input.
 * @param {number|string} [props.rows] Значение атрибута rows для textarea.
 * @return {ReactElement} Компонент поля ввода.
 */
export const BaseInput = forwardRef(function BaseInput ({
  size,
  failed,
  disabled,
  className,
  onInput,
  multiline,
  rows = 1,
  ...props
}, ref) {
  const Element = multiline ? 'textarea' : 'input';
  const inputRef = useRef();

  useImperativeHandle(ref, () => inputRef.current);

  useEffect(() => {
    multiline && inputRef.current && fitElementHeight({
      target: inputRef.current,
    });
  }, []);

  return (
    <Element
      {...props}
      rows={multiline ? rows : undefined}
      ref={inputRef}
      disabled={disabled}
      className={cx([
        className,
        'reset',
        'base-input',
        failed && 'failed',
        disabled && 'disabled',
        multiline && 'multiline',
        size && `size-${size}`,
      ])}
      onInput={event => {
        multiline && fitElementHeight(event);
        isFunction(onInput) && onInput(event);
      }}
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

  /**
   * Сработает при событии input.
   */
  onInput: PropTypes.func,

  /**
   * Нужно ли выводить textarea вместо input.
   */
  multiline: PropTypes.bool,

  /**
   * Значение атрибута rows для textarea.
   */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

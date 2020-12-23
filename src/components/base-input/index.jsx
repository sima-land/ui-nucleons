import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './base-input.scss';
import PropTypes from 'prop-types';
import { fitElementHeight } from '../helpers/fit-element-height';
import isFunction from 'lodash/isFunction';
import { isString } from 'lodash';

const cx = classnames.bind(classes);

/**
 * Компонент поля ввода.
 * @param {Object} props Свойства. Поддерживаются свойства элемента input.
 * @param {boolean} [props.disabled] Отключено ли поле.
 * @param {string} [props.className] CSS-класс.
 * @param {Function} [props.onInput] Сработает при событии input.
 * @param {boolean} [props.multiline] Нужно ли выводить textarea вместо input.
 * @param {number|string} [props.rows] Значение атрибута rows для textarea.
 * @param {string|Object} props.style Стили.
 * @param {string} props.value Значение.
 * @return {ReactElement} Компонент поля ввода.
 */
export const BaseInput = forwardRef(function BaseInput ({
  className,
  disabled,
  multiline,
  onInput,
  restPlaceholder: restPlaceholderProp,
  rows = 1,
  style,
  value,
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

  const restPlaceholder = isString(restPlaceholderProp)
    ? { shiftValue: value, value: restPlaceholderProp }
    : { shiftValue: value, ...restPlaceholderProp };

  return (
    <div
      style={style}
      className={cx(
        'reset',
        'root',
        disabled && 'disabled',
        className,
      )}
    >
      {!multiline && Boolean(restPlaceholder.value) && (
        <span className={cx('fake-text')}>
          <span className={cx('invisible-value')}>{restPlaceholder.shiftValue}</span>
          <span className={cx('placeholder')}>{restPlaceholder.value}</span>
        </span>
      )}
      <Element
        {...props}
        rows={multiline ? rows : undefined}
        ref={inputRef}
        disabled={disabled}

        // ВАЖНО: не даем возможности задать стили/классы именно для этого элемента
        className={cx(
          'field',
          'reset',
          multiline && 'multiline',
        )}
        value={value}
        onInput={event => {
          multiline && fitElementHeight(event);
          isFunction(onInput) && onInput(event);
        }}
      />
    </div>
  );
});

BaseInput.propTypes = {
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

  /**
   * Placeholder, который выводится после введенного значения.
   */
  restPlaceholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ shiftValue: PropTypes.string, value: PropTypes.string.isRequired }),
  ]),

  /**
   * Стили.
   */
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Введенное значение.
   */
  value: PropTypes.string,
};

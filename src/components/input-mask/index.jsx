import React, { forwardRef, useImperativeHandle, useLayoutEffect, useEffect, useRef, useState } from 'react';
import { prepareValue, processChange, getStartValue, validateCursorPosition } from './helpers';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

/**
 * Компонент инпута с маской.
 * @param {ReactElement} Компонент Инпута.
 * @param {Object} props Свойства компонента.
 * @param {string} props.component Элемент инпута.
 * @param {string} props.value Значение инпута.
 * @param {string} [props.mask=''] Маска.
 * @param {string} [props.maskSign='_'] Заменяемый знак маски.
 * @param {boolean} [props.alwaysShowMask] Всегда ли отображать маску.
 * @param {RegExp} [props.pattern=/[0-9]/g] Паттерн допустимых значений.
 * @param {Function} [props.onChange] Сработает при изменении значения.
 * @param {Function} [props.onClick] Сработает при клике.
 * @param {Function} [props.onKeyUp] Сработает при нажатии клавишу.
 * @param {Function} [props.onFocus] Сработает при фокусировке.
 * @param {Function} [props.onBlur] Сработает при потере фокуса.
 * @return {ReactElement} Компонент инпута с маской.
 */
const InputMask = forwardRef(function InputMask ({
  component: Component = 'input',
  value: defaultValue = '',
  mask = '',
  maskSign = '_',
  alwaysShowMask,
  pattern = /[0-9]/g,
  onChange,
  onClick,
  onKeyUp,
  onFocus,
  onBlur,
  ...inputProps
}, ref) {
  const [value, setValue] = useState(getStartValue({ value: defaultValue, mask, maskSign, pattern, alwaysShowMask }));
  const [selection, setSelection] = useState(null);
  const [updateCursor, setUpdateCursor] = useState(null);
  const inputRef = useRef();

  useImperativeHandle(ref, () => inputRef.current);

  useEffect(() => {
    setValue(getStartValue({ value: defaultValue, mask, maskSign, pattern, alwaysShowMask }));
  }, [defaultValue, mask, alwaysShowMask]);

  useLayoutEffect(() => {
    const input = inputRef.current;
    input && selection >= 0 && input.setSelectionRange(selection, selection);
  }, [updateCursor]);

  return (
    <Component
      {...inputProps}
      value={value}
      onChange={event => {
        isFunction(onChange) && onChange(event);
        const { correctValue, correctSelection } = processChange({
          input: event.target,
          mask,
          maskSign,
          pattern,
          lastSelection: selection,
        });
        setValue(correctValue);
        setSelection(correctSelection);
        setUpdateCursor(Date.now());
      }}
      onClick={event => {
        isFunction(onClick) && onClick(event);
        !value && setValue(prepareValue({ value, mask, maskSign, pattern }));
        setSelection(validateCursorPosition({
          value,
          mask,
          maskSign,
          position: event.target.selectionStart,
        }));
        setUpdateCursor(Date.now());
      }}
      onKeyUp={event => {
        isFunction(onKeyUp) && onKeyUp(event);
        setSelection(event.target.selectionStart);
      }}
      onFocus={event => {
        isFunction(onFocus) && onFocus(event);
        !value && setValue(prepareValue({ value, mask, maskSign, pattern }));
        const firstValueCaret = value.indexOf(maskSign);
        setSelection(firstValueCaret >= 0 ? firstValueCaret : value.length);
        setUpdateCursor(Date.now());
      }}
      onBlur={event => {
        isFunction(onBlur) && onBlur(event);
        value === mask && !alwaysShowMask && setValue('');
      }}
      ref={inputRef}
    />
  );
});

InputMask.propTypes = {
  /**
   * Элемент инпута.
   */
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),

  /**
   * Значение.
   */
  value: PropTypes.string,

  /**
   * Маска.
   */
  mask: PropTypes.string,

  /**
   * Заменяемый знак маски.
   */
  maskSign: PropTypes.string,

  /**
   * Всегда ли надо отображать маску (false - только при фокусе, либо наличии значения).
   */
  alwaysShowMask: PropTypes.bool,

  /**
   * Паттерн допустимых значений.
   */
  pattern: PropTypes.any,

  /**
   * Сработает при изменении значения.
   */
  onChange: PropTypes.func,

  /**
   * Сработает при клике.
   */
  onClick: PropTypes.func,

  /**
   * Сработает при нажатии клавишу.
   */
  onKeyUp: PropTypes.func,

  /**
   * Сработает при фокусировке.
   */
  onFocus: PropTypes.func,

  /**
   * Сработает при потере фокуса.
   */
  onBlur: PropTypes.func,
};

export default InputMask;

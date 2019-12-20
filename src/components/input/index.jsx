import React, { forwardRef, useState, useMemo } from 'react';
import classnames from 'classnames/bind';
import styles from './fields.scss';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

const cx = classnames.bind(styles);

/**
 * Список поддерживаемых значений атрибута "type".
 * @type {Array<string>}
 */
const availableTypes = Object.freeze([
  'text',
  'email',
  'number',
  'password',
]);

/**
 * CSS-классы по умолчанию.
 * @type {Object}
 */
const defaultClasses = Object.freeze({
  input: cx('input'),
  startAdornment: cx('adornment-container', 'start'),
  endAdornment: cx('adornment-container', 'end'),
  permanent: cx('input-wrapper', 'field'),
  failed: cx('failed'),
  focused: cx('focused'),
  withStartAdornment: cx('with-start-adornment'),
  withEndAdornment: cx('with-end-adornment'),
});

/**
 * Возвращает компонент текстового поля.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.type='text'] Значение атрибута "type".
 * @param {Object} [props.classes] CSS-классы.
 * @param {Function} [props.computeClasses] Получив набор css-классов по умолчанию должна вернуть новый набор.
 * @param {boolean} [props.failed] Нужно ли показывать поле как ошибочное.
 * @param {*} [props.startAdornment] Иконка перед текстом.
 * @param {*} [props.endAdornment] Иконка после текста.
 * @param {Object} ref Реф.
 * @return {ReactElement} Компонент текстового поля.
 */
const Input = forwardRef(function Input ({
  type = 'text',
  classes,
  computeClasses,
  failed,
  autoFocus,
  onFocus,
  onBlur,
  startAdornment,
  endAdornment,
  ...restProps
}, ref) {
  const [focused, setFocused] = useState(autoFocus);

  const inputType = availableTypes.includes(type)
    ? type
    : 'text';

  const readyClasses = useMemo(() => isFunction(computeClasses)
    ? computeClasses(defaultClasses)
    : { ...defaultClasses, ...classes },
  [classes, computeClasses]);

  return (
    <span
      onClick={({ target }) => {
        const inputEl = target.querySelector(
          `input.${readyClasses.input}`
        );

        inputEl && inputEl.focus();
      }}
      className={classnames([
        readyClasses.permanent,
        failed && readyClasses.failed,
        focused && readyClasses.focused,
        startAdornment && readyClasses.withStartAdornment,
        endAdornment && readyClasses.withEndAdornment,
      ])}
    >
      {Boolean(startAdornment) && (
        <span className={readyClasses.startAdornment}>
          {startAdornment}
        </span>
      )}
      <input
        {...restProps}
        autoFocus={autoFocus}
        onFocus={event => {
          setFocused(true);
          isFunction(onFocus) && onFocus(event);
        }}
        onBlur={event => {
          setFocused(false);
          isFunction(onBlur) && onBlur(event);
        }}
        className={readyClasses.input}
        ref={ref}
        type={inputType}
      />
      {Boolean(endAdornment) && (
        <span className={readyClasses.endAdornment}>
          {endAdornment}
        </span>
      )}
    </span>
  );
});

Input.propTypes = {
  /**
   * Тип поля.
   */
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
  ]),

  /**
   * Иконка перед текстом.
   */
  startAdornment: PropTypes.node,

  /**
   * Иконка после текста.
   */
  endAdornment: PropTypes.node,

  /**
   * Нужно ли отображать поле как ошибочно введенное.
   */
  failed: PropTypes.bool,

  /**
   * Объект позволяющий заменить классы.
   */
  classes: PropTypes.shape({
    input: PropTypes.string,
    permanent: PropTypes.string,
    failed: PropTypes.string,
    focused: PropTypes.string,
    withStartAdornment: PropTypes.string,
    withEndAdornment: PropTypes.string,
  }),

  /**
   * Получив набор css-классов по умолчанию должна вернуть новый набор.
   */
  computeClasses: PropTypes.func,

  /**
   * Нужно ли фокусироваться на поле сразу после монтирования.
   */
  autoFocus: PropTypes.bool,

  /**
   * Сработает при фокусировке на поле.
   */
  onFocus: PropTypes.func,

  /**
   * Сработает при расфокусировке на поле.
   */
  onBlur: PropTypes.func,
};

export default Input;

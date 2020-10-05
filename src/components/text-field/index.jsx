import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';
import Box from '../box';
import * as Sizes from '../styling/sizes';
import { cx } from './classes';
import { Label } from './label';
import { BaseInput } from './base-input';
import PropTypes from 'prop-types';
import { SmallRounds } from '../styling/shapes';

/**
 * Вернет true если переданное значение будет выведено при установке в input.
 * @param {*} value Значение.
 * @return {boolean} Будет ли выведено значение.
 */
const isVisibleValue = value => !isNil(value) && `${value}` !== '';

/**
 * Компонент текстового поля.
 * @param {Object} props Свойства.
 * @param {boolean} [props.autoFocus] Нужно ли фокусироваться после монтирования.
 * @param {*} [props.caption] Подпись снизу.
 * @param {{ root, baseInput, blockFocused }} [props.classes] CSS-классы.
 * @param {string} props.defaultValue Значение по умолчанию.
 * @param {boolean} [props.disabled] Отключено ли поле.
 * @param {*} [props.endAdornment] Дополнительная верстка после текста.
 * @param {boolean} [props.failed] Показывать ли поле как ошибочное.
 * @param {boolean} [props.focused] Показывать ли поле как сфокусированное (влияет только на оформление).
 * @param {string} [props.label] Ярлык.
 * @param {Function} [props.onClick] Сработает при клике.
 * @param {Function} [props.onBlur] Сработает при потере фокуса.
 * @param {Function} [props.onChange] Сработает при изменении значения.
 * @param {Function} [props.onFocus] Сработает при фокусировке.
 * @param {Function} [props.onInput] Сработает при событии "input".
 * @param {Function} [props.onKeyUp] Сработает при событии "keyUp".
 * @param {string} [props.placeholder] Placeholder.
 * @param {boolean} [props.readOnly] Значение атрибута "readonly".
 * @param {string} [props.rounds] Задает скругления.
 * @param {'xs'|'s'|'l'} [props.size='l'] Размеры поля для variant = "desktop".
 * @param {*} [props.startAdornment] Дополнительная верстка до текста.
 * @param {string} [props.value] Значение.
 * @param {'desktop'|'mobile'} [props.variant='desktop'] Вариант отображения.
 * @param {boolean} [props.multiline] Нужно ли выводить textarea вместо input.
 * @param {Object} [props.baseInputProps] Свойства BaseInput.
 * @param {string} [props.className] Класс корневого компонента.
 * @return {ReactElement} Компонент текстового поля.
 */
const TextField = forwardRef(function TextField ({
  autoFocus,
  caption,
  classes = {},
  defaultValue,
  disabled,
  endAdornment,
  failed,
  focused: asFocused,
  label,
  onClick,
  onBlur,
  onChange,
  onFocus,
  onInput,
  onKeyUp,
  placeholder,
  readOnly,
  rounds = 'all',
  size = 'l',
  startAdornment,
  value,
  variant = 'desktop',
  multiline,
  baseInputProps = {},
  className,
}, ref) {
  const [hasValue, toggleHasValue] = useState(
    isVisibleValue(value)
    || isVisibleValue(defaultValue)
  );
  const [reallyFocused, toggleFocused] = useState(autoFocus);
  const focused = reallyFocused || Boolean(asFocused);
  const baseInputRef = useRef();

  const isDesktop = variant === 'desktop';
  const isMobile = variant === 'mobile';
  const isLargeDesktop = isDesktop && size === 'l';
  const withLabel = (isLargeDesktop || isMobile) && Boolean(label);
  const labelAsPlaceholder = !(focused || hasValue);

  useImperativeHandle(ref, () => baseInputRef.current);

  useEffect(() => toggleHasValue(baseInputRef.current.value));

  return (
    <div className={cx('text-field-root', className, classes.root)}>

      {/* field row */}
      <div
        className={cx(
          'reset',
          'input-block',
          size && `size-${size}`,
          variant && `variant-${variant}`,
          focused && 'focused',
          focused && classes.blockFocused,
          disabled && 'disabled',
          multiline && 'multiline',
          withLabel && 'with-label',
          variant === 'desktop' && rounds !== 'none' && SmallRounds[rounds]
        )}
        onClick={event => {
          const { current: input } = baseInputRef;
          isFunction(onClick) && onClick(event);
          input
            && !disabled
            && input !== document.activeElement
            && input.focus();
        }}
      >
        {/* start adornment column */}
        {!multiline && Boolean(startAdornment) && (
          <Box display='flex' alignItems='center' marginRight={4}>
            {startAdornment}
          </Box>
        )}

        {/* input & label column */}
        <div className={cx('main-column')}>
          {withLabel && (
            <Label
              disabled={disabled}
              focused={focused}
              failed={failed}
              variant={variant}
              asPlaceholder={labelAsPlaceholder}
              children={label}
            />
          )}
          <div className={cx('input-wrapper')}>
            <BaseInput
              {...baseInputProps}
              multiline={multiline}
              ref={baseInputRef}
              placeholder={withLabel && labelAsPlaceholder
                ? null
                : placeholder
              }
              autoFocus={autoFocus}
              className={cx(classes.baseInput)}
              defaultValue={defaultValue}
              value={value}
              size={size}
              failed={failed}
              readOnly={readOnly}
              disabled={disabled}
              onFocus={event => {
                isFunction(onFocus) && onFocus(event);
                toggleHasValue(Boolean(event.target.value));
                toggleFocused(true);
              }}
              onBlur={event => {
                isFunction(onBlur) && onBlur(event);
                toggleHasValue(Boolean(event.target.value));
                toggleFocused(false);
              }}
              onInput={onInput}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </div>
        </div>

        {/* end adornment column */}
        {!multiline && Boolean(endAdornment) && (
          <Box display='flex' alignItems='center' marginLeft={4}>
            {endAdornment}
          </Box>
        )}
      </div>

      {/* caption row */}
      {Boolean(caption) && (
        <div
          className={cx(
            'caption',
            Sizes.marginTop(isMobile ? 1 : 2),
            disabled && 'disabled',
            failed && 'failed',
          )}
          children={caption}
        />
      )}
    </div>
  );
});

TextField.propTypes = {
  /**
   * Нужно ли фокусироваться после монтирования.
   */
  autoFocus: PropTypes.bool,

  /**
   * Подпись снизу.
   */
  caption: PropTypes.any,

  /**
   * CSS-классы.
   */
  classes: PropTypes.shape({
    root: PropTypes.string,
    baseInput: PropTypes.string,
    blockFocused: PropTypes.string,
  }),

  /**
   * Значение по умолчанию.
   */
  defaultValue: PropTypes.string,

  /**
   * Отключено ли поле.
   */
  disabled: PropTypes.bool,

  /**
   * Дополнительная верстка после текста.
   */
  endAdornment: PropTypes.any,

  /**
   * Показывать ли поле как ошибочное.
   */
  failed: PropTypes.bool,

  /**
   * Показывать ли поле как сфокусированное (влияет только на оформление).
   */
  focused: PropTypes.bool,

  /**
   * Ярлык.
   */
  label: PropTypes.string,

  /**
   * Сработает при клике.
   */
  onClick: PropTypes.func,

  /**
   * Сработает при потере фокуса.
   */
  onBlur: PropTypes.func,

  /**
   * Сработает при изменении значения.
   */
  onChange: PropTypes.func,

  /**
   * Сработает при фокусировке.
   */
  onFocus: PropTypes.func,

  /**
   * Сработает при событии "input".
   */
  onInput: PropTypes.func,

  /**
   * Сработает при нажатии клавишу.
   */
  onKeyUp: PropTypes.func,

  /**
   * Placeholder.
   */
  placeholder: PropTypes.string,

  /**
   * Значение атрибута "readonly".
   */
  readOnly: PropTypes.bool,

  /**
   * Задает скругления.
   */
  rounds: PropTypes.oneOf([...Object.keys(SmallRounds), 'none']),

  /**
   * Размеры для variant = "desktop".
   */
  size: PropTypes.oneOf(['xs', 's', 'l']),

  /**
   * Дополнительная верстка до текста.
   */
  startAdornment: PropTypes.any,

  /**
   * Значение.
   */
  value: PropTypes.string,

  /**
   * Вариант отображения.
   */
  variant: PropTypes.oneOf(['desktop', 'mobile']),

  /**
   * Нужно ли выводить textarea вместо input.
   */
  multiline: PropTypes.bool,

  /**
   * Свойства BaseInput.
   */
  baseInputProps: PropTypes.object,

  /**
   * Класс корневого компонента.
   */
  className: PropTypes.string,
};

export default TextField;

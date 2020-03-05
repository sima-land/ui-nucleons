import React, { useState, forwardRef } from 'react';
import isFunction from 'lodash/isFunction';
import Box from '../box';
import * as Sizes from '../styling/sizes';
import { cx } from './classes';
import { Label } from './label';
import { BaseInput } from './base-input';
import PropTypes from 'prop-types';

const serviceClass = '__base-input__';

/**
 * Компонент текстового поля.
 * @param {Object} props Свойства.
 * @param {boolean} [props.autoFocus] Нужно ли фокусироваться после монтирования.
 * @param {*} [props.caption] Подпись снизу.
 * @param {{ root, baseInput }} [props.classes] CSS-классы.
 * @param {string} props.defaultValue Значение по умолчанию.
 * @param {boolean} [props.disabled] Отключено ли поле.
 * @param {*} [props.endAdornment] Дополнительная верстка после текста.
 * @param {boolean} [props.failed] Показывать ли поле как ошибочное.
 * @param {string} [props.label] Ярлык.
 * @param {Function} [props.onBlur] Сработает при потере фокуса.
 * @param {Function} [props.onChange] Сработает при изменении значения.
 * @param {Function} [props.onFocus] Сработает при фокусировке.
 * @param {Function} [props.onInput] Сработает при событии "input".
 * @param {string} [props.placeholder] Placeholder.
 * @param {boolean} [props.readOnly] Значение атрибута "readonly".
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
  label,
  onBlur,
  onChange,
  onFocus,
  onInput,
  placeholder,
  readOnly,
  size = 'l',
  startAdornment,
  value,
  variant = 'desktop',
  multiline,
  baseInputProps = {},
  className,
}, ref) {
  const [hasValue, toggleHasValue] = useState(Boolean(value || defaultValue));
  const [focused, toggleFocused] = useState(autoFocus);

  const isDesktop = variant === 'desktop';
  const isMobile = variant === 'mobile';
  const isLargeDesktop = isDesktop && size === 'l';
  const withLabel = (isLargeDesktop || isMobile) && Boolean(label);
  const labelAsPlaceholder = !(focused || hasValue);

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
          disabled && 'disabled',
          multiline && 'multiline',
          withLabel && 'with-label',
        )}
        onClick={({ currentTarget }) => {
          // поиск по сервисному классу чтобы не подменять ref, приходящий извне
          const input = currentTarget.querySelector(`.${serviceClass}`);

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
              ref={ref}
              placeholder={withLabel && labelAsPlaceholder
                ? null
                : placeholder
              }
              autoFocus={autoFocus}
              className={cx(serviceClass, classes.baseInput)}
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
  classes: PropTypes.shape({ root: PropTypes.string, baseInput: PropTypes.string }),

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
   * Ярлык.
   */
  label: PropTypes.string,

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
   * Placeholder.
   */
  placeholder: PropTypes.string,

  /**
   * Значение атрибута "readonly".
   */
  readOnly: PropTypes.bool,

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
import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { isNil, isFunction } from 'lodash';
import Box from '../box';
import { marginTop } from '../styling/sizes';
import classnames from 'classnames/bind';
import styles from './text-field.scss';
import { BaseInput } from '../base-input';
import PropTypes from 'prop-types';
import { SmallRounds } from '../styling/shapes';

export const cx = classnames.bind(styles);

/**
 * Вернет true если переданное значение будет выведено при установке в input.
 * @param {*} value Значение.
 * @return {boolean} Будет ли выведено значение.
 */
const isVisibleValue = value => !isNil(value) && `${value}` !== '';

/**
 * Получив данные визуальных модификаторов, возвращает строку с css-классами.
 * @param {{ disabled, failed, focused, variant }} modifiers Данные визуальных модификаторов.
 * @return {string} Строка с css-классами.
 */
const modifiersToClasses = ({ disabled, failed, focused, variant }) => cx(
  disabled && 'disabled',
  failed && 'failed',
  focused && 'focused',
  variant && `variant-${variant}`
);

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
 * @param {Function} [props.onKeyDown] Сработает при событии "keydown".
 * @param {Function} [props.onKeyUp] Сработает при событии "keyup".
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
 * @param {string} [props.style] Стили корневого компонента.
 * @param {string|Object} [props.restPlaceholder] Placeholder, который выводится после введенного значения.
 * @param {string} [props.'data-testid'] Идентификатор для систем автоматизированного тестирования.
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
  onKeyDown,
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
  restPlaceholder,
  style,
  'data-testid': dataTestId,
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

  const commonModifyClasses = modifiersToClasses({
    disabled,
    failed,
    focused,
    variant,
  });

  useImperativeHandle(ref, () => baseInputRef.current);

  useEffect(() => toggleHasValue(baseInputRef.current.value));

  return (
    <div data-testid={dataTestId} className={cx('text-field-root', className, classes.root)} style={style}>

      {/* field row */}
      <div
        data-testid='text-field:block'
        className={cx(
          'reset',
          'input-block',
          commonModifyClasses,
          size && `size-${size}`,
          focused && classes.blockFocused,
          multiline && 'multiline',
          withLabel && 'with-label',
          variant === 'desktop' && rounds !== 'none' && SmallRounds[rounds]
        )}
        onClick={event => {
          const input = baseInputRef.current;

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
            <label
              className={cx(
                'label',
                commonModifyClasses,
                hasValue && 'filled',
                labelAsPlaceholder && 'as-placeholder'
              )}
              children={label}
            />
          )}
          <div className={cx('input-wrapper')}>
            <BaseInput
              {...baseInputProps}
              data-testid='text-field:field'
              multiline={multiline}
              ref={baseInputRef}
              placeholder={
                withLabel && labelAsPlaceholder
                  ? undefined
                  : placeholder
              }
              restPlaceholder={
                withLabel && labelAsPlaceholder
                  ? undefined
                  : restPlaceholder
              }
              autoFocus={autoFocus}
              className={cx(
                'base-input',
                commonModifyClasses,
                classes.baseInput,
                size && `size-${size}`
              )}
              defaultValue={defaultValue}
              value={value}
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
              onKeyDown={onKeyDown}
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
            marginTop(isMobile ? 1 : 2),
            disabled && 'disabled',
            failed && 'failed'
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
   * Сработает при событии "keyup".
   */
  onKeyUp: PropTypes.func,

  /**
   * Сработает при событии "keydown".
   */
  onKeyDown: PropTypes.func,

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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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

  /**
   * Стили корневого компонента.
   */
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Placeholder, который выводится после введенного значения.
   */
  restPlaceholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ shiftValue: PropTypes.string, value: PropTypes.string.isRequired }),
  ]),

  /**
   * Идентификатор для систем автоматизированного тестирования.
   */
  'data-testid': PropTypes.string,
};

export default TextField;

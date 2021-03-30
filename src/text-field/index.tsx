import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { isNil, isFunction } from 'lodash';
import { Box } from '../box';
import { BaseInput, Props as BaseInputProps } from '../base-input';
import { SmallRounds } from '../styling/shapes';
import classnames from 'classnames/bind';
import styles from './text-field.scss';
import { marginTop } from '../styling/sizes';

type Variant = 'desktop' | 'mobile';

export type DesktopSize = 'xs' | 's' | 'l';

type Classes = {
  root?: string
  baseInput?: string
  blockFocused?: string
};

type IgnoredInputProps = 'size' | 'onClick' | 'onInput' | 'onChange' | 'onKeyDown' | 'onKeyUp';

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, IgnoredInputProps> {

  /** Ярлык. */
  label?: string

  /** Свойства BaseInput. */
  baseInputProps?: BaseInputProps

  /** Подпись снизу. */
  caption?: React.ReactNode

  /** CSS-классы. */
  classes?: Classes

  /** Дополнительная верстка после текста. */
  endAdornment?: React.ReactNode

  /** Показывать ли поле как ошибочное. */
  failed?: boolean

  /** Показывать ли поле как сфокусированное (влияет только на оформление). */
  focused?: boolean

  /** Нужно ли выводить textarea вместо input. */
  multiline?: boolean

  /** Сработает при изменении значения. */
  onChange?: BaseInputProps['onChange']

  /** Сработает при клике. */
  onClick?: React.MouseEventHandler<HTMLDivElement>

  /** Сработает при событии "input". */
  onInput?: BaseInputProps['onInput']

  /** Сработает при событии "keydown". */
  onKeyDown?: BaseInputProps['onKeyDown']

  /** Сработает при событии "keyup". */
  onKeyUp?: BaseInputProps['onKeyUp']

  /** Placeholder, который выводится после введенного значения. */
  restPlaceholder?: BaseInputProps['restPlaceholder']

  /** Задает скругления. */
  rounds?: 'none' | keyof typeof SmallRounds

  /** Размеры поля для variant = "desktop". */
  size?: DesktopSize

  /** Дополнительная верстка до текста. */
  startAdornment?: React.ReactNode

  /** Вариант отображения. */
  variant?: Variant

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(styles);

export const HEIGHTS = { xs: 32, s: 40, l: 56 } as const;

export const DEFAULTS = { size: 'l' as keyof typeof HEIGHTS } as const;

/**
 * Вернет true если переданное значение будет выведено при установке в input.
 * @param value Значение.
 * @return Будет ли выведено значение.
 */
const isVisible = (value?: any) => !isNil(value) && `${value}` !== '';

/**
 * Получив данные визуальных модификаторов, возвращает строку с css-классами.
 * @param modifiers Данные визуальных модификаторов.
 * @return Строка с css-классами.
 */
const modifiersToClasses = ({ disabled, failed, focused, variant }: {
  disabled?: boolean
  failed?: boolean
  focused?: boolean
  variant?: Variant
}) => cx(
  disabled && 'disabled',
  failed && 'failed',
  focused && 'focused',
  variant && `variant-${variant}`
);

/**
 * Компонент текстового поля.
 * @param props Свойства.
 * @return Элемент.
 */
export const TextField = forwardRef<HTMLTextAreaElement | HTMLInputElement | undefined, Props>(function TextField ({
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
  size = DEFAULTS.size,
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
  const [hasValue, toggleHasValue] = useState(isVisible(value) || isVisible(defaultValue));
  const [reallyFocused, toggleFocused] = useState(autoFocus);
  const focused = reallyFocused || Boolean(asFocused);
  const baseInputRef = useRef<HTMLTextAreaElement | HTMLInputElement>();

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

  useEffect(() => toggleHasValue(Boolean((baseInputRef.current as any).value)));

  return (
    <div data-testid={dataTestId} className={cx('root', className, classes.root)} style={style}>

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

          onClick?.(event);

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
              onFocus={(event: any) => {
                isFunction(onFocus) && onFocus(event);
                toggleHasValue(Boolean(event.target.value));
                toggleFocused(true);
              }}
              onBlur={(event: any) => {
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
            failed && 'failed'
          )}
          children={caption}
        />
      )}
    </div>
  );
});

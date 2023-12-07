import type { InputProps } from './types';
import { useImperativeHandle, useRef, useState } from 'react';
import { BaseInput } from '../base-input';
import { FieldBlock } from '../field-block';
import { definePlaceholderColor, useFieldMouseDown, useFilledState } from './utils';
import { triggerInput } from '../helpers/events';
import Cross16SVG from '@sima-land/ui-quarks/icons/16x16/Filled/Cross';
import Cross24SVG from '@sima-land/ui-quarks/icons/24x24/Filled/Cross';
import classNames from 'classnames/bind';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

/**
 * Текстовое поле.
 * @param props Свойства.
 * @return Элемент.
 */
export function Input({
  // specific Input props
  inputRef,
  baseInputProps,
  clearable,
  onClear,

  // root props
  style,
  className,

  // input element props (popular)
  autoComplete,
  autoFocus,
  defaultValue,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  onInput,
  placeholder,
  readOnly,
  required,
  type,
  value,

  // FieldBlock props
  size,
  label,
  failed,
  caption,
  blockProps,
  focused: focusedProp,
  'data-testid': testId = 'input',
  ...restProps
}: InputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [filled, updateFilled] = useFilledState(ref, { value, defaultValue });
  const [focused, setFocused] = useState(false);

  const CrossSVG = size === 's' ? Cross16SVG : Cross24SVG;

  const handleMouseDown = useFieldMouseDown(ref, blockProps?.onMouseDown);

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRef,
    () => ref.current,
  );

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    baseInputProps?.inputRef,
    () => ref.current,
  );

  return (
    <FieldBlock
      {...restProps}
      rootProps={{
        ...restProps.rootProps,
        style,
        className,
      }}
      data-testid={testId}
      caption={caption}
      disabled={disabled}
      failed={failed}
      focused={focusedProp ?? focused}
      label={label}
      labelAsPlaceholder={!focused && !filled}
      labelProps={{ htmlFor: id }}
      size={size}
      {...(clearable &&
        focused &&
        filled && {
          adornmentEnd: (
            <CrossSVG
              data-testid='input:clear-button'
              role='button'
              aria-label='Очистить поле'
              className={cx('clear-button')}
              onClick={e => {
                ref.current && triggerInput(ref.current, '');
                onClear?.(e);
              }}
            />
          ),
        })}
      blockProps={{
        ...blockProps,
        onMouseDown: handleMouseDown,
      }}
      main={
        <BaseInput
          {...baseInputProps}
          inputRef={ref}
          multiline={false}
          className={cx('input', baseInputProps?.className)}
          style={{
            ...baseInputProps?.style,
            '--placeholder-color': definePlaceholderColor({ failed, disabled }),
          }}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={!focused ? label || placeholder : placeholder}
          readOnly={readOnly}
          required={required}
          type={type}
          value={value}
          onFocus={event => {
            onFocus?.(event);
            updateFilled(event);
            setFocused(true);
          }}
          onBlur={event => {
            onBlur?.(event);
            updateFilled(event);
            setFocused(false);
          }}
          onInput={event => {
            onInput?.(event);
            updateFilled(event);
          }}
          onChange={event => {
            onChange?.(event);
            updateFilled(event);
          }}
        />
      }
      mainProps={{ className: cx('main') }}
    />
  );
}

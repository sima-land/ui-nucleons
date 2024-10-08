import type { TextareaProps } from './types';
import { useImperativeHandle, useRef, useState } from 'react';
import { BaseInput } from '../base-input';
import { FieldBlock } from '../field-block';
import { definePlaceholderColor, useFieldMouseDown, useFilledState } from '../input/utils';
import classNames from 'classnames/bind';
import styles from './textarea.m.scss';

const cx = classNames.bind(styles);

/**
 * Текстовая область.
 * @param props Свойства.
 * @return Элемент.
 */
export function Textarea({
  // specific Textarea props
  textareaRef,
  baseInputProps,

  // root props
  style,
  className,

  // textarea element props (popular)
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
  rows = 2,
  value,

  // FieldBlock props
  label,
  failed,
  caption,
  blockProps,
  'data-testid': testId = 'textarea',
  ...restProps
}: TextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [filled, updateFilled] = useFilledState(ref, { value, defaultValue });
  const [focused, setFocused] = useState(false);

  const handleMouseDown = useFieldMouseDown(ref, blockProps?.onMouseDown);

  useImperativeHandle<HTMLTextAreaElement | null, HTMLTextAreaElement | null>(
    textareaRef,
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
      fixedHeight={false}
      focused={focused}
      label={label}
      labelAsPlaceholder={!focused && !filled}
      labelProps={{ htmlFor: id }}
      size='l'
      blockProps={{
        ...blockProps,
        onMouseDown: handleMouseDown,
      }}
      main={
        <BaseInput
          {...baseInputProps}
          textareaRef={ref}
          multiline
          className={cx('textarea', baseInputProps?.className)}
          style={{
            '--base-input-placeholder-color': definePlaceholderColor({ failed, disabled }),
            ...baseInputProps?.style,
          }}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={rows}
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

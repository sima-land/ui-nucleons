import React, { useCallback, useImperativeHandle } from 'react';
import { Input } from '../input';
import { Value } from '@krutoo/input-mask/dist/dom/utils';
import { useInputMask } from './hook';
import { MaskData, MaskedInputProps } from './types';

/**
 * Поле ввода текста по маске.
 * @param props Свойства.
 * @return Элемент.
 */
export function MaskedInput({
  mask,
  placeholder = '_',
  pattern = '\\d',
  value,
  defaultValue,
  baseInputProps,
  onFocus,
  onChange,
  onBlur,
  inputRef,
  ...props
}: MaskedInputProps) {
  const { store, bind } = useInputMask({
    value,
    defaultValue,
    maskOptions: { mask, pattern, placeholder },
  });

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRef,
    () => bind.ref.current,
  );

  const getData = useCallback(
    (): MaskData => ({
      value: store.getState().value,
      cleanValue: Value.toClean({ mask, placeholder }, store.getState().value),
      completed: store.getState().value.length === mask.length,
    }),
    [store, mask, placeholder],
  );

  return (
    <Input
      {...props}
      baseInputProps={{
        ...baseInputProps,
        restPlaceholder: baseInputProps?.restPlaceholder ?? {
          value: mask.slice(store.getState().value.length),
          shiftValue: store.getState().value,
        },
      }}
      inputRef={bind.ref}
      value={bind.value}
      onFocus={event => {
        onFocus?.(event, getData());
      }}
      onChange={event => {
        bind.onChange(event);
        onChange?.(event, getData());
      }}
      onBlur={event => {
        onBlur?.(event, getData());
      }}
    />
  );
}

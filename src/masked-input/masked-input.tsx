import { useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { Input } from '../input';
import { Value } from '@krutoo/input-mask/dist/dom/utils';
import { useInputMask } from './use-input-mask';
import { MaskData, MaskedInputProps } from './types';

/**
 * Поле ввода текста по маске.
 * @param props Свойства.
 * @return Элемент.
 */
export function MaskedInput({ value, defaultValue, ...props }: MaskedInputProps) {
  const stateless = useMemo(() => typeof value !== 'undefined', []);

  // ВАЖНО: при defaultValue состояние должно быть именно здесь (на уровень выше хука маски) для корректной работы
  const [currentValue, setCurrentValue] = useState(() => value ?? defaultValue ?? '');

  if (stateless) {
    return <StatelessMaskedInput {...props} value={value} />;
  }

  return (
    <StatelessMaskedInput
      {...props}
      value={currentValue}
      onChange={(event, data) => {
        setCurrentValue(data.cleanValue);
        props.onChange?.(event, data);
      }}
    />
  );
}

/**
 * Поле ввода текста по маске без собственного состояния введенного значения.
 * Не имеет собственного состояния введенного значения.
 * @param props Свойства.
 * @return Элемент.
 */
function StatelessMaskedInput({
  mask,
  placeholder = '_',
  pattern = '\\d',
  value = '',
  baseInputProps,
  onFocus,
  onChange,
  onInput,
  onBlur,
  inputRef,
  ...props
}: Omit<MaskedInputProps, 'defaultValue'>) {
  const currentValue = useMemo<string>(() => value, [value]);

  const { store, bind } = useInputMask({
    value: currentValue,
    maskOptions: { mask, pattern, placeholder },
  });

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRef,
    () => bind.ref.current,
  );

  const getMaskData = useCallback(
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
        onFocus?.(event, getMaskData());
      }}
      onInput={event => {
        bind.onInput(event);
        onInput?.(event, getMaskData());
      }}
      onChange={event => {
        onChange?.(event, getMaskData());
      }}
      onBlur={event => {
        onBlur?.(event, getMaskData());
      }}
    />
  );
}

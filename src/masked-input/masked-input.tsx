import { useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { Input } from '../input';
import { ValueUtil } from '@krutoo/input-mask/dom';
import { useInputMask } from './use-input-mask';
import { MaskData, MaskedInputProps } from './types';

/**
 * Поле ввода текста по маске.
 * @param props Свойства.
 * @return Элемент.
 */
export function MaskedInput({ value, defaultValue, onChange, ...restProps }: MaskedInputProps) {
  const stateless = useMemo(() => typeof value !== 'undefined', []);

  // ВАЖНО: при defaultValue состояние должно быть именно здесь (на уровень выше хука маски) для корректной работы
  const [currentValue, setCurrentValue] = useState(() => value ?? defaultValue ?? '');

  if (stateless) {
    return <StatelessMaskedInput {...restProps} value={value} onChange={onChange} />;
  }

  return (
    <StatelessMaskedInput
      {...restProps}
      value={currentValue}
      onChange={(event, data) => {
        setCurrentValue(data.cleanValue);
        onChange?.(event, data);
      }}
    />
  );
}

/**
 * Поле ввода текста по маске.
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
  filledMaskMinLength,
  ...restProps
}: Omit<MaskedInputProps, 'defaultValue'>) {
  const { store, bind } = useInputMask({
    value,
    maskOptions: { mask, pattern, placeholder },
  });

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRef,
    () => bind.ref.current,
  );

  const getMaskData = useCallback((): MaskData => {
    const { value: maskedValue } = store.getState();

    return {
      value: maskedValue,
      cleanValue: ValueUtil.maskedToClean({ mask, placeholder }, maskedValue),
      completed:
        maskedValue.length === mask.length ||
        Boolean(filledMaskMinLength && maskedValue.length >= filledMaskMinLength),
    };
  }, [store, mask, placeholder, filledMaskMinLength]);

  return (
    <Input
      {...restProps}
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
        // @todo следующая строка нужна чтобы в testing-library работал fireEvent.change, решить как быть
        // bind.onInput(event);
        onChange?.(event, getMaskData());
      }}
      onBlur={event => {
        onBlur?.(event, getMaskData());
      }}
    />
  );
}

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  FocusEvent as ReactFocusEvent,
} from 'react';
import { TextField, TextFieldProps } from '../text-field';
import { InputMask } from '@krutoo/input-mask/dist/dom';

export interface MaskState {
  value: string;
  cleanValue: string;
}

export interface MaskedFieldProps extends Omit<TextFieldProps, 'value' | 'onBlur' | 'multiple'> {
  /** Маска. */
  mask: string;

  /** Значение. */
  value?: string;

  /** Обработчик blur. */
  onBlur?: (e: ReactFocusEvent<HTMLInputElement>, s: MaskState) => void;
}

const maskCommons = { placeholder: '_', pattern: /\d/ };

/**
 * Текстовое поле (TextField) с маской.
 * @deprecated Теперь нужно использовать MaskedInput.
 * @param props Свойства.
 * @param props.mask Маска.
 * @param props.value Значение.
 * @param props.onBlur Сработает при событии blur.
 */
export const MaskedField = forwardRef<HTMLInputElement | undefined, MaskedFieldProps>(
  function MaskedField({ mask, value = '', onBlur, ...restOptions }, ref) {
    const [inputMask, setInputMask] = useState<any>();
    const [inputState, setInputState] = useState<MaskState>({ value, cleanValue: '' });
    const innerRef = useRef<HTMLInputElement>();

    useImperativeHandle(ref, () => innerRef.current);

    useEffect(() => {
      const im = InputMask(innerRef.current as any, {
        ...maskCommons,
        mask,
        onChange: setInputState,
      });

      im.setValue(value as string);
      setInputMask(im);

      return () => im.disable();
    }, [mask]);

    useEffect(() => {
      inputMask && inputMask.setValue(value);
    }, [value, inputMask]);

    return (
      <TextField
        {...restOptions}
        ref={innerRef}
        multiline={false}
        restPlaceholder={{
          value: mask.slice(inputState.value.length),
          shiftValue: inputState.value,
        }}
        // получаем данные маски только по событию "blur"
        onBlur={e => onBlur?.(e, inputState)}
      />
    );
  },
);

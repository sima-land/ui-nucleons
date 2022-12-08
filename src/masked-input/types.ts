import type { Action, Store } from 'redux';
import type { InputState } from '@krutoo/input-mask/dist/core';
import type { InputProps } from '../input';
import type { ChangeEvent, ChangeEventHandler, FocusEvent, RefObject } from 'react';

export interface InputMaskReactOptions {
  /** Строковое представление маски. */
  mask: string;

  /** Символ, который в маске используется как обозначение вводимого места. */
  placeholder: string;

  /** Строковое представление регулярного выражения только доступных для ввода символов. */
  pattern: string;
}

export interface MaskedInputProps
  extends Omit<InputProps, 'onFocus' | 'onChange' | 'onBlur'>,
    Pick<InputMaskReactOptions, 'mask'>,
    Partial<Omit<InputMaskReactOptions, 'mask'>> {
  /** Сработает при фокусе. Вторым аргументом получит данные поля с маской. */
  onFocus?: (event: FocusEvent<HTMLInputElement>, data: MaskData) => void;

  /** Сработает при вводе. Вторым аргументом получит данные поля с маской. */
  onChange?: (event: ChangeEvent<HTMLInputElement>, data: MaskData) => void;

  /** Сработает при "blur". Вторым аргументом получит данные поля с маской. */
  onBlur?: (event: FocusEvent<HTMLInputElement>, data: MaskData) => void;
}

export interface MaskData {
  /** Значение в поле. */
  value: string;

  /** Значение, очищенное от маски. */
  cleanValue: string;

  /** Заполнено ли значение по маске полностью. */
  completed: boolean;
}

export interface UseInputMaskOptions {
  maskOptions: InputMaskReactOptions;
  value?: string;
  defaultValue?: string;
}

export interface UseInputMaskResult {
  /** Хранилище состояния поля. */
  store: Store<InputState>;

  /** Свойства, которые необходимо применить к элементу поля. */
  bind: {
    ref: RefObject<HTMLInputElement>;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
}

export interface ActionCreator<P = never> {
  (payload: P): Action<string> & { payload: P };
  is(action: Action): action is Action<string> & { payload: P };
}

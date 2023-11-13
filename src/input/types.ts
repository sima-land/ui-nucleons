import type { InputHTMLAttributes, MouseEventHandler, Ref } from 'react';
import type { FieldBlockProps } from '../field-block';
import type { BaseInputAsInputProps } from '../base-input';

type HTMLInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'autoComplete'
  | 'autoFocus'
  | 'defaultValue'
  | 'disabled'
  | 'id'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'onInput'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'type'
  | 'value'
>;

export type InputType = Extract<
  InputHTMLAttributes<HTMLInputElement>['type'],
  'text' | 'password' | 'search' | 'email' | 'tel' | 'number'
>;

export interface InputProps extends HTMLInputProps, FieldBlockProps {
  /** Ref элемента input. */
  inputRef?: Ref<HTMLInputElement>;

  /** Свойства BaseInputProps. */
  baseInputProps?: BaseInputAsInputProps;

  /** Тип поля. */
  type?: InputType;

  /** Нужно ли выводить кнопку очистки поля. */
  clearable?: boolean;

  /** Сработает при очистке поля. */
  onClear?: MouseEventHandler<SVGSVGElement>;

  /** Значение. */
  value?: string;

  /** Значение по умолчанию. */
  defaultValue?: string;

  /** Стили корневого элемента. */
  style?: Required<FieldBlockProps>['rootProps']['style'];

  /** CSS-класс корневого элемента. */
  className?: Required<FieldBlockProps>['rootProps']['className'];
}

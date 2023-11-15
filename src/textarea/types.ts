import type { Ref, TextareaHTMLAttributes } from 'react';
import type { FieldBlockProps } from '../field-block';
import type { BaseInputAsTextareaProps } from '../base-input';

type HTMLTextareaProps = Pick<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
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
  | 'rows'
  | 'value'
>;

export interface TextareaProps extends HTMLTextareaProps, FieldBlockProps {
  /** Ref элемента textarea. */
  textareaRef?: Ref<HTMLTextAreaElement>;

  /** Свойства BaseInputProps. */
  baseInputProps?: BaseInputAsTextareaProps;

  /** Стили корневого элемента. */
  style?: Required<FieldBlockProps>['rootProps']['style'];

  /** CSS-класс корневого элемента. */
  className?: Required<FieldBlockProps>['rootProps']['className'];
}

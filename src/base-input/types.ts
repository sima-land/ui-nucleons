import type { CSSProperties, InputHTMLAttributes, Ref, TextareaHTMLAttributes } from 'react';
import type { WithTestId } from '../types';

export interface RestPlaceholderDefinition {
  /** Текст placeholder'а. */
  value: string;

  /** Значение, смещающее placeholder. По умолчанию используется значение в поле ввода. */
  shiftValue?: string;
}

export interface BaseInputStyle extends CSSProperties {
  '--base-input-background'?: string;
  '--base-input-color'?: string;
  '--base-input-placeholder-color'?: string;
}

export interface CommonProps extends WithTestId {
  /** Остаточный placeholder (выводится после введенного значения). */
  restPlaceholder?: string | RestPlaceholderDefinition;

  /** Стили корневого элемента. */
  style?: BaseInputStyle;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Ref элемента input. Будет заполнен только при multiline=false. */
  inputRef?: Ref<HTMLInputElement | null>;

  /** Ref элемента textarea. Будет заполнен только при multiline=true. */
  textareaRef?: Ref<HTMLTextAreaElement | null>;
}

export type BaseInputAsInputProps = CommonProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof CommonProps> & { multiline?: false };

export type BaseInputAsTextareaProps = CommonProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof CommonProps> & { multiline: true };

export type BaseInputProps = BaseInputAsInputProps | BaseInputAsTextareaProps;

import { CSSProperties, InputHTMLAttributes, Ref, TextareaHTMLAttributes } from 'react';

export interface RestPlaceholderDefinition {
  /** Текст placeholder'а. */
  value: string;

  /** Значение, смещающее placeholder. По умолчанию используется значение в поле ввода. */
  shiftValue?: string;
}

export interface BaseInputStyle extends CSSProperties {
  '--placeholder-color'?: string;
}

export interface CommonProps {
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

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export type BaseInputAsInputProps = CommonProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof CommonProps> & { multiline?: false };

export type BaseInputAsTextareaProps = CommonProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof CommonProps> & { multiline: true };

export type BaseInputProps = BaseInputAsInputProps | BaseInputAsTextareaProps;

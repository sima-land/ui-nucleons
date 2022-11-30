import type { InputHTMLAttributes } from 'react';

/** Свойства компонента для маркировки атрибутом "data-testid". */
export interface WithTestId {
  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

/** Свойства любого поля ввода. */
export interface FieldProps {
  /** Состояние с ошибками валидации. */
  failed?: boolean;
}

/** Свойства компонента поля переключателя (input[type="checkbox"]). */
export interface CheckboxInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FieldProps,
    WithTestId {}

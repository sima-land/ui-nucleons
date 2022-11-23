import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

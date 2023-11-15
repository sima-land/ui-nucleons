import type { InputHTMLAttributes } from 'react';
import type { FieldProps, WithTestId } from '../types';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    FieldProps,
    WithTestId {}

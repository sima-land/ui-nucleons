import type { ButtonHTMLAttributes } from 'react';
import type { WithTestId } from '../types';

export type ArrowButtonSize = 's' | 'l';

export type ArrowDirection = 'up' | 'right' | 'down' | 'left';

export interface ArrowButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'children'>,
    WithTestId {
  /** Размер. */
  size?: ArrowButtonSize;

  /** Направление (отвечает за иконку). */
  direction?: ArrowDirection;
}

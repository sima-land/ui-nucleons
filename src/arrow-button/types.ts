import type { ButtonHTMLAttributes } from 'react';

export type ArrowButtonSize = 's' | 'l';

export type ArrowDirection = 'up' | 'right' | 'down' | 'left';

export interface ArrowButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'children'> {
  /** Размер. */
  size?: ArrowButtonSize;

  /** Направление (отвечает за иконку). */
  direction?: ArrowDirection;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

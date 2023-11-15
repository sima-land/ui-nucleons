import type { HTMLAttributes } from 'react';
import type { BoxShadow } from '../styling/shadows';

export interface PlateProps extends HTMLAttributes<HTMLDivElement> {
  /** Тень. */
  shadow?: keyof typeof BoxShadow | null;

  /** Скругление углов. */
  rounds?: 's' | 'm' | null;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

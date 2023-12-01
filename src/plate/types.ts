import type { HTMLAttributes } from 'react';
import type { BoxShadow } from '../styling/shadows';
import type { WithTestId } from '../types';

export interface PlateProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Тень. */
  shadow?: keyof typeof BoxShadow | null;

  /** Скругление углов. */
  rounds?: 's' | 'm' | null;
}

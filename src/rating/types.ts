import type { HTMLAttributes } from 'react';
import type { WithTestId } from '../types';

export type StarType = 'full' | 'half' | 'empty';

export type StarSize = 's' | 'm';

export interface RatingProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Размер. */
  size?: StarSize;

  /** Значение рейтинга. */
  value: number;
}

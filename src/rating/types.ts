import type { HTMLAttributes } from 'react';

export type StarType = 'full' | 'half' | 'empty';

export type StarSize = 's' | 'm';

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер. */
  size?: StarSize;

  /** Значение рейтинга. */
  value: number;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

import type { ReactNode } from 'react';

export interface NoIndexMarkProps {
  type?: 'open' | 'close';
}

export interface NoIndexProps {
  /** Содержимое. */
  children?: ReactNode;
}

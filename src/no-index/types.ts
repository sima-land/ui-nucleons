import type { ReactNode } from 'react';

export interface NoIndexMarkProps {
  /** Флаг закрывающегося тэга. */
  closing?: boolean;
}

export interface NoIndexProps {
  /** Содержимое. */
  children?: ReactNode;
}

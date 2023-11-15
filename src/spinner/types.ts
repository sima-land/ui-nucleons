import type { CSSProperties } from 'react';
import type { Token } from '../colors';

export type SpinnerSize = 's' | 'm' | 'l';

export interface SpinnerProps {
  /** Размер. */
  size?: SpinnerSize;

  /** Цвет. */
  color?: Token;

  /** Класс. */
  className?: string;

  /** Стили. */
  style?: CSSProperties;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string | null;
}

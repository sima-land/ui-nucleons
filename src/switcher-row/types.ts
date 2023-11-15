import type { CSSProperties, ReactNode } from 'react';
import type { WithTestId } from '../types';

export interface SwitcherRowProps extends WithTestId {
  /** Содержимое. */
  children?: ReactNode;

  /** Направление текста. */
  textAlign?: 'left' | 'right';

  /** Стили корневого элемента. */
  style?: CSSProperties;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Позиция поля. */
  fieldPosition?: 'start' | 'end';
}

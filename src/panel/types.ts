import type { CSSProperties, ReactNode } from 'react';
import type { WithTestId } from '../types';

export type PanelType = 'info' | 'error' | 'success' | 'warning';

export interface PanelProps extends WithTestId {
  /** Тип панели. Влияет на отображение. */
  type?: PanelType;

  /** Иконка перед основным контентом. */
  adornmentStart?: ReactNode;

  /** Иконка после основного контента. */
  adornmentEnd?: ReactNode;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили корневого элемента панели. */
  style?: CSSProperties;

  /** Содержимое. */
  children?: ReactNode;
}

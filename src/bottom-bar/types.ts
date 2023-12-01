import type { CSSProperties, HTMLAttributes } from 'react';
import type { WithTestId } from '../types';

export type BottomBarSize = 's' | 'm' | 'l';

export interface BottomBarStyle extends CSSProperties {
  '--bottom-bar-height'?: string;
}

export interface BottomBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'>, WithTestId {
  /** Размер (высота). */
  size?: BottomBarSize | 'unset';

  /** Нужна ли разделительная черта сверху. */
  divided?: boolean;

  /** Скругления углов. */
  rounds?: 's' | 'm' | 'unset';

  /** Стили. */
  style?: BottomBarStyle;
}

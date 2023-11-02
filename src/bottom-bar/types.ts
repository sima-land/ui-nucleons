import type { CSSProperties, HTMLAttributes } from 'react';

export type BottomBarSize = 's' | 'm' | 'l';

export interface BottomBarStyle extends CSSProperties {
  '--bottom-bar-height'?: string;
}

export interface BottomBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Размер (высота). */
  size?: BottomBarSize | 'unset';

  /** Нужна ли разделительная черта сверху. */
  divided?: boolean;

  /** Скругления углов. */
  rounds?: 's' | 'm' | 'unset';

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Стили. */
  style?: BottomBarStyle;
}

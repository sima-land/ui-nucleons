import type { CSSProperties, HTMLAttributes, Ref } from 'react';
import type { WithTestId } from '../types';

export interface SkeletonStyle extends CSSProperties {
  '--skeleton-width'?: string;
  '--skeleton-height'?: string;
  '--skeleton-shine-size'?: string;
}

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Нужно ли включить анимацию блеска. */
  shining?: boolean;

  /** Стили. */
  style?: SkeletonStyle;

  /** Тема. */
  theme?: 'dark' | 'light' | 'unset';

  /** Ref корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;
}

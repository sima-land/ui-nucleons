import type { CSSProperties, HTMLAttributes, Ref } from 'react';

export interface SkeletonStyle extends CSSProperties {
  '--skeleton-width'?: string;
  '--skeleton-height'?: string;
  '--skeleton-shine-size'?: string;
}

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Нужно ли включить анимацию блеска. */
  shining?: boolean;

  /** Стили. */
  style?: SkeletonStyle;

  /** Тема. */
  theme?: 'dark' | 'light' | 'unset';

  /** Ref корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;
}

import type { PartialOptions } from 'overlayscrollbars';
import type { CSSProperties, ReactNode, Ref } from 'react';

export interface CustomScrollbarProps {
  /** Стили. */
  style?: CSSProperties;

  /** Класс. */
  className?: string;

  /** Содержимое. */
  children?: ReactNode;

  /** Опции переполнения. */
  overflow?: PartialOptions['overflow'];

  /** Реф. */
  rootRef?: Ref<HTMLElement | null>;

  /** Реф. */
  viewportRef?: Ref<HTMLElement | null>;
}

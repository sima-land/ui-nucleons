import type { CSSProperties, ReactNode, Ref } from 'react';
import type { PartialOptions } from 'overlayscrollbars';

export interface CustomScrollbarProps {
  /** Стили. */
  style?: CSSProperties;

  /** Класс. */
  className?: string;

  /** Содержимое. */
  children?: ReactNode;

  /** Опции переполнения. */
  overflow?: PartialOptions['overflow'];

  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Реф внутренного элемента с прокруткой. */
  viewportRef?: Ref<HTMLDivElement>;
}

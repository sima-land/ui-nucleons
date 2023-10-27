import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';
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

  /** Реф внутреннего элемента с прокруткой. */
  viewportRef?: Ref<HTMLDivElement>;

  /** Свойства внутреннего элемента с прокруткой. */
  viewportProps?: HTMLAttributes<HTMLDivElement>;
}

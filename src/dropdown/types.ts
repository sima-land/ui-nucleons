import type { CSSProperties, HTMLAttributes, Ref } from 'react';
import type { WithTestId } from '../types';

export interface DropdownStyle extends CSSProperties {
  '--dropdown-max-height'?: string;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, WithTestId {
  /** Стили. */
  style?: DropdownStyle;

  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Реф внутреннего элемента с прокруткой. */
  viewportRef?: Ref<HTMLDivElement>;

  /** Свойства для элемента с прокруткой. */
  viewportProps?: HTMLAttributes<HTMLDivElement>;
}

export type DropdownLoadingProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

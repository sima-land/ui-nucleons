import type { CSSProperties, HTMLAttributes, Ref } from 'react';

export interface DropdownStyle extends CSSProperties {
  '--dropdown-max-height'?: string;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Стили. */
  style?: DropdownStyle;

  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Реф внутреннего элемента с прокруткой. */
  viewportRef?: Ref<HTMLDivElement>;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export type DropdownLoadingProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

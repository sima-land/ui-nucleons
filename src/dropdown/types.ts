import type { CSSProperties, HTMLAttributes, Ref } from 'react';

export interface DropdownStyle extends CSSProperties {
  '--dropdown-max-height'?: string;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Стили. */
  style?: DropdownStyle;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Реф прокручиваемого элемента. */
  viewportRef?: Ref<HTMLDivElement>;
}

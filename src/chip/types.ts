import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from 'react';
import type { WithTestId } from '../types';

export type ChipAs = 'span' | 'anchor' | 'button';

export type ChipShape = 'square' | 'pill';

export type ChipColors = 'light' | 'dark';

export interface ChipStyle extends CSSProperties {
  '--chip-adornment-gutter'?: string;

  '--chip-background'?: string;
  '--chip-color'?: string;
  '--chip-hover-background'?: string;
  '--chip-hover-color'?: string;

  '--chip-disabled-background'?: string;
  '--chip-disabled-color'?: string;
  '--chip-disabled-hover-background'?: string;
  '--chip-disabled-hover-color'?: string;

  '--chip-checked-background'?: string;
  '--chip-checked-color'?: string;
  '--chip-checked-hover-background'?: string;
  '--chip-checked-hover-color'?: string;

  '--chip-checked-disabled-background'?: string;
  '--chip-checked-disabled-color'?: string;
  '--chip-checked-disabled-hover-background'?: string;
  '--chip-checked-disabled-hover-color'?: string;
}

interface CommonProps<T extends ChipAs = ChipAs> extends WithTestId {
  /** Какой элемент использовать в качестве корневого элемента. */
  as?: T;

  /** Выбран ли чип. */
  checked?: boolean;

  /** Отключен ли чип. */
  disabled?: boolean;

  /** Украшение в конце. */
  endAdornment?: ReactNode;

  /** Форма. */
  shape?: ChipShape | 'unset';

  /** Цвета. */
  colors?: ChipColors | 'unset';

  /** Внутренние отступы. */
  padding?: 'x' | 'start' | 'unset';

  /** Отступ от основного контента до украшений. */
  adornmentGutter?: 'default' | 'unset';
}

type AsSpanProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CommonProps> & { as?: 'span' };

type AsAnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { as: 'anchor' };

type AsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { as: 'button' };

export type ChipProps = AsSpanProps | AsAnchorProps | AsButtonProps;

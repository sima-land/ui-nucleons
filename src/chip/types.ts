import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export type ChipAs = 'span' | 'anchor' | 'button';

export type ChipShape = 'square' | 'pill';

export type ChipColors = 'light' | 'dark';

interface CommonProps<T extends ChipAs = ChipAs> {
  /** Какой элемент использовать в качестве корневого элемента. */
  as?: T;

  /** Выбран ли чип. */
  checked?: boolean;

  /** Отключен ли чип. */
  disabled?: boolean;

  /** Иконка в конце. */
  endAdornment?: ReactNode;

  /** Форма. */
  shape?: ChipShape | 'unset';

  /** Цвета. */
  colors?: ChipColors | 'unset';
}

type AsSpanProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CommonProps> & { as?: 'span' };

type AsAnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { as: 'anchor' };

type AsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { as: 'button' };

export type ChipProps = AsSpanProps | AsAnchorProps | AsButtonProps;

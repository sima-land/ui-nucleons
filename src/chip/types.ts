import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export type ChipAs = 'span' | 'button' | 'anchor';

interface CommonProps<T extends ChipAs = ChipAs> {
  as?: T;
  checked?: boolean;
  endAdornment?: ReactNode;
  shape?: 'square' | 'pill' | 'unset';
  colors?: 'light' | 'dark' | 'unset';
  disabled?: boolean;
}

type AsSpanProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CommonProps> & { as?: 'span' };

type AsAnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { as: 'anchor' };

type AsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { as: 'button' };

export type ChipProps = AsSpanProps | AsAnchorProps | AsButtonProps;

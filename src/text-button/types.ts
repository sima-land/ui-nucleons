import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ComponentType,
  Ref,
  SVGAttributes,
} from 'react';
import type { LinkColor } from '../link';
import type { WithTestId } from '../types';

export type TextButtonSize = 's' | 'm';

export type TextButtonColor = LinkColor;

export interface TextButtonStyle extends CSSProperties {
  '--text-button-icon-gutter'?: string;
}

interface CommonProps extends WithTestId {
  /** Размер. */
  size?: TextButtonSize | 'unset';

  /** Цвет. */
  color?: TextButtonColor | 'unset';

  /** Иконка перед текстом. */
  startIcon?: ComponentType<SVGAttributes<SVGSVGElement>>;

  /** Иконка после текста. */
  endIcon?: ComponentType<SVGAttributes<SVGSVGElement>>;

  /** Ref для элемента button. Будет заполнен только при appearance: 'button'. */
  buttonRef?: Ref<HTMLButtonElement>;

  /** Ref для элемента a. Будет заполнен только при appearance: 'link'. */
  anchorRef?: Ref<HTMLAnchorElement>;

  /** Нужно ли выводить подчеркивание. */
  underline?: boolean;

  /** Отключенное состояние. */
  disabled?: boolean;

  /** Отступ от иконок. */
  iconGutter?: 4 | 8 | 'unset';

  /** Стили. */
  style?: TextButtonStyle;
}

export type TextButtonAsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    /** Какой элемент выводить в качестве текстовой кнопки. */
    as?: 'button';
  };

export type TextButtonAsAnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    /** Какой элемент выводить в качестве текстовой кнопки. */
    as: 'anchor';
  };

export type TextButtonProps = TextButtonAsButtonProps | TextButtonAsAnchorProps;

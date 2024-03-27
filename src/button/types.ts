import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  SVGAttributes,
} from 'react';
import type { WithTestId } from '../types';

export type ButtonSize = 'xs' | 's' | 'm';

export type ButtonViewType = 'primary' | 'secondary' | 'success' | 'info' | 'unset';

export type ButtonAppearance = 'button' | 'link' | 'container';

export type ButtonIconPosition = 'start' | 'end';

export interface ButtonStyle extends CSSProperties {
  // ВАЖНО: пока не добавляем сюда остальные переменные которые используются в стилях
  '--button-color'?: string;
  '--button-background'?: string;
  '--button-hover-color'?: string;
  '--button-hover-background'?: string;
  '--button-disabled-color'?: string;
  '--button-disabled-background'?: string;
}

interface CommonProps<T extends ButtonAppearance = ButtonAppearance> extends WithTestId {
  /** Определяет внешний вид кнопки. */
  viewType?: ButtonViewType;

  /** Определяет тип корневого элемента. */
  appearance?: T;

  /** Иконка. */
  icon?: ElementType<SVGAttributes<SVGSVGElement>>;

  /** Позиция иконки относительно текста. */
  iconPosition?: ButtonIconPosition;

  /** Размер. */
  size?: ButtonSize;

  /** Нужно ли отображать состояние загрузки. */
  loading?: boolean;

  /** Отключенное состояние. */
  disabled?: boolean;

  /** Стили. */
  style?: ButtonStyle;
}

type AsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { appearance?: 'button' };

type AsAnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { appearance: 'link' };

type AsContainerProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CommonProps> & { appearance: 'container' };

export type ButtonProps = AsButtonProps | AsAnchorProps | AsContainerProps;

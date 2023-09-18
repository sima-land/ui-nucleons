import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export type ChipAppearance = 'container' | 'button' | 'anchor';

// interface CommonProps<T extends ButtonAppearance = ButtonAppearance> {
//   /** Определяет внешний вид кнопки. */
//   viewType?: ButtonViewType;

//   /** Определяет тип корневого элемента. */
//   appearance?: T;

//   /** Иконка. */
//   icon?: ComponentType<SVGAttributes<SVGSVGElement>>;

//   /** Позиция иконки относительно текста. */
//   iconPosition?: ButtonIconPosition;

//   /** Размер. */
//   size?: ButtonSize;

//   /** Нужно ли отображать состояние загрузки. */
//   loading?: boolean;

//   /** Отключенное состояние. */
//   disabled?: boolean;

//   /** Идентификатор для систем автоматизированного тестирования. */
//   'data-testid'?: string;

//   /** Стили. */
//   style?: ButtonStyle;
// }

// type AsButtonProps = CommonProps &
//   Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { appearance?: 'button' };

// type AsAnchorProps = CommonProps &
//   Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { appearance: 'link' };

// type AsContainerProps = CommonProps &
//   Omit<HTMLAttributes<HTMLDivElement>, keyof CommonProps> & { appearance: 'container' };

// export type ButtonProps = AsButtonProps | AsAnchorProps | AsContainerProps;

export interface ChipProps {
  href?: string;
  children?: ReactNode;
  withCross?: boolean;
  target?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  checked?: boolean;
  shape?: 'square' | 'pill' | 'unset';
  className?: string;
  style?: CSSProperties;
  endAdornment?: ReactNode;
}

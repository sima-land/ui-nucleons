import type { CSSProperties, ElementType, ReactNode, RefAttributes } from 'react';
import type { Token } from '../colors';
import type { LineHeight, Size, Weight } from '../styling/fonts';

export type Align = 'left' | 'center' | 'right' | 'justify';

export interface TextProps {
  /** Направление. */
  align?: Align;

  /** Содержимое. */
  children?: ReactNode;

  /** Ключ цвета из дизайн системы. */
  color?: Token;

  /** Элемент, который будет использован как обертка. */
  element?:
    | string
    | ElementType<
        {
          className: string;
          style: CSSProperties;
          children?: ReactNode;
        } & RefAttributes<any>
      >;

  /** Межстрочный интервал. */
  lineHeight?: LineHeight;

  /** Нужно ли добавить стиль "white-space: nowrap". */
  nowrap?: boolean;

  /** Размер. */
  size?: Size;

  /** Нужно ли обрезать текст многоточием в одну строку. */
  truncate?: boolean | number;

  /** Начертание. */
  weight?: Weight;
}

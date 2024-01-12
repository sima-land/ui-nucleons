import type { CSSProperties, ElementType, ReactNode, RefAttributes } from 'react';
import type { Token } from '../colors';

type CustomElement = {
  className: string;
  children?: ReactNode;
  style?: CSSProperties;
} & RefAttributes<any>;

export interface BoxProps {
  /** Значение свойства "alignItems". */
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';

  /** Содержимое блока. */
  children?: ReactNode;

  /** Название цвета из дизайн-системы. */
  color?: Token;

  /** Объект для указания inline-стилей. */
  dangerouslySetInlineStyle?: { __style: CSSProperties };

  /** Значение css-свойства "direction". */
  direction?: 'row' | 'column';

  /** Значение css-свойства "display". */
  display?: 'block' | 'none' | 'flex' | 'inline' | 'inline-block';

  /** Элемент, который будет использован как блок. */
  element?: string | ElementType<CustomElement>;

  /** Формирует значение css-свойства "flex". */
  flex?: 'shrink' | 'grow' | 'none';

  /** Значение свойства "justifyContent". */
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';

  /** Внешние отступы. */
  margin?: number;

  /** Внешний отступ снизу. */
  marginBottom?: number;

  /** Внешний отступ слева. */
  marginLeft?: number;

  /** Внешний отступ справа. */
  marginRight?: number;

  /** Внешний отступ сверху. */
  marginTop?: number;

  /** Внешний отступ по вертикали. */
  marginX?: number;

  /** Внешний отступ по горизонтали. */
  marginY?: number;

  /** Внутренние отступы. */
  padding?: number;

  /** Внутренний отступ снизу. */
  paddingBottom?: number;

  /** Внутренний отступ слева. */
  paddingLeft?: number;

  /** Внутренний отступ справа. */
  paddingRight?: number;

  /** Внутренний отступ сверху. */
  paddingTop?: number;

  /** Внутренний отступ по вертикали. */
  paddingX?: number;

  /** Внутренний отступ по горизонтали. */
  paddingY?: number;

  /** Формирует значение css-свойства "flex-wrap". */
  wrap?: boolean;
}

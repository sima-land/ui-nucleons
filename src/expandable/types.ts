import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import type { WithTestId } from '../types';

export interface ExpandableGroupInnerStyle extends CSSProperties {
  '--expandable-item-height'?: string;
  '--expandable-opener-width'?: string;
  '--expandable-gap'?: string;
}

export interface ExpandableGroupProps {
  /** Расстояние между элементами группы в пикселях. */
  gap?: number;

  /** Высота каждого элемента группы в пикселях. */
  itemHeight?: number;

  /** Развернут ли список по умолчанию. */
  defaultExpanded?: boolean;

  /** Количество строк в свернутом состоянии группы. */
  lineLimit?: number;

  /** Содержимое. */
  children?: ReactNode;

  /** Функция, возвращающая содержимое кнопки разворачивания списка. */
  opener?: (data: { hiddenCount: number }) => ReactNode;

  /** Сработает при разворачивании списка. */
  onExpand?: () => void;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили корневого элемента. */
  style?: CSSProperties;

  /** Нужно ли выводить список развернутым. */
  expanded?: boolean;

  /** Ширина открывающего элемента. */
  openerWidth?: number;
}

export interface ExpandableGroupItemProps extends WithTestId {
  /** Содержимое. */
  children?: ReactNode;

  /** Сработает при клике. */
  onClick?: MouseEventHandler;
}

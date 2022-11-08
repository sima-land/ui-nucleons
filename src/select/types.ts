import type {
  ComponentType,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from 'react';
import type { FieldBlockProps, FieldBlockStyle } from '../field-block';
import type { TextButtonProps } from '../text-button';

export interface SelectStyle extends FieldBlockStyle {
  '--dropdown-width'?: string | number;
}

export interface SelectOpenerProps {
  openerRef: RefObject<HTMLElement>;
  label?: string;
  value: ReactNode;
  opened: boolean;
  focused: boolean;
  failed?: boolean;
  disabled?: boolean;
  onFocus: FocusEventHandler<HTMLElement>;
  onBlur: FocusEventHandler<HTMLElement>;
  onMouseDown: MouseEventHandler<HTMLElement>;
  onKeyDown: KeyboardEventHandler<HTMLElement>;
}

export type SelectMenuAlign = 'left' | 'right';

export interface SelectProps {
  /** Опции. */
  children?: ReactNode;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Отключенное состояние. */
  disabled?: boolean;

  /** Ошибочное состояние. */
  failed?: boolean;

  /** Состояние загрузки опций. */
  loading?: boolean;

  /** Сработает при выборе опции. */
  onValueChange?: (value: string) => void;

  /** Сработает при открытии/закрытии меню. */
  onMenuToggle?: (state: { opened: boolean }) => void;

  /** Стили корневого элемента. */
  style?: SelectStyle;

  /** Значение, выводимое в качестве выбранного. При отсутствии будет выведен label. */
  value?: ReactNode;

  /** Направления выпадания меню опций. */
  menuAlign?: SelectMenuAlign;

  /** Ярлык. */
  label?: string;

  /** Открывающий элемент. */
  opener?: 'field-block' | 'text-button' | ComponentType<SelectOpenerProps>;

  /** Опции FieldBlock. */
  fieldBlockProps?: FieldBlockProps;

  /** Опции TextButton. */
  textButtonProps?: TextButtonProps;
}

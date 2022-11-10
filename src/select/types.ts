import type {
  FocusEventHandler,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
  RefObject,
} from 'react';
import type { DropdownProps } from '../dropdown';
import type { DropdownItemElement } from '../dropdown-item/types';
import type { FieldBlockStyle } from '../field-block';

export interface SelectStyle extends FieldBlockStyle {
  '--dropdown-width'?: string | number;
}

export interface SelectOpenerBinding {
  label?: string;
  failed?: boolean;
  disabled?: boolean;
  value: ReactNode;
  opened: boolean;
  menuFocused: boolean;
  openerRef: RefObject<HTMLElement>;
  onMouseDown?: HTMLAttributes<HTMLElement>['onMouseDown'];
  onKeyDown?: HTMLAttributes<HTMLElement>['onKeyDown'];
}

export interface SelectMenuProps extends DropdownProps {
  menuRef?: Ref<HTMLDivElement | null>;
  openerRef: RefObject<HTMLElement | null>;
  value?: ReactNode;
  children?: ReactNode;
  loading?: boolean;
  onBlur?: FocusEventHandler;
  onItemSelect?: (item: DropdownItemElement) => void;
}

export interface SelectProps {
  /** Опции. */
  children?: ReactNode;

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

  /** Значение, выводимое в качестве выбранного. При отсутствии будет выведен label. */
  value?: ReactNode;

  /** Ярлык. */
  label?: string;

  /** Открывающий элемент. */
  opener?: ReactElement;

  /** Опции Dropdown. */
  dropdownProps?: Pick<DropdownProps, 'className' | 'style'>;
}

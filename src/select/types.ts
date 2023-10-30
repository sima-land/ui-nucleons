import type { FocusEventHandler, HTMLAttributes, ReactElement, ReactNode, Ref } from 'react';
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
  openerRef: Ref<HTMLElement | null>;
  anchorRef: Ref<HTMLElement | null>;
  onMouseDown: Required<HTMLAttributes<HTMLElement>>['onMouseDown'];
  onKeyDown: Required<HTMLAttributes<HTMLElement>>['onKeyDown'];
}

export interface SelectMenuProps extends DropdownProps {
  menuRef?: Ref<HTMLDivElement | null>;
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

  /** Значение, выводимое в качестве выбранного. При отсутствии будет выведено значение defaultValue. */
  value?: string;

  /** Значение по умолчанию. При отсутствии будет выведено значение label. */
  defaultValue?: string;

  /** Получив значение являющееся текущим или пустую строку, должна вернуть ReactNode. */
  renderValue?: (value: string) => ReactNode;

  /** Ярлык. */
  label?: string;

  /** Открывающий элемент. */
  opener?: ReactElement;

  /** Свойства компонента Dropdown. */
  dropdownProps?: Omit<DropdownProps, 'rootRef' | 'viewportRef'>;
}

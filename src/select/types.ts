import type { CSSProperties, Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import type { DropdownProps } from '../dropdown';
import type { FieldBlockStyle } from '../field-block';

export interface SelectStyle extends FieldBlockStyle {
  '--dropdown-width'?: string | number;
}

export interface SelectContextValue {
  selectProps: SelectProps;

  currentValue: string;
  setCurrentValue: Dispatch<SetStateAction<string>>;

  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;

  openerElement: HTMLElement | null;
  setOpenerElement: (element: HTMLElement | null) => void;

  anchorElement: HTMLElement | null;
  setAnchorElement: (element: HTMLElement | null) => void;

  menuElement: HTMLElement | null;
  setMenuElement: (element: HTMLElement | null) => void;

  menuFloatingStyle?: CSSProperties;
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

  /** Элемент меню. */
  menu?: ReactElement;

  /** Свойства компонента Dropdown. */
  dropdownProps?: Omit<DropdownProps, 'rootRef' | 'viewportRef'>;

  /** Сработает при открытии меню. */
  onMenuOpen?: VoidFunction;

  /** Сработает при закрытии меню. */
  onMenuClose?: VoidFunction;
}

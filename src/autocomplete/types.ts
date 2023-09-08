import type { ReactNode } from 'react';
import type { DropdownProps } from '../dropdown';
import type { DropdownItemElement } from '../dropdown-item/types';
import type { InputProps } from '../input';

export interface AutocompleteProps extends Omit<InputProps, 'adornmentEnd'> {
  /** Содержимое. */
  children?: ReactNode;

  /** Выводить вместо списка спиннер. */
  loading?: boolean;

  /** Получив опцию должен определить, нужно ли выводить ее в списке. */
  filterOption?: (option: DropdownItemElement, inputValue: string) => boolean;

  /** Украшение после основного содержимого. */
  adornmentEnd?: ReactNode | ((data: { menuShown: boolean }) => ReactNode);

  /** Свойства выпадающего списка. */
  dropdownProps?: Pick<DropdownProps, 'className' | 'style'>;
}

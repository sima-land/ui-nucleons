import type { ReactNode } from 'react';
import type { DropdownProps } from '../dropdown';
import type { DropdownItemElement } from '../dropdown-item/types';
import type { FieldBlockProps } from '../field-block';
import type { InputProps } from '../input';

export interface AutocompleteProps extends InputProps {
  children?: ReactNode;
  loading?: boolean;
  filterOption?: (option: DropdownItemElement, inputValue: string) => boolean;
  adornmentEnd?: FieldBlockProps['adornmentEnd'] | ((data: { menuShown: boolean }) => ReactNode);
  dropdownProps?: Pick<DropdownProps, 'className' | 'style'>;
}

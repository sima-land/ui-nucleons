import type { DropdownProps } from '../dropdown';
import type { MaskedInputProps } from '../masked-input';
import type { Country } from './presets';

export interface PhoneInputProps
  extends Omit<MaskedInputProps, 'mask' | 'placeholder' | 'pattern'> {
  /** Сработает при выборе страны из выпадающего списка. */
  onCountrySelect?: (country: Country) => void;

  /** Свойства компонента Dropdown. */
  dropdownProps?: Omit<DropdownProps, 'rootRef' | 'viewportRef'>;

  /** Сработает при открытии меню. */
  onMenuOpen?: VoidFunction;

  /** Сработает при закрытии меню. */
  onMenuClose?: VoidFunction;
}

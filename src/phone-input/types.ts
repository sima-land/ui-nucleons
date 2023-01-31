import { MaskedInputProps } from '../masked-input';
import { Country } from './presets';

export interface PhoneInputProps
  extends Omit<MaskedInputProps, 'mask' | 'placeholder' | 'pattern'> {
  /** Сработает при выборе страны из выпадающего списка. */
  onCountrySelect?: (country: Country) => void;
}

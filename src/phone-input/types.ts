import { MaskedInputProps } from '../masked-input';
import { Country } from './presets';

export interface PhoneInputProps
  extends Omit<MaskedInputProps, 'mask' | 'placeholder' | 'pattern'> {
  onCountrySelect?: (country: Country) => void;
}

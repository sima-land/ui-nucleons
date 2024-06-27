import type { DropdownProps } from '../dropdown';
import type { MaskedInputProps } from '../masked-input';

export interface PhoneInputProps
  extends Omit<MaskedInputProps, 'mask' | 'placeholder' | 'pattern'> {
  /** Маски номеров телефона. */
  masks?: PhoneInputMask[];

  /** Сработает при выборе страны из выпадающего списка. */
  onCountrySelect?: (country: PhoneInputMask) => void;

  /** Свойства компонента Dropdown. */
  dropdownProps?: Omit<DropdownProps, 'rootRef' | 'viewportRef'>;

  /** Сработает при открытии меню. */
  onMenuOpen?: VoidFunction;

  /** Сработает при закрытии меню. */
  onMenuClose?: VoidFunction;

  /** Определитель маски по умолчанию. */
  getDefaultMask?: (params: {
    value: string;
    masks: PhoneInputMask[];
  }) => PhoneInputMask | undefined;
}

export interface PhoneInputMask {
  readonly id: string;

  /** Название. */
  readonly title: string;

  /** Маска. */
  readonly mask: string;

  /** Нужно ли отображать "rest placeholder" при вводе. */
  readonly needRestPlaceholder?: boolean;

  /** Картинка. */
  readonly optionImageSrc?: string;

  /** Дополнительный текст. */
  readonly optionEndContent?: string;
}

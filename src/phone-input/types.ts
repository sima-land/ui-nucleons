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

export type MaskId =
  | 'russia'
  | 'kazakhstan'
  | 'armenia'
  | 'belarus'
  | 'kyrgyzstan'
  | 'azerbaijan'
  | 'georgia'
  | 'moldova'
  | 'tajikistan'
  | 'turkmenistan'
  | 'uzbekistan'
  | 'ukraine'
  | 'other';

export interface PhoneInputMask {
  /** Идентификатор. */
  readonly id: MaskId;

  /** Название. */
  readonly title: string;

  /** Маска. */
  readonly mask: string;

  /** Нужно ли отображать "rest placeholder" при вводе. */
  readonly needRestPlaceholder?: boolean;

  /** Картинка. */
  readonly optionImageSrc: string;

  /** Дополнительный текст. */
  readonly optionEndContent?: string;

  /** Минимальное допустимое количество символов для расчета заполненности маски. */
  readonly filledMaskMinLength?: number;
}

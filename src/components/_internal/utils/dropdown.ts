import { DEFAULTS, HEIGHTS } from '../../text-field';

/**
 * Получив размер TextField, возвращает свойства для Dropdown для позиционирования строго под полем.
 * @param size Размер TextField.
 * @return Свойства для Dropdown.
 */
export const placeDropdown = (size: keyof typeof HEIGHTS = DEFAULTS.size) => ({
  style: {
    top: `${HEIGHTS[size]}px`,
  },
});

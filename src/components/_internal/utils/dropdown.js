import { DEFAULTS, HEIGHTS } from '../../text-field';

/**
 * Получив размер TextField, возвращает свойства для Dropdown для позиционирования строго под полем.
 * @param {string} size Размер TextField.
 * @return {Object} Свойства для Dropdown.
 */
export const placeDropdown = (size = DEFAULTS.size) => ({
  style: {
    top: `${HEIGHTS[size]}px`,
  },
});

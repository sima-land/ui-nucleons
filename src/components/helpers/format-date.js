import moment from 'moment';
import 'moment/locale/ru.js';

/**
 * Создает функцию для форматирования даты.
 * @param {string|Array} formatFrom Формат(ы) передаваемой даты.
 * @param {string} formatTo Формат возвращаемой даты.
 * @return {Function} Функция для форматирования даты.
 */
export const createDateFormatter = (
  formatFrom = ['YYYY-MM-DD', 'DD.MM.YYYY'],
  formatTo = 'DD MMMM YYYY'
) => value => {
  const date = value && moment(value, formatFrom);
  return date && date.isValid() ? date.format(formatTo) : '';
};

export default createDateFormatter();

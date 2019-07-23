import moment from 'moment';
import 'moment/locale/ru.js';
import isFunction from 'lodash.isfunction';

/**
 * Создает функцию для форматирования даты.
 * @param {string|Array<string>} formatFrom Формат(ы) принимаемой даты.
 * @param {string|function(moment): string} formatTo Формат возвращаемой даты, переданная функция примет moment-объект.
 * @return {Function} Функция для форматирования даты.
 */
export const createDateFormatter = (
  formatFrom = ['YYYY-MM-DD', 'DD.MM.YYYY'],
  formatTo = 'DD MMMM YYYY'
) => {
  const hasFormatFunctionType = isFunction(formatTo);

  return value => {
    const date = value && moment(value, formatFrom);
    let result = '';

    if (date && date.isValid()) {
      result = date.format(
        hasFormatFunctionType ? formatTo(date.clone()) : formatTo
      );
    }

    return result;
  };
};

export default createDateFormatter();

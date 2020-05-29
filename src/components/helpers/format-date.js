import isFunction from 'lodash/isFunction';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import parse from 'date-fns/parse';
import ruLocale from 'date-fns/locale/ru';

/**
 * Создает функцию форматирования дат.
 * @param {Object} [options] Опции.
 * @param {string|Array<string>} [options.formatFrom] Формат(ы) принимаемой даты, понимаемые date-fns/parse.
 * @param {string|function(Date): string} [options.formatTo] Формат возвращаемой даты или функция, возвращающая формат.
 * @param {*} [options.invalidPlaceholder] Вернется в случае невалидности даты.
 * @return {function(string): string} Функция для форматирования даты.
 */
export const createDateFormatter = ({
  formatFrom = ['yyyy-MM-dd', 'dd.MM.yyyy'],
  formatTo = 'dd MMMM yyyy',
  invalidPlaceholder = '',
} = {}) => {
  const hasFormatFunction = isFunction(formatTo);

  return dateString => {
    const date = parseMultiple(dateString, formatFrom, new Date());

    let result = invalidPlaceholder;

    if (isValid(date)) {
      result = format(
        date,
        hasFormatFunction ? formatTo(new Date(date.getTime())) : formatTo,
        { locale: ruLocale }
      );
    }

    return result;
  };
};

/**
 * Работает аналогично "date-fns/parse", но позволяет передать множество форматов в виде массива.
 * @param {string} dateString Строка с датой.
 * @param {string|string[]} formatString Формат(ы) дат.
 * @param {Date} referenceDate Дата, в которую необходимо записать данные.
 * @param {Object} options Опции "date-fns/parse".
 * @return {Date} Дата.
 */
export const parseMultiple = (
  dateString,
  formatString,
  referenceDate,
  options
) => {
  let result;

  if (Array.isArray(formatString)) {
    for (let i = 0; i < formatString.length; i++) {
      result = parse(dateString, formatString[i], referenceDate, options);
      if (isValid(result)) { break; }
    }
  } else {
    result = parse(dateString, formatString, referenceDate, options);
  }

  return result;
};

export const formatDate = createDateFormatter();

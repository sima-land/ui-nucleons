import isFunction from 'lodash/isFunction';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import parse from 'date-fns/parse';
import ruLocale from 'date-fns/locale/ru';

/**
 * Создает функцию форматирования дат.
 * @param options Опции.
 * @param options.formatFrom Формат(ы) принимаемой даты, понимаемые date-fns/parse.
 * @param options.formatTo Формат возвращаемой даты или функция, возвращающая формат.
 * @param options.invalidPlaceholder Вернется в случае невалидности даты.
 * @return Функция для форматирования даты.
 */
export const createDateFormatter = ({
  formatFrom = ['yyyy-MM-dd', 'dd.MM.yyyy'],
  formatTo = 'dd MMMM yyyy',
  invalidPlaceholder = '',
}: {
  formatFrom?: string | string[]
  formatTo?: string | ((d: Date) => string)
  invalidPlaceholder?: any
} = {}) => (dateString: string) => {
  const date = parseMultiple(dateString, formatFrom, new Date());

  let result = invalidPlaceholder;

  if (isValid(date)) {
    result = format(
      date,
      isFunction(formatTo) ? formatTo(new Date(date.getTime())) : formatTo,
      { locale: ruLocale }
    );
  }

  return result;
};

/**
 * Работает аналогично "date-fns/parse", но позволяет передать множество форматов в виде массива.
 * @param dateString Строка с датой.
 * @param formatString Формат(ы) дат.
 * @param referenceDate Дата, в которую необходимо записать данные.
 * @param options Опции "date-fns/parse".
 * @return Дата.
 */
export const parseMultiple = (
  dateString: string,
  formatString: string | string[],
  referenceDate: Date,
  options?: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    useAdditionalWeekYearTokens?: boolean
    useAdditionalDayOfYearTokens?: boolean
  }
): Date => {
  let result;

  if (Array.isArray(formatString)) {
    for (let i = 0; i < formatString.length; i++) {
      result = parse(dateString, formatString[i], referenceDate, options);
      if (isValid(result)) { break; }
    }
  } else {
    result = parse(dateString, formatString, referenceDate, options);
  }

  return result as Date;
};

export const formatDate = createDateFormatter();

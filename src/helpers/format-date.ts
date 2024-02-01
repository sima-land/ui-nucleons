import type { ParseOptions } from 'date-fns';
import { format } from 'date-fns/format';
import { isValid } from 'date-fns/isValid';
import { parse } from 'date-fns/parse';
import { ru as ruLocale } from 'date-fns/locale/ru';

/**
 * Создает функцию форматирования дат.
 * @param options Опции.
 * @param options.formatFrom Формат(ы) принимаемой даты, понимаемые date-fns/parse.
 * @param options.formatTo Формат возвращаемой даты или функция, возвращающая формат.
 * @param options.invalidPlaceholder Вернется в случае невалидности даты.
 * @return Функция для форматирования даты.
 */
export function createDateFormatter({
  formatFrom = ['yyyy-MM-dd', 'dd.MM.yyyy'],
  formatTo = 'dd MMMM yyyy',
  invalidPlaceholder = '',
}: {
  formatFrom?: string | string[];
  formatTo?: string | ((d: Date) => string);
  invalidPlaceholder?: any;
} = {}) {
  return (dateString: string) => {
    const date = parseMultiple(dateString, formatFrom, new Date());

    let result = invalidPlaceholder;

    if (isValid(date)) {
      result = format(
        date,
        typeof formatTo === 'function' ? formatTo(new Date(date.getTime())) : formatTo,
        {
          locale: ruLocale,
        },
      );
    }

    return result;
  };
}

/**
 * Работает аналогично "date-fns/parse", но позволяет передать множество форматов в виде массива.
 * @param dateString Строка с датой.
 * @param formatString Формат(ы) дат.
 * @param referenceDate Дата, в которую необходимо записать данные.
 * @param options Опции "date-fns/parse".
 * @return Дата.
 */
export function parseMultiple(
  dateString: string,
  formatString: string | string[],
  referenceDate: Date,
  options?: ParseOptions,
): Date {
  let result;

  if (Array.isArray(formatString)) {
    for (let i = 0; i < formatString.length; i++) {
      result = parse(dateString, formatString[i], referenceDate, options);
      if (isValid(result)) {
        break;
      }
    }
  } else {
    result = parse(dateString, formatString, referenceDate, options);
  }

  return result as Date;
}

export const formatDate = createDateFormatter();

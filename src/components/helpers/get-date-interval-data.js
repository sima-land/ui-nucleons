import format from 'date-fns/format';
import parse from 'date-fns/parse';
import isEqual from 'date-fns/isEqual';
import isValid from 'date-fns/isValid';
import getMonth from 'date-fns/getMonth';
import ruLocale from 'date-fns/locale/ru';

const inputFormat = ['yyyy-MM-dd'];
const formatOptions = { locale: ruLocale };

/**
 * Формирует интервал дат.
 * @param {string} startDate Начальная дата.
 * @param {string} endDate Конечная дата.
 * @return {{ date: string, isInterval: boolean }} Объект с данными сформированного интервала.
 */
const getDateIntervalData = (startDate, endDate) => {
  const start = parse(startDate, inputFormat, new Date());
  const end = parse(endDate, inputFormat, new Date());

  let date;
  let isInterval;

  if (isValid(start) && isValid(end) && !isEqual(start, end)) {
    const startFormattedDate = getMonth(start) === getMonth(end)
      ? format(start, 'd', formatOptions)
      : format(start, 'd MMMM', formatOptions);

    date = `${startFormattedDate} - ${format(end, 'd MMMM', formatOptions)}`;
    isInterval = true;
  } else if (isValid(start)) {
    date = format(start, 'd MMMM', formatOptions);
    isInterval = false;
  }

  return { date, isInterval };
};

export default getDateIntervalData;

import moment from 'moment';
import 'moment/locale/ru';

/**
 * Формирует интервал дат.
 * @param {string} startDate Начальная дата.
 * @param {string} endDate Конечная дата.
 * @return {Object} Объект с данными сформированного интервала.
 */
const getDateIntervalData = (startDate, endDate) => {
  const timeFormat = ['YYYY-MM-DD'];
  const start = moment(startDate, timeFormat);
  const end = moment(endDate, timeFormat);
  let result = {};
  if (start.isValid() && end.isValid() && start.valueOf() !== end.valueOf()) {
    const startFormattedDate = start.month() === end.month()
      ? start.format('D')
      : start.format('D MMMM');
    result = {
      date: `${startFormattedDate} - ${end.format('D MMMM')}`,
      isInterval: true,
    };
  } else if (start.isValid()) {
    result = {
      date: start.format('D MMMM'),
      isInterval: false,
    };
  }
  return result;
};

export default getDateIntervalData;

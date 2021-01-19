import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import isAfter from 'date-fns/isAfter';
import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';

const UNITS = ['day', 'hour', 'minute', 'second'];

/**
 * Форматирует оставшееся время в виде "дни:часы:минуты:секунды".
 * @param {{ days, hours, minutes, seconds }} distance Оставшееся время.
 * @return {string} Отформатированное время.
 */
export const formatDistance = ({ days, hours, minutes, seconds }) => [
  days,
  ...[hours % 24, minutes % 60, seconds % 60].map(s => `${s}`.padStart(2, '0')),
].join(':');

/**
 * Возвращает объект с данными об оставшемся времени от текущего момента.
 * @param {string} dateString Строка с датой в формате ISO.
 * @return {{ days, hours, minutes, seconds }} Оставшееся время.
 */
export const getDistanceToNow = dateString => {
  const date = parseISO(dateString);

  let result = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (isValid(date) && !isAfter(new Date(), date)) {
    const [days, hours, minutes, seconds] = UNITS.map(
      unit => parseInt(formatDistanceToNowStrict(date, {
        unit,
        roundingMethod: 'floor',
      }).replace(/\D/g, ''))
    );

    result = { days, hours, minutes, seconds };
  }

  return result;
};

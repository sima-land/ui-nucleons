import parseISO from 'date-fns/parseISO';
import isAfter from 'date-fns/isAfter';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import padCharsStart from 'lodash/fp/padCharsStart';

const UNITS = ['day', 'hour', 'minute', 'second'];

const padTimePart = padCharsStart('0', 2);

/**
 * Возвращает отформатированную разницу во времени между событием и текущим временем.
 * @param {string} dateString Дата и время события в формате ISO.
 * @return {string} Отформатированное время до текущего момента в формате d:hh:mm:ss.
 */
export const getTimeDurationToNow = dateString => {
  const date = parseISO(dateString);
  let result;

  if (isAfter(new Date(), date)) {
    result = '0:00:00:00';
  } else {
    const [days, hours, minutes, seconds] = UNITS.map(
      unit => formatDistanceToNowStrict(date, {
        unit,
        roundingMethod: 'floor',
      }).replace(/\D/g, '') // результат содержит слова - убираем их
    );

    result = [
      days,
      ...[hours % 24, minutes % 60, seconds % 60].map(padTimePart), // вместо "2" выводим "02"
    ].join(':');
  }

  return result;
};

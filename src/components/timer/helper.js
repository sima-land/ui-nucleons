import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

/**
 * Возвращает отформатированную разницу во времени между событием и текущим временем.
 * @param {string} endTime Дата и время события.
 * @param {string} format Шаблон для возврата даты.
 * @return {string} Отформатированное время до теущего момента.
 */
export const getTimeDurationToNow = (endTime, format) =>
  moment.duration(moment(endTime) - moment()).format(format);

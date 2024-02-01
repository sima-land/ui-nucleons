import type { TimeDistance } from './types';
import { formatDistanceToNowStrict } from 'date-fns/formatDistanceToNowStrict';
import { isAfter } from 'date-fns/isAfter';
import { isValid } from 'date-fns/isValid';
import { parseISO } from 'date-fns/parseISO';

const UNITS = ['day', 'hour', 'minute', 'second'] as const;

/**
 * Форматирует оставшееся время в виде "дни:часы:минуты:секунды".
 * @param distance Оставшееся время.
 * @return Отформатированное время.
 */
export function formatDistance({ days, hours, minutes, seconds }: TimeDistance): string {
  return [days, ...[hours % 24, minutes % 60, seconds % 60].map(s => `${s}`.padStart(2, '0'))].join(
    ':',
  );
}

/**
 * Возвращает объект с данными об оставшемся времени от текущего момента.
 * @param dateString Строка с датой в формате ISO.
 * @return Оставшееся время.
 */
export function getDistanceToNow(dateString: string): TimeDistance {
  const date = parseISO(dateString);

  let result = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (isValid(date) && !isAfter(new Date(), date)) {
    const [days, hours, minutes, seconds] = UNITS.map(unit =>
      parseInt(
        formatDistanceToNowStrict(date, {
          unit,
          roundingMethod: 'floor',
        }).replace(/\D/g, ''),
      ),
    );

    result = { days, hours, minutes, seconds };
  }

  return result;
}

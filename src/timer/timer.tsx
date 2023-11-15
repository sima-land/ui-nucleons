import type { TimerProps } from './types';
import { useEffect, useState } from 'react';
import { getDistanceToNow, formatDistance } from './utils';

/**
 * Таймер - выводит оставшееся время до заданной временной отметки.
 * @param props Свойства.
 * @return Элемент.
 */
export function Timer({ date, format = formatDistance, timeout = 1000 }: TimerProps) {
  const [distance, setDistance] = useState(getDistanceToNow(date));

  useEffect(() => {
    const timerId = setInterval(() => {
      setDistance(getDistanceToNow(date));
    }, timeout);

    setDistance(getDistanceToNow(date));

    return () => clearInterval(timerId);
  }, [timeout]);

  return <>{format(distance)}</>;
}

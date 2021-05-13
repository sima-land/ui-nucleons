import React, { useEffect, useState } from 'react';
import { Distance } from './types';
import { getDistanceToNow, formatDistance } from './utils';

export interface Props {

  /** Дата и время события. */
  date: string

  /** Должна отформатировать данные об оставшемся времени для вывода. */
  format?: (d: Distance) => React.ReactNode

  /** Частота обновления таймера в миллисекундах. */
  timeout?: number
}

/**
 * Возвращает таймер с временем между событием и текущим временем.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const Timer = ({
  date,
  format = formatDistance,
  timeout = 1000,
}: Props) => {
  const [distance, setDistance] = useState(getDistanceToNow(date));

  useEffect(() => {
    const timerId = setInterval(() => {
      setDistance(getDistanceToNow(date));
    }, timeout);

    setDistance(getDistanceToNow(date));

    return () => clearInterval(timerId);
  }, [timeout]);

  return (
    <>
      {format(distance)}
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { Distance } from './types';
import { getDistanceToNow, formatDistance } from './utils';

export interface Props {
  date: string
  format?: (d: Distance) => React.ReactNode
  timeout?: number
}

/**
 * Возвращает таймер с временем между событием и текущим временем.
 * @param props Свойства компонента.
 * @param props.date Дата и время события.
 * @param props.format Должна отформатировать данные об оставшемся времени для вывода.
 * @param props.timeout Частота обновления таймера в миллисекундах.
 * @return Элемент.
 */
const Timer: React.FC<Props> = ({
  date,
  format = formatDistance,
  timeout = 1000,
}) => {
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

export default Timer;

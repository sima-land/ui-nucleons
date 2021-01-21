import React, { useEffect, useState } from 'react';
import { getDistanceToNow, formatDistance } from './utils';
import PropTypes from 'prop-types';

/**
 * Возвращает таймер с временем между событием и текущим временем.
 * @param {Object} props Свойства компонента.
 * @param {string} props.date Дата и время события.
 * @param {string} [props.format] Должна отформатировать данные об оставшемся времени для вывода.
 * @param {number} [props.timeout] Частота обновления таймера в миллисекундах.
 * @return {ReactElement} Таймер.
 */
const Timer = ({
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

Timer.propTypes = {
  /**
   * Дата и время события в формате ISO.
   */
  date: PropTypes.string,

  /**
   * Должна отформатировать данные об оставшемся времени для вывода.
   */
  format: PropTypes.func,

  /**
   * Частота обновления таймера в мс.
   */
  timeout: PropTypes.number,

  /**
   * Свойства для контейнера таймера.
   */
  timeProps: PropTypes.object,
};

export default Timer;

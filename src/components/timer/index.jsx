import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTimeDurationToNow } from './helper';

/**
 * Возвращает таймер с временем между событием и текущим временем.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.endTime] Дата и время события.
 * @param {string} [props.format] Шаблон для возврата даты.
 * @param {number} [props.timeout] Частота обновления таймера в мс.
 * @param {Object} [props.timeProps] Свойства для HTML элемента таймера.
 * @return {ReactElement} Таймер.
 */
export const Timer = ({
  endTime,
  format = 'd:hh:mm:ss',
  timeout = 1000,
  timeProps = {},
}) => {
  const [time, setTime] = useState(getTimeDurationToNow(endTime, format));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeDurationToNow(endTime, format));
    }, timeout);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <time {...timeProps}>
      {time}
    </time>
  );
};

export default Timer;

Timer.propTypes = {
  /**
   * Дата и время события.
   */
  endTime: PropTypes.string,

  /**
   * Шаблон для возврата даты.
   */
  format: PropTypes.string,

  /**
   * Частота обновления таймера в мс.
   */
  timeout: PropTypes.number,

  /**
   * Свойства для контейнера таймера.
   */
  timeProps: PropTypes.object,
};

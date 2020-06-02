import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTimeDurationToNow } from './helper';

/**
 * Возвращает таймер с временем между событием и текущим временем.
 * @param {Object} props Свойства компонента.
 * @param {string} props.endTime Дата и время события.
 * @param {string} [props.calculate] Должна рассчитать новое значение времени для последующего вывода.
 * @param {number} [props.timeout] Частота обновления таймера в миллисекундах.
 * @param {Object} [props.timeProps] Свойства для HTML элемента таймера.
 * @return {ReactElement} Таймер.
 */
const Timer = ({
  endTime,
  calculate = getTimeDurationToNow,
  timeout = 1000,
  timeProps,
}) => {
  const [time, setTime] = useState(calculate(endTime));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(calculate(endTime));
    }, timeout);

    return () => clearInterval(timerId);
  }, []);

  return (
    <time {...timeProps}>
      {time}
    </time>
  );
};

Timer.propTypes = {
  /**
   * Дата и время события.
   */
  endTime: PropTypes.string,

  /**
   * Должна рассчитать новое значение времени для последующего вывода.
   */
  calculate: PropTypes.func,

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

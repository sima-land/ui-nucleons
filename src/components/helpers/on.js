/**
 * Выполняет подписку на событие целевого объекта.
 * @param {EventTarget} target Целевой объект.
 * @param {string} eventNames Имена событий через пробел.
 * @param {Function} callback Функция обратного вызова.
 * @param {*} [options] Опции подписки.
 * @return {Function} Функция отписки.
 */
const on = (target, eventNames, callback, options) => {
  const eventNamesList = eventNames.split(' ');

  eventNamesList.forEach(eventName => {
    target.addEventListener(eventName, callback, options);
  });

  return () => void eventNamesList.forEach(eventName => {
    target.removeEventListener(eventName, callback, options);
  });
};

export default on;

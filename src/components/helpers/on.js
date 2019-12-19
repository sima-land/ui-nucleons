/**
 * Выполняет подписку на событие целевого объекта.
 * @param {EventTarget} target Целевой объект.
 * @param {string} eventName Имя события.
 * @param {Function} handler Обработчик.
 * @param {string} options Опции.
 * @return {Function} Функция отписки.
 */
const on = (target, eventName, handler, options) => {
  target.addEventListener(eventName, handler, options);

  return () => target.removeEventListener(eventName, handler, options);
};

export default on;

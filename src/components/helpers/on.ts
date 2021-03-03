/**
 * Выполняет подписку на событие целевого объекта.
 * @param target Целевой объект.
 * @param eventNames Имена событий через пробел.
 * @param callback Функция обратного вызова.
 * @param options Опции подписки.
 * @return {Function} Функция отписки.
 */
const on = <T extends Event>(
  target: EventTarget,
  eventNames: string,
  callback: (e: T) => void,
  options?: boolean | EventListenerOptions
) => {
  const eventNamesList = eventNames.split(' ');

  // обернуто чтобы прокинуть T
  const wrapped = (e: any) => callback(e as T);

  eventNamesList.forEach(eventName => {
    target.addEventListener(eventName, wrapped, options);
  });

  return () => void eventNamesList.forEach(eventName => {
    target.removeEventListener(eventName, wrapped, options);
  });
};

export default on;

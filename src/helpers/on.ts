/**
 * Выполняет подписку на событие целевого объекта.
 * @param target Целевой объект.
 * @param eventNames Имена событий через пробел.
 * @param callback Функция обратного вызова.
 * @param options Опции подписки.
 * @return Функция отписки.
 */
export function on<T extends Event | React.SyntheticEvent>(
  target: EventTarget,
  eventNames: string,
  callback: (e: T) => void,
  options?: boolean | EventListenerOptions | AddEventListenerOptions | undefined,
) {
  const eventNamesList = eventNames.split(' ');

  // обернуто чтобы прокинуть T
  // eslint-disable-next-line require-jsdoc
  const wrapped = (e: any) => callback(e as T);

  eventNamesList.forEach(eventName => {
    target.addEventListener(eventName, wrapped, options);
  });

  return () =>
    void eventNamesList.forEach(eventName => {
      target.removeEventListener(eventName, wrapped, options);
    });
}

/**
 * @deprecated Следует использовать именованный экспорт. Экспорт по умолчанию будет удалён в будущем.
 */
export default on;

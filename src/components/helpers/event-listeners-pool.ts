import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import ObservableList from './observable-list';

interface IEventListenersPool {
  getCount: () => number
  add: (item: () => void) => () => void
}

/**
 * Возвращает интерфейс для работы с пулом обработчиков событий.
 * Позволяет подписывать множество функций без вызова addEventListener на экземпляре EventTarget.
 * @param target Объект для прослушивания события.
 * @param eventName Имя события.
 * @return Интерфейс для работы с пулом обработчиков событий.
 */
const EventListenersPool = (target: EventTarget, eventName: string): IEventListenersPool => {
  if (!isString(eventName) || eventName.length === 0) {
    throw TypeError('Second argument must be a non empty string');
  }

  const listeners = ObservableList();

  /**
   * Вызывает все слушатели по событию.
   * @param {Event} event Объект события.
   */
  const callListeners = (event: Event) => {
    // предотвращаем вызов обработчиков, которые будут добавлены в процессе выполнения существующих
    const currentListeners = [...listeners];

    for (const listener of currentListeners) {
      listener(event);
    }
  };

  let listenersCount = 0;

  listeners.subscribe(() => {
    const oldListenersCount = listenersCount;
    listenersCount = listeners.getLength();

    if (oldListenersCount === 0 && listenersCount > 0) {
      // подписываемся при появлении слушателей
      target.addEventListener(eventName, callListeners);
    } else if (oldListenersCount > 0 && listenersCount === 0) {
      // отписываемся при отсутствии
      target.removeEventListener(eventName, callListeners);
    }
  });

  return {
    getCount: () => listeners.getLength(),

    add: (listener: () => void) => {
      isFunction(listener) && listeners.enqueue(listener);

      // функция удаления добавленного слушателя
      return () => listeners.remove(listener);
    },
  };
};

export default EventListenersPool;

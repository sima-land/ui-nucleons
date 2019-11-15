import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import ObservableList from './observable-list';

/**
 * @typedef {Object} EventListenersPool Интерфейс для работы с пулом обработчиков событий.
 * @property {Function} add Добавляет слушатель.
 * @property {Function} getCount Возвращает количество слушателей события.
 */

/**
 * Возвращает интерфейс для работы с пулом обработчиков событий.
 * Позволяет подписывать множество функций без вызова addEventListener на экземпляре EventTarget.
 * @param {EventTarget} target Объект для прослушивания события.
 * @param {string} eventName Имя события.
 * @return {EventListenersPool} Интерфейс для работы с пулом обработчиков событий.
 */
const EventListenersPool = (target, eventName) => {
  if (!(target && isFunction(target.addEventListener))) {
    throw TypeError('First argument should implements "addEventListener" method');
  }

  if (!isString(eventName) || eventName.length === 0) {
    throw TypeError('Second argument must be a non empty string');
  }

  const listeners = ObservableList();

  /**
   * Вызывает все слушатели по событию.
   * @param {Event} event Объект события.
   */
  const callListeners = event => {
    for (const listener of listeners) {
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
    /**
     * Возвращает текущее количество функций подписчиков в пуле.
     * @return {number} Текущее количество функций подписчиков в пуле.
     */
    getCount: () => listeners.getLength(),

    /**
     * Подписывает переданный слушатель на событие.
     * @param {Function} listener Слушатель.
     * @return {Function} Функция отписки переданного слушателя.
     */
    add: listener => {
      isFunction(listener) && listeners.enqueue(listener);

      // функция удаления добавленного слушателя
      return () => listeners.remove(listener);
    },
  };
};

export default EventListenersPool;

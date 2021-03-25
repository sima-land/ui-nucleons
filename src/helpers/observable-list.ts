import isFunction from 'lodash/isFunction';

interface IObservableList extends Iterable<any> {
  get: (item: number) => any
  getLength: () => number
  enqueue: (item: any) => number
  dequeue: () => void
  remove: (item: any) => void
  subscribe: (listener: () => void) => () => void
}

/**
 * Возвращает объект списка, на который можно подписаться.
 * @param [initialItems] Массив начальных значений списка.
 * @return Объект списка, на который можно подписаться.
 */
const ObservableList = (initialItems?: any[]): IObservableList => {
  const items = Array.isArray(initialItems) ? [...initialItems] : [];
  const listeners: Array<() => void> = [];

  /**
   * Вызывает все функции-подписчики.
   */
  const callListeners = () => {
    listeners.forEach(listener => listener());
  };

  return {
    /**
     * Позволяет итерировать объект в циклах и при разворачивании в массив.
     */
    * [Symbol.iterator] () {
      yield *items;
    },

    /**
     * Возвращает элемент по индексу.
     * @param index Индекс элемента.
     * @return Элемент массива.
     */
    get: index => items[index],

    /**
     * Возвращает длину списка.
     * @return Длина списка.
     */
    getLength: () => items.length,

    /**
     * Добавляет элемент в конец списка.
     * @param item Новый элемент.
     * @return Новая длинна.
     */
    enqueue (item) {
      const newLength = items.push(item);
      callListeners();
      return newLength;
    },

    /**
     * Удаляет элемент из начала списка.
     */
    dequeue () {
      items.shift();
      callListeners();
    },

    /**
     * Удаляет переданный элемент из списка.
     * @param value Удаляемый элемент.
     */
    remove (value) {
      const itemIndex = items.indexOf(value);
      itemIndex !== -1 && items.splice(itemIndex, 1);
      callListeners();
    },

    /**
     * Подписывает переданную функцию на изменение списка.
     * @param listener Функция-подписчик.
     * @return Функция отписки переданной функции-подписчика.
     */
    subscribe (listener) {
      isFunction(listener) && listeners.push(listener);

      // функция отписки
      return () => {
        const listenerIndex = listeners.indexOf(listener);
        listenerIndex !== -1 && listeners.splice(listenerIndex, 1);
      };
    },
  };
};

export default ObservableList;

import isFunction from 'lodash/isFunction';

/**
 * Возвращает объект списка, на который можно подписаться.
 * @param {Array} [initialItems] Массив начальных значений списка.
 * @return {Object} Объект списка, на который можно подписаться.
 */
const ObservableList = initialItems => {
  const items = Array.isArray(initialItems) ? [...initialItems] : [];
  const listeners = [];

  /**
   * Вызывает все функции-подписчики.
   */
  const callListeners = () => {
    listeners.forEach(listener => listener());
  };

  return {
    /**
     * Позволяет итерировать объект в циклах и при разворачивании в массив.
     * @inheritdoc
     */
    * [Symbol.iterator] () {
      yield * items;
    },

    /**
     * Возвращает элемент по индексу.
     * @param {number} index Индекс элемента.
     * @return {*} Элемент массива.
     */
    get: index => items[index],

    /**
     * Возвращает длину списка.
     * @return {number} Длина списка.
     */
    getLength: () => items.length,

    /**
     * Добавляет элемент в конец списка.
     * @param {*} item Новый элемент.
     * @return {number} Новая длинна.
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
     * @param {*} value Удаляемый элемент.
     */
    remove (value) {
      const itemIndex = items.indexOf(value);
      itemIndex !== -1 && items.splice(itemIndex, 1);
      callListeners();
    },

    /**
     * Подписывает переданную функцию на изменение списка.
     * @param {Function} listener Функция-подписчик.
     * @return {Function} Функция отписки переданной функции-подписчика.
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

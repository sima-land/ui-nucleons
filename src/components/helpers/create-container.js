import isFunction from 'lodash/isFunction';

/**
 * Фабрика контейнеров для произвольных значений.
 * @param {*} initialValue Начальное значение в контейнере.
 * @return {{ set: Function, get: Function, setObserver: Function }} Контейнер.
 */
const createContainer = initialValue => {
  let value = initialValue;
  let observe;

  /**
   * Геттер значения.
   * @return {*} Значение.
   */
  const get = () => value;

  /**
   * Сеттер значения.
   * @param {*} newValue Новое значение.
   */
  const set = newValue => {
    const oldValue = value;
    value = newValue;

    !Object.is(newValue, oldValue)
      && isFunction(observe)
      && observe(newValue, oldValue);
  };

  /**
   * Сеттер функции-наблюдателя за изменением значения.
   * @param {Function} newObserve Функция-наблюдатель.
   */
  const setObserver = newObserve => {
    observe = newObserve;
  };

  return { get, set, setObserver };
};

export default createContainer;

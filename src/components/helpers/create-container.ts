type Observer<T> = (prev: T | undefined, next: T | undefined) => void;

/**
 * Фабрика контейнеров для произвольных значений.
 * @param {*} initialValue Начальное значение в контейнере.
 * @return {{ set: Function, get: Function, setObserver: Function }} Контейнер.
 */
const createContainer = <T = any>(initialValue?: T) => {
  let value: T | undefined = initialValue;
  let observe: Observer<T> | null;

  /**
   * Геттер значения.
   * @return {*} Значение.
   */
  const get = (): T | undefined => value;

  /**
   * Сеттер значения.
   * @param {*} newValue Новое значение.
   */
  const set = (newValue: T) => {
    const oldValue: T | undefined = value;
    value = newValue;

    !Object.is(newValue, oldValue) && observe?.(newValue, oldValue);
  };

  /**
   * Сеттер функции-наблюдателя за изменением значения.
   * @param {Function} newObserve Функция-наблюдатель.
   */
  const setObserver = (newObserve: Observer<T> | null) => {
    observe = newObserve;
  };

  return { get, set, setObserver };
};

export default createContainer;

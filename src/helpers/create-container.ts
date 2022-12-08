export interface Container<T> {
  get: () => T | undefined;
  set: (v: T) => void;
  setObserver: (fn: Observer<T> | null) => void;
}

type Observer<T> = (prev: T | undefined, next: T | undefined) => void;

/**
 * Фабрика контейнеров для произвольных значений.
 * @param initialValue Начальное значение в контейнере.
 * @return Контейнер.
 */
export function createContainer<T = any>(initialValue?: T): Container<T> {
  let value: T | undefined = initialValue;
  let observe: Observer<T> | null;

  /**
   * Геттер значения.
   * @return Значение.
   */
  const get = (): T | undefined => value;

  /**
   * Сеттер значения.
   * @param newValue Новое значение.
   */
  const set = (newValue: T) => {
    const oldValue: T | undefined = value;
    value = newValue;

    !Object.is(newValue, oldValue) && observe?.(newValue, oldValue);
  };

  /**
   * Сеттер функции-наблюдателя за изменением значения.
   * @param newObserve Функция-наблюдатель.
   */
  const setObserver = (newObserve: Observer<T> | null) => {
    observe = newObserve;
  };

  return { get, set, setObserver };
}

/**
 * @deprecated Следует использовать именованный экспорт. Экспорт по умолчанию будет удалён в будущем.
 */
export default createContainer;

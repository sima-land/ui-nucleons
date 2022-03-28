import { act } from 'react-dom/test-utils';

export type IntersectionObserverEntryBase = Omit<
  IntersectionObserverEntry,
  'time' | 'rootBounds' | 'boundingClientRect' | 'intersectionRect'
>;

let intersectionMock: IntersectionMock | undefined;

/**
 * Возвращает новый объект, частично реализующий IntersectionObserverEntry.
 * @param base Базовая информация.
 * @return Объект.
 */
export function createFakeEntry(base: IntersectionObserverEntryBase): IntersectionObserverEntry {
  const entry: IntersectionObserverEntry = {
    ...base,

    time: Date.now(),

    /** @inheritdoc */
    get rootBounds() {
      // eslint-disable-next-line no-console
      console.error('Not implemented in mock');
      return null as any;
    },

    /** @inheritdoc */
    get boundingClientRect() {
      // eslint-disable-next-line no-console
      console.error('Not implemented in mock');
      return null as any;
    },

    /** @inheritdoc */
    get intersectionRect() {
      // eslint-disable-next-line no-console
      console.error('Not implemented in mock');
      return null as any;
    },
  } as unknown as IntersectionObserverEntry;

  return entry;
}

/**
 * Реализует интерфейс для управления состоянием пересечения элемента с область видимости.
 */
export class IntersectionMock {
  _original: typeof IntersectionObserver;
  _observers: FakeIntersectionObserver[] = [];

  /** Конструктор. */
  constructor() {
    this._original = window.IntersectionObserver;
  }

  /**
   * Подменяет глобальный конструктор IntersectionObserver.
   */
  apply() {
    if (intersectionMock) {
      throw Error('Already mocked');
    }

    intersectionMock = this;
    window.IntersectionObserver = FakeIntersectionObserver;
  }

  /**
   * Восстанавливает оригинальный глобальный конструктор IntersectionObserver.
   */
  restore() {
    if (window.IntersectionObserver !== FakeIntersectionObserver) {
      throw Error('Not mocked');
    }

    window.IntersectionObserver = this._original;
    intersectionMock = undefined;
  }

  /**
   * Имитирует изменение состояния пересечения элемента с областью видимости.
   * @param entryArg Данные пересечения элемента.
   */
  changeElementState(entryArg: IntersectionObserverEntryBase) {
    act(() => {
      const entry = createFakeEntry(entryArg);

      for (const observer of this._observers) {
        if (
          observer._elements.some(e => e === entry.target) &&
          observer.thresholds.includes(entry.intersectionRatio)
        ) {
          (observer as FakeIntersectionObserver)._runCallback(entry);
        }
      }
    });
  }

  /**
   * Записывает observer в список зарегистрированных.
   * @param observer Observer.
   */
  _registerObserver(observer: FakeIntersectionObserver) {
    this._observers.push(observer);
  }

  /**
   * Удаляет observer из списка зарегистрированных.
   * @param observer Observer.
   */
  _unregisterObserver(observer: FakeIntersectionObserver) {
    this._observers.splice(this._observers.indexOf(observer));
  }
}

/**
 * Имитация IntersectionObserver.
 */
export class FakeIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;

  _callback: IntersectionObserverCallback;
  _elements: Element[];

  /** @inheritdoc */
  constructor(callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}) {
    this.root = options?.root || null;
    this.rootMargin = options?.rootMargin || '0px 0px 0px 0px';
    this.thresholds = Array.isArray(options.threshold)
      ? options.threshold
      : [options.threshold || 0];

    this._callback = callback;
    this._elements = [];
    intersectionMock?._registerObserver(this);
  }

  /** @inheritdoc */
  observe(element: Element) {
    this._elements.push(element);
  }

  /** @inheritdoc */
  unobserve(element: Element) {
    this._elements = this._elements.filter(e => e !== element);
  }

  /** @inheritdoc */
  disconnect() {
    this._elements = [];
    intersectionMock?._unregisterObserver(this);
  }

  /** @inheritdoc */
  takeRecords() {
    // eslint-disable-next-line no-console
    console.error('Not implemented in mock');

    return [];
  }

  /**
   * Запускает callback.
   * @param entry Данные пересечения элемента.
   */
  _runCallback(entry: IntersectionObserverEntry) {
    this._callback([entry], this);
  }
}

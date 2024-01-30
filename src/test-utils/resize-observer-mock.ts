import { DOMRectReadOnlyMock } from './dom-rect-read-only-mock';

const privates = new Map<ResizeObserverMock, { targets: Set<Element> }>();

/**
 * Имитация ResizeObserver.
 */
export class ResizeObserverMock implements ResizeObserver {
  /**
   * Создает новый реестр экземпляров ResizeObserverMock.
   * @return Реестр.
   */
  static createRegistry() {
    return new ResizeObserverRegistry();
  }

  protected readonly callback: ResizeObserverCallback;

  /**
   * @inheritdoc
   */
  constructor(callback: ResizeObserverCallback) {
    // ВАЖНО: имитируем поведение согласно реализации в браузере
    if (typeof callback !== 'function') {
      throw new TypeError('ResizeObserverMock constructor: Argument 1 is not callable.');
    }

    // specific for mock
    this.callback = callback;
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ResizeObserver/disconnect).
   * @inheritdoc
   */
  disconnect(): void {
    if (!privates.has(this)) {
      privates.set(this, { targets: new Set() });
    }

    privates.get(this)?.targets.clear();
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ResizeObserver/observe).
   * @inheritdoc
   */
  observe(target: Element): void {
    if (!privates.has(this)) {
      privates.set(this, { targets: new Set() });
    }

    privates.get(this)?.targets.add(target);
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ResizeObserver/unobserve).
   * @inheritdoc
   */
  unobserve(target: Element): void {
    if (!privates.has(this)) {
      privates.set(this, { targets: new Set() });
    }

    privates.get(this)?.targets.delete(target);
  }

  /**
   * Имитирует изменение состояния наблюдаемого элемента.
   * @param entry Данные состояния.
   */
  simulateEntryChange({ target }: Pick<ResizeObserverEntry, 'target'>) {
    if (!privates.has(this)) {
      privates.set(this, { targets: new Set() });
    }

    if (privates.get(this)?.targets.has(target)) {
      this.callback(
        [
          {
            target,

            // not implemented
            borderBoxSize: [],
            contentBoxSize: [],
            contentRect: new DOMRectReadOnlyMock(),
            devicePixelContentBoxSize: [],
          },
        ],
        this,
      );
    }
  }
}

/**
 * Реестр экземпляров ResizeObserverMock.
 */
export class ResizeObserverRegistry {
  protected readonly items: Set<ResizeObserverMock>;

  /**
   * @inheritdoc
   */
  constructor() {
    this.items = new Set();
    this.getObserver = this.getObserver.bind(this);
    this.simulateEntryChange = this.simulateEntryChange.bind(this);
  }

  /**
   * Создает, регистрирует и возвращает новый экземпляр ResizeObserverMock.
   * @param params Аргументы ResizeObserverMock.
   * @return Экземпляр ResizeObserverMock.
   */
  getObserver(...params: ConstructorParameters<typeof ResizeObserverMock>) {
    const item = new ResizeObserverMock(...params);

    this.items.add(item);

    return item;
  }

  /**
   * Имитирует изменение состояния наблюдаемого элемента на всех экземплярах в реестре.
   * @param entry Данные состояния.
   */
  simulateEntryChange(entry: Pick<ResizeObserverEntry, 'target'>) {
    this.items.forEach(item => item.simulateEntryChange(entry));
  }
}

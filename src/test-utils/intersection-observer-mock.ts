import { createDOMRectReadOnly } from './create-dom-rect-read-only';

const privates = new Map<IntersectionObserverMock, { targets: Set<Element> }>();

/**
 * Имитация IntersectionObserver.
 */
export class IntersectionObserverMock implements IntersectionObserver {
  /**
   * Создает новый реестр экземпляров IntersectionObserverMock.
   * @return Реестр.
   */
  static createRegistry() {
    const items: IntersectionObserverMock[] = [];

    return {
      getObserver: (...params: ConstructorParameters<typeof IntersectionObserverMock>) => {
        const item = new IntersectionObserverMock(...params);

        items.push(item);

        return item;
      },

      /**
       * Имитирует изменение состояния наблюдаемого элемента на всех экземплярах в реестре.
       * @param entry Данные состояния.
       */
      simulateEntryChange(
        entry: Pick<IntersectionObserverEntry, 'intersectionRatio' | 'isIntersecting' | 'target'>,
      ) {
        items.forEach(item => item.simulateEntryChange(entry));
      },
    };
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/root).
   */
  readonly root: Element | Document | null;

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/rootMargin).
   */
  readonly rootMargin: string;

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/thresholds).
   */
  readonly thresholds: ReadonlyArray<number>;

  protected readonly callback: IntersectionObserverCallback;
  protected readonly options: IntersectionObserverInit | undefined;

  /**
   * @inheritdoc
   */
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    // ВАЖНО: имитируем поведение согласно реализации в браузере
    if (typeof callback !== 'function') {
      throw new TypeError('IntersectionObserverMock constructor: Argument 1 is not callable.');
    }

    // root
    this.root = options?.root ?? null;

    // rootMargin
    this.rootMargin = options?.rootMargin ?? '0px';

    // thresholds
    if (typeof options?.threshold === 'number') {
      this.thresholds = [options.threshold];
    } else if (Array.isArray(options?.threshold)) {
      this.thresholds = options.threshold;
    } else {
      this.thresholds = [0];
    }

    // specific for mock
    this.callback = callback;
    this.options = options;
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/disconnect).
   * @inheritdoc
   */
  disconnect(): void {
    if (!privates.has(this)) {
      privates.set(this, { targets: new Set() });
    }

    privates.get(this)?.targets.clear();
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/observe).
   * @inheritdoc
   */
  observe(target: Element): void {
    if (!privates.has(this)) {
      privates.set(this, { targets: new Set() });
    }

    privates.get(this)?.targets.add(target);
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/takeRecords).
   * @inheritdoc
   */
  takeRecords(): IntersectionObserverEntry[] {
    // not implemented
    return [];
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/unobserve).
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
  simulateEntryChange({
    target,
    isIntersecting,
    intersectionRatio,
  }: Pick<IntersectionObserverEntry, 'intersectionRatio' | 'isIntersecting' | 'target'>) {
    if (!privates.has(this)) {
      privates.set(this, { targets: new Set() });
    }

    if (privates.get(this)?.targets.has(target) && this.thresholds.includes(intersectionRatio)) {
      this.callback(
        [
          {
            target,
            isIntersecting,
            intersectionRatio,

            // not implemented
            time: Date.now(),
            boundingClientRect: createDOMRectReadOnly(),
            intersectionRect: createDOMRectReadOnly(),
            rootBounds: createDOMRectReadOnly(),
          },
        ],
        this,
      );
    }
  }
}

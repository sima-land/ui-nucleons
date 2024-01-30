const privates = new Map<MediaQueryListMock, { matches: boolean }>();

/**
 * Имитация window.matchMedia.
 */
export class MatchMediaMock {
  protected readonly registry: Set<MediaQueryListMock>;

  /**
   * @inheritdoc
   */
  constructor() {
    this.registry = new Set();
    this.matchMedia = this.matchMedia.bind(this);
  }

  /**
   * Имитация window.matchMedia.
   * @inheritdoc
   */
  matchMedia(query: string): MediaQueryListMock {
    const mql = new MediaQueryListMock(query, false);

    this.registry.add(mql);

    return mql;
  }

  /**
   * Меняет состояние созданных MediaQueryListEventMock и вызывает на них событие MediaQueryListEventMock с типом change.
   * @inheritdoc
   */
  simulateChange({ query, matches }: { query: string; matches: boolean }) {
    this.registry.forEach(mql => {
      if (mql.media === query) {
        privates.set(mql, { matches });
        mql.dispatchEvent(new MediaQueryListEventMock('change', { media: query, matches }));
      }
    });
  }
}

/**
 * Имитация MediaQueryList.
 */
class MediaQueryListMock extends EventTarget implements MediaQueryList {
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/matches).
   * @inheritdoc
   */
  get matches(): boolean {
    return privates.get(this)?.matches ?? false;
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/media).
   */
  readonly media: string;

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/change_event).
   */
  onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;

  /**
   * @inheritdoc
   */
  constructor(media: string, matches: boolean) {
    super();
    this.media = media;
    this.onchange = null;

    if (!privates.has(this)) {
      privates.set(this, { matches });
    }
  }

  /**
   * @inheritdoc
   */
  addEventListener<K extends keyof MediaQueryListEventMap>(
    type: K,
    listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;

  /**
   * @inheritdoc
   */
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;

  /**
   * @inheritdoc
   */
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) {
    super.addEventListener(type, listener, options);
  }

  /**
   * @inheritdoc
   */
  removeEventListener<K extends keyof MediaQueryListEventMap>(
    type: K,
    listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;

  /**
   * @inheritdoc
   */
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;

  /**
   * @inheritdoc
   */
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) {
    super.removeEventListener(type, listener, options);
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/addListener).
   * @deprecated
   * @inheritdoc
   */
  addListener(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void {
    if (callback) {
      this.addEventListener('change', callback);
    }
  }

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryList/removeListener).
   * @deprecated
   * @inheritdoc
   */
  removeListener(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void {
    if (callback) {
      this.removeEventListener('change', callback);
    }
  }
}

/**
 * Имитация MediaQueryListEvent.
 */
class MediaQueryListEventMock extends Event implements MediaQueryListEvent {
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryListEvent/matches).
   */
  readonly matches: boolean;

  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaQueryListEvent/media).
   */
  readonly media: string;

  /**
   * @inheritdoc
   */
  constructor(type: string, eventInitDict?: MediaQueryListEventInit) {
    super(type, eventInitDict);

    this.media = eventInitDict?.media ?? '';
    this.matches = eventInitDict?.matches ?? false;
  }
}

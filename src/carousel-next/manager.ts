/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import { clamp } from 'lodash';
import { Carousel } from '../carousel';
import findChildElement from '../helpers/find-child-element';
import maxIndexOf from '../helpers/max-index-of';
import on from '../helpers/on';
import { getTranslateStyle } from '../helpers/styles';

export interface CarouselManagerOptions {
  vertical?: boolean;
}

const TRUST_KEY = Symbol('carousel-manager:trust-key');

function mod(k: number, n: number): number {
  const remainder = k % n;
  return remainder < 0 ? remainder + n : remainder;
}

export class CarouselEvent extends CustomEvent<{ offset: number; index: number }> {
  private _trustKey?: symbol;

  markOriginal(key: symbol) {
    this._trustKey = key;
  }

  get isOriginal(): boolean {
    return this._trustKey === TRUST_KEY;
  }
}

export class CustomEventEmitter<T extends Event> {
  private eventTarget: EventTarget;
  protected defaultActions: Record<string, (event: T) => void | undefined>;

  constructor() {
    this.defaultActions = {};
    this.eventTarget = new EventTarget();
  }

  on(eventType: string, listener: (event: T) => void) {
    const wrapper = (event: Event) => {
      listener(event as any);
    };

    this.eventTarget.addEventListener(eventType, wrapper);

    return () => {
      this.eventTarget.removeEventListener(eventType, wrapper);
    };
  }

  emit(event: T) {
    this.eventTarget.dispatchEvent(event);

    if (!event.defaultPrevented) {
      this.defaultActions[event.type]?.(event as any);
    }
  }
}

export class CarouselManager extends CustomEventEmitter<CarouselEvent> {
  private _rootElement: HTMLElement;
  private _currentIndex: number;
  private _currentOffset: number;
  private _transitionEnabled: boolean;
  public needCorrectOffsetOnResize: boolean;
  readonly options: CarouselManagerOptions;

  constructor(rootElement: HTMLElement, options: CarouselManagerOptions = {}) {
    super();
    this.options = options;
    this._rootElement = rootElement;
    this._currentIndex = 0;
    this._currentOffset = 0;
    this._transitionEnabled = false;
    this.needCorrectOffsetOnResize = true;

    // @todo очистить
    on(window, 'resize', () => {
      if (this.needCorrectOffsetOnResize) {
        const wasEnabled = this.transitionEnabled;

        if (wasEnabled) {
          this.transitionEnabled = false;
        }

        this.updateCurrentOffset(this.currentIndex);

        if (wasEnabled) {
          this.transitionEnabled = true;
        }
      }
    });

    this.defaultActions['index-change'] = event => {
      this.currentIndex = event.detail.index;
      this.updateCurrentOffset(this.currentIndex);
    };
    this.defaultActions['offset-change'] = event => {
      this.currentOffset = event.detail.offset;
    };
  }

  get transitionEnabled(): boolean {
    return this._transitionEnabled;
  }

  set transitionEnabled(enabled: boolean) {
    const container = this.container.element;

    if (container instanceof HTMLElement) {
      this._transitionEnabled = enabled;
      container.style.transition = enabled ? 'transform .25s ease-in-out' : 'none';
    }
  }

  get currentIndex(): number {
    return this._currentIndex;
  }

  set currentIndex(nextIndex: number) {
    if (Number.isFinite(nextIndex) && Number.isInteger(nextIndex)) {
      this._currentIndex = mod(nextIndex, this.items.length);
    }
  }

  get currentOffset(): number {
    return this._currentOffset;
  }

  set currentOffset(nextOffset: number) {
    if (Number.isFinite(nextOffset)) {
      this._currentOffset = nextOffset;
      this.container.element.style.transform = this.options.vertical
        ? getTranslateStyle(0, this._currentOffset)
        : getTranslateStyle(this._currentOffset, 0);
    }
  }

  get root(): CarouselItem {
    return new CarouselItem(this._rootElement, this);
  }

  get container(): CarouselItem {
    return new CarouselItem(this._rootElement.firstElementChild as any, this);
  }

  get items(): CarouselItem[] {
    const container = this._rootElement.firstElementChild;

    if (container) {
      return [...container.children].map(el => new CarouselItem(el as any, this));
    } else {
      return [];
    }
  }

  scrollToNearest({ direction }: { direction: 'forward' | 'backward' }): void {
    if (this.container.scrollSize <= this.root.size) {
      this.updateCurrentOffset(this.currentIndex);
      return;
    }

    const backward = direction === 'backward';
    const lastIndex = maxIndexOf(this.container.element.children);

    const newIndex = findChildElement({
      target: this.container.element,
      startIndex: backward ? lastIndex : 0,
      increment: backward ? -1 : +1,
      isSuitable: Carousel.makeNearestSiblingChecker({
        viewport: this.root.element.getBoundingClientRect(),
        vertical: Boolean(this.options.vertical),
        backward,
      }),
      needBreakLoop: passed => (backward ? !passed : passed),
    });

    if (newIndex !== -1) {
      this.currentIndex = newIndex;
      this.updateCurrentOffset(this.currentIndex);
    } else {
      this.updateCurrentOffset(this.currentIndex);
    }
  }

  updateCurrentOffset(nextIndex: number): void {
    const targetItem = this.items[nextIndex];

    if (targetItem) {
      const minOffset = this.root.size - this.container.scrollSize;
      this.currentOffset = clamp(this.container.startBound - targetItem.startBound, minOffset, 0);
    }
  }
}

export class CarouselItem {
  private manager: CarouselManager;
  readonly element: HTMLElement;

  constructor(element: HTMLElement, manager: CarouselManager) {
    this.element = element;
    this.manager = manager;
  }

  get size(): number {
    let result = 0;

    if (this.manager.options.vertical) {
      result = this.element.getBoundingClientRect().height;
    } else {
      result = this.element.getBoundingClientRect().width;
    }

    return result;
  }

  get scrollSize(): number {
    let result = 0;

    if (this.manager.options.vertical) {
      result = this.element.scrollHeight;
    } else {
      result = this.element.scrollWidth;
    }

    return result;
  }

  get startBound(): number {
    let result = 0;

    if (this.manager.options.vertical) {
      result = this.element.getBoundingClientRect().top;
    } else {
      result = this.element.getBoundingClientRect().left;
    }

    return result;
  }
}

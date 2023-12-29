import type { PageScrollLockAdapter, PageScrollLockOptions } from '../types';

const MARK_ATTR = 'data-scroll-locked';

/** Адаптер блокировки прокрутки использующий внутреннее решение ui-nucleons. */
export class PageScrollLockAdapterNucleons implements PageScrollLockAdapter {
  protected options?: PageScrollLockOptions;
  protected bodyStyle?: StyleAffect;

  /**
   * Конструктор.
   * @param options Опции.
   */
  constructor(options?: PageScrollLockOptions) {
    this.options = options;
  }

  /** @inheritdoc */
  lock() {
    if (!this.isLocked()) {
      const scrollTop = document.documentElement.scrollTop;

      this.bodyStyle = new StyleAffect(document.body);

      // устанавливаем width: 100vw так как body сжимается при установке position: fixed
      // @todo при необходимости дать возможность задавать установку ширины самостоятельно
      this.bodyStyle.set('width', '100vw').set('position', 'fixed').set('top', `${-scrollTop}px`);

      if (this.options?.reserveScrollBarGap) {
        const gap = this.getScrollbarWidth();
        gap > 0 && this.bodyStyle.set('padding-right', `${gap}px`);
      }

      document.body.setAttribute(MARK_ATTR, 'true');
    }
  }

  /** @inheritdoc */
  unlock() {
    if (this.isLocked()) {
      const { body } = document;
      const parsed = parseFloat(body.style.getPropertyValue('top').replace(/[A-z]*/g, '')) || 0;

      this.bodyStyle?.restore();
      window.scrollTo(0, -parsed);

      document.body.removeAttribute(MARK_ATTR);
    }
  }

  /**
   * Определяет заблокирована ли прокрутка.
   * @return True если прокрутка заблокирована.
   */
  protected isLocked(): boolean {
    return document.body.hasAttribute(MARK_ATTR);
  }

  /**
   * Определяет ширину полосы прокрутки.
   * @return Ширина в пикселях.
   */
  protected getScrollbarWidth(): number {
    // https://javascript.info/task/scrollbar-width
    const div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // must be inserted into body, otherwise sizes will be zero
    document.body.append(div);

    const scrollBarWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollBarWidth;
  }
}

/** Промежуточный слой для установки стилей на элемент с возможностью восстановления состояния. */
export class StyleAffect {
  protected element: HTMLElement;
  protected changes: Map<string, { oldValue: string; oldPriority: string | undefined }>;

  /**
   * @param element Целевой элемент.
   */
  constructor(element: HTMLElement) {
    this.element = element;
    this.changes = new Map();
  }

  /**
   * Устанавливает стили на элемент и запоминает предыдущее значение.
   * @param prop Имя свойства.
   * @param value Значение.
   * @param priority Приоритет.
   * @return Экземпляр.
   */
  set(prop: string, value: string | null, priority?: string): this {
    if (!this.changes.has(prop)) {
      this.changes.set(prop, {
        oldValue: this.element.style.getPropertyValue(prop),
        oldPriority: this.element.style.getPropertyPriority(prop),
      });
    }

    this.element.style.setProperty(prop, value, priority);

    return this;
  }

  /**
   * Откатывает стили.
   * @return Экземпляр.
   */
  restore(): this {
    for (const [prop, { oldValue, oldPriority }] of this.changes) {
      this.element.style.setProperty(prop, oldValue, oldPriority);
    }

    this.changes.clear();

    return this;
  }
}

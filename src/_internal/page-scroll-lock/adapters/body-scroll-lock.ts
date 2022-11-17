import type { PageScrollLockAdapter } from '../types';
import { disableBodyScroll, enableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';

/**
 * Имя атрибута, устанавливаемого на элемент, имеющий прокрутку.
 * Атрибут устанавливается на элемент в случае, если
 * прокручиваемый родитель элемента обрабатывается с помощью body-scroll-lock.
 */
export const BSL_IGNORE_ATTR = 'data-bsl-ignore';

/** Адаптер блокировки прокрутки использующий BSL. */
export class PageScrollLock implements PageScrollLockAdapter {
  private element: Element;
  private options?: BodyScrollOptions;
  private lib: {
    disableBodyScroll: (...args: Parameters<typeof disableBodyScroll>) => void;
    enableBodyScroll: (...args: Parameters<typeof enableBodyScroll>) => void;
  };

  /**
   * Конструктор.
   * @param element Целевой элемент для которого надо сохранить прокрутку.
   * @param options Опции блокировки.
   */
  constructor(element: Element, options?: BodyScrollOptions) {
    this.element = element;
    this.options = options;
    this.lib = {
      disableBodyScroll,
      enableBodyScroll,
    };
  }

  /**
   * Позволяет заменить библиотеку body-scroll-lock.
   * Полезен для использования версии BSL, отличной от той что используется в библиотеке.
   * @param lib Библиотека body-scroll-lock.
   */
  replaceLib(lib: PageScrollLock['lib']) {
    this.lib = lib;
  }

  /** @inheritdoc */
  lock(): void {
    this.lib.disableBodyScroll(this.element, this.options);
  }

  /** @inheritdoc */
  unlock(): void {
    this.lib.enableBodyScroll(this.element);
  }
}

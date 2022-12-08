import { isBrowser } from './is-browser';

/**
 * Проверяет поддержку touch событий.
 * @return True - если поддерживает, false - если нет.
 */
export function isTouchDevice() {
  return isBrowser() && 'ontouchstart' in window;
}

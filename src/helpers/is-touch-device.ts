import isBrowser from './is-browser';

/**
 * Проверяет поддержку touch событий.
 * @return True - если поддерживает, false - если нет.
 */
export const isTouchDevice = () => isBrowser() && 'ontouchstart' in window;

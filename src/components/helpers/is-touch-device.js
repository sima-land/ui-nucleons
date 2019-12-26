/**
 * Проверяет поддержку touch событий.
 * @return {boolean} True - если поддерживает, false - если нет.
 */
export const isTouchDevice = () => typeof window !== 'undefined' && 'ontouchstart' in window;

/**
 * Проверка находимся в браузере или нет.
 * @return Если в браузере true, если нет false.
 */
export function isBrowser() {
  return typeof window !== 'undefined';
}

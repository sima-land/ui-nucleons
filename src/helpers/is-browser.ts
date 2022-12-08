/**
 * Проверка находимся в браузере или нет.
 * @return Если в браузере true, если нет false.
 */
export function isBrowser() {
  return typeof window !== 'undefined';
}

/**
 * @deprecated Следует использовать именованный экспорт. Экспорт по умолчанию будет удалён в будущем.
 */
export default isBrowser;

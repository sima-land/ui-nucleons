/**
 * Проверка находимся в браузере или нет.
 * @return {boolean} Если в браузере true, если нет false.
 */
export default () => typeof window !== 'undefined';

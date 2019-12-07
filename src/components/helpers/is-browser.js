/**
 * Проверка находимся в браузере или нет.
 * @return {boolean} Если в браузере true, если нет false.
 */
const isBrowser = () => typeof window !== 'undefined';
export default isBrowser;

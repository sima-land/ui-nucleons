import isFunction from 'lodash/isFunction';
import 'intersection-observer';

/**
 * Вызывает onIntersection у подписанного компонента при появлении его в области видимости.
 * @param {Object} observerContainer Контейнер с обсервером и списком подписантов.
 * @param {Map<HTMLElement, Function>} observerContainer.registry Map с подписанными компонентами.
 * @param {Array} entries Массив с появившимися DOM-элементами.
 */
export const observerHandle = ({ registry }, entries) => {
  entries
    .forEach(entry => {
      const onIntersection = registry.get(entry.target);
      entry.isIntersecting && isFunction(onIntersection) && onIntersection();
    });
};

/**
 * Подписывает компонент и добавляет его в массив подписавшихся.
 * @param {Object} observerContainer Контейнер с обсервером и списком подписантов.
 * @param {Object} observerContainer.observer Intersection observer.
 * @param {Map<HTMLElement, Function>} observerContainer.registry Map с подписанными компонентами.
 * @param {HTMLElement} target HTML-элемент Компонента.
 * @param {Function} onIntersection Функция, которую необходимо вызвать при срабатывании.
 */
export const addObserve = ({ observer, registry }, target, onIntersection) => {
  if (observer && isFunction(observer.observe)) {
    observer.observe(target);
    registry.set(target, onIntersection);
  }
};

/**
 * Пробрасывает контейнер с экземпляром обсервера в функцию для подписки.
 * @param {Object} observerContainer Контейнер с обсервером и списком подписантов.
 * @param {Function} addObserve Функция подписки компонента на обсервер.
 * @return {Function} Функция подиски на обсервер.
 */
export const wrapAddObserve = (observerContainer, addObserve) =>
  (target, onIntersection) => addObserve(observerContainer, target, onIntersection);

/**
 * Пробрасывает контейнер с экземпляром обсервера в обработчик события обсервера.
 * @param {Object} observerContainer Контейнер с обсервером и списком подписантов.
 * @param {Function} observerHandle Обработчик, в который нужно добавить контейнер.
 * @return {Function} Функция обработчик события обсервера.
 */
export const wrapObserverHandle = (observerContainer, observerHandle) =>
  entries => observerHandle(observerContainer, entries);

/**
 * Создает экземпляр IntersectionObserver и возвращает функцию подписки на него.
 * @param {Object} options Настройки для создания IntersectionObserver.
 * @return {Function} Функция подписки на созданный экземпляр IntersectionObserver.
 */
const initAddObserve = (options = {}) => {
  const observerContainer = {};
  if (typeof window !== 'undefined') {
    observerContainer.registry = new Map();
    observerContainer.observer = new window.IntersectionObserver(
      wrapObserverHandle(observerContainer, observerHandle),
      options
    );
  }
  return wrapAddObserve(observerContainer, addObserve);
};

export default initAddObserve;

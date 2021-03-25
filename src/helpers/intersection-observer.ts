import isFunction from 'lodash/isFunction';
import 'intersection-observer';

interface ObserverContainer {
  registry: Map<Element, any>
  observer: IntersectionObserver
}

export type Callback = (target: HTMLElement) => void;

/**
 * Вызывает onIntersection у подписанного компонента при появлении его в области видимости.
 * @param container Контейнер с обсервером и списком подписантов.
 * @param entries Массив с появившимися DOM-элементами.
 */
export const observerHandle = ({ registry }: ObserverContainer, entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    const onIntersection = registry.get(entry.target);
    entry.isIntersecting && isFunction(onIntersection) && onIntersection();
  });
};

/**
 * Подписывает компонент и добавляет его в массив подписавшихся.
 * @param container Контейнер с обсервером и списком подписантов.
 * @param target HTML-элемент Компонента.
 * @param onIntersection Функция, которую необходимо вызвать при срабатывании.
 */
export const addObserve = (
  { observer, registry }: ObserverContainer,
  target: HTMLElement,
  onIntersection: Callback
) => {
  if (observer && isFunction(observer.observe)) {
    observer.observe(target);
    registry.set(target, onIntersection);
  }
};

/**
 * Пробрасывает контейнер с экземпляром обсервера в функцию для подписки.
 * @param container Контейнер с обсервером и списком подписантов.
 * @param addObserveFunc Функция подписки компонента на обсервер.
 * @return Функция подиски на обсервер.
 */
export const wrapAddObserve = (
  container: ObserverContainer,
  addObserveFunc: (c: ObserverContainer, t: HTMLElement, cb: Callback) => void
) => (target: HTMLElement, onIntersection: Callback) => addObserveFunc(container, target, onIntersection);

/**
 * Пробрасывает контейнер с экземпляром обсервера в обработчик события обсервера.
 * @param container Контейнер с обсервером и списком подписантов.
 * @param handler Обработчик, в который нужно добавить контейнер.
 * @return Функция обработчик события обсервера.
 */
export const wrapObserverHandle = (
  container: ObserverContainer,
  handler: (c: ObserverContainer, es: IntersectionObserverEntry[]) => void
) => (entries: IntersectionObserverEntry[]) => handler(container, entries);

/**
 * Создает экземпляр IntersectionObserver и возвращает функцию подписки на него.
 * @param options Настройки для создания IntersectionObserver.
 * @return Функция подписки на созданный экземпляр IntersectionObserver.
 */
const initAddObserve = (options = {}) => {
  const container: ObserverContainer = {} as ObserverContainer;

  if (typeof window !== 'undefined') {
    container.registry = new Map();
    container.observer = new window.IntersectionObserver(
      wrapObserverHandle(container, observerHandle),
      options
    );
  }

  return wrapAddObserve(container, addObserve);
};

export default initAddObserve;

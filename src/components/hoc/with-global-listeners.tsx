import React from 'react';
import EventListenersPool from '../helpers/event-listeners-pool';
import getDisplayName from '../helpers/get-display-name';

/**
 * Создает компонент высшего порядка добавляющий подписку на глобальные события.
 * @return Компонент высшего порядка добавляющий подписку на глобальные события.
 */
export const makeGlobalListenersHOC = () => {
  const listenerPools = new Map();

  /**
   * Функция подписки на глобальное событие.
   * @param eventName Ключ события.
   * @param listener Обработчик.
   * @return Функция отписки.
   */
  const addListener = (eventName: string, listener: (e: Event) => void) => {
    if (!listenerPools.has(eventName)) {
      listenerPools.set(eventName, EventListenersPool(window, eventName));
    }

    return listenerPools.get(eventName).add(listener);
  };

  /**
   * Компонент высшего порядка.
   * Передает в оборачиваемый компонент функцию добавления слушателя события на объекте window.
   * @param Component Оборачиваемый компонент.
   * @param options Опции.
   * @return Компонент получающий в props функцию подписки на window.
   */
  return (
    Component: React.ComponentType,
    { addListenerPropKey = 'addGlobalListener' }: { addListenerPropKey?: string } = {}
  ) => {
    /**
     * Компонент-обертка.
     * @param props Свойства для оборачиваемого компонента.
     * @return Результат вызова оборачиваемого компонента.
     */
    const Wrapper: React.FC<any> = props => (
      <Component
        {...props}
        {...{ [addListenerPropKey]: addListener }}
      />
    );

    Wrapper.displayName = `withGlobalListeners(${getDisplayName(Component)})`;

    return Wrapper;
  };
};

const withGlobalListeners = makeGlobalListenersHOC();

export default withGlobalListeners;

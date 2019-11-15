import React from 'react';
import EventListenersPool from '../helpers/event-listeners-pool';
import getDisplayName from '../helpers/get-display-name';

/**
 * Создает компонент высшего порядка добавляющий подписку на глобальные события.
 * @return {Function} Компонент высшего порядка добавляющий подписку на глобальные события.
 */
export const makeGlobalListenersHOC = () => {
  const listenerPools = new Map();

  /**
   * Функция подписки на глобальное событие.
   * @param {string} eventName Ключ события.
   * @param {Function} listener Обработчик.
   * @return {Function} Функция отписки.
   */
  const addListener = (eventName, listener) => {
    if (!listenerPools.has(eventName)) {
      listenerPools.set(eventName, EventListenersPool(window, eventName));
    }

    return listenerPools.get(eventName).add(listener);
  };

  /**
   * Компонент высшего порядка.
   * Передает в оборачиваемый компонент функцию добавления слушателя события на объекте window.
   * @param {Function} Component Оборачиваемый компонент.
   * @param {Object} [options] Опции.
   * @param {Object} [options.addListenerPropKey='addGlobalListener'] Ключ под которым в props будет функция подписки.
   * @return {Function} Компонент получающий в props функцию подписки на window.
   */
  return (Component, { addListenerPropKey = 'addGlobalListener' } = {}) => {
    /**
     * Компонент-обертка.
     * @param {Object} props Свойства для оборачиваемого компонента.
     * @return {*} Результат вызова оборачиваемого компонента.
     */
    const GlobalListenersHOC = props => (
      <Component
        {...props}
        {...{ [addListenerPropKey]: addListener }}
      />
    );
    GlobalListenersHOC.displayName = `withGlobalListeners(${getDisplayName(Component)})`;

    return GlobalListenersHOC;
  };
};

const withGlobalListeners = makeGlobalListenersHOC();

export default withGlobalListeners;

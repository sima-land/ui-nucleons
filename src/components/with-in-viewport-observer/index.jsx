import React from 'react';
import getDisplayName from '../helpers/get-display-name';
import initAddObserve from '../helpers/intersection-observer';

/**
 * Создает компонент высшего порядка совершающий подписку на появление в области видимости.
 * @param {Function} addObserve Функция подписки на Intersection Observer.
 * @return {Function} Функция, создающая компонент высшего порядка.
 */
export const makeInViewportObserverHOC = addObserve => Component => {
  /**
   * Компонент-обертка.
   * @param {Object} props Свойства для оборачиваемого компонента.
   * @return {ReactElement} Компонент высшего порядка.
   */
  const InViewportObserverHOC = props => (
    <Component
      addObserve={addObserve}
      {...props}
    />
  );

  InViewportObserverHOC.displayName = `withInViewportObserver(${getDisplayName(Component)})`;
  return InViewportObserverHOC;
};

const withInViewportObserver = makeInViewportObserverHOC(initAddObserve());

export default withInViewportObserver;

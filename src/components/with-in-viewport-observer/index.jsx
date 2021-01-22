import React from 'react';
import isEqual from 'lodash/isEqual';
import getDisplayName from '../helpers/get-display-name';
import initAddObserve from '../helpers/intersection-observer';

/**
 * @typedef {Object} ObserverData Объект данных объявленного Intersection Observer.
 * @property {Object} option Опции с которыми был объявлен Intersection Observer.
 * @property {Function} add Функция подписки на IntersectionObserver.
 */

/**
 * Создает компонент высшего порядка совершающий подписку на появление в области видимости.
 * @param {Array<ObserverData>} observersDataList Массив с данными объявленных Intersection Observer.
 * @return {Function} Функция, создающая компонент высшего порядка.
 */
export const makeInViewportObserverHOC = observersDataList => (Component, options = {}, propName = 'addObserve') => {
  let addObserve;

  observersDataList.forEach(({ add, options: observeOptions }) => {
    if (isEqual(observeOptions, options)) {
      addObserve = add;
    }
  });

  if (!addObserve) {
    addObserve = initAddObserve(options);
    observersDataList.push({
      options,
      add: addObserve,
    });
  }

  const additionalProps = {
    [propName]: addObserve,
  };

  /**
   * Компонент-обертка.
   * @param {Object} props Свойства для оборачиваемого компонента.
   * @return {ReactElement} Компонент высшего порядка.
   */
  const InViewportObserverHOC = props => (
    <Component
      {...additionalProps}
      {...props}
    />
  );

  InViewportObserverHOC.displayName = `withInViewportObserver(${getDisplayName(Component)})`;

  return InViewportObserverHOC;
};

const observersList = [];

const withInViewportObserver = makeInViewportObserverHOC(observersList);

export default withInViewportObserver;

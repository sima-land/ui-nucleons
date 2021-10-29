import React from 'react';
import { isEqual } from 'lodash';
import initAddObserve from '../helpers/intersection-observer';

/**
 * Создает компонент высшего порядка совершающий подписку на появление в области видимости.
 * @param observersDataList Массив с данными объявленных Intersection Observer.
 * @return Функция, создающая компонент высшего порядка.
 */
export function makeInViewportObserverHOC(observersDataList: any) {
  return function HOC<T, K extends string>(
    Component: React.ComponentType<T>,
    options: IntersectionObserverInit = {},
    propName: K = 'addObserve' as K,
  ) {
    let addObserve: any;

    observersDataList.forEach(({ add, options: observeOptions }: any) => {
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

    /**
     * Компонент-обертка.
     * @param props Свойства для оборачиваемого компонента.
     * @return Компонент высшего порядка.
     */
    const Wrapper: React.FC<Omit<T, K> & { [key in K]?: any }> = (props: any) => (
      <Component {...{ [propName]: addObserve }} {...props} />
    );

    Wrapper.displayName = `withInViewportObserver(${Component.displayName || Component.name})`;

    return Wrapper;
  };
}

const observersList: any = [];

const withInViewportObserver = makeInViewportObserverHOC(observersList);

export default withInViewportObserver;

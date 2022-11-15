import { RefObject, useEffect } from 'react';
import { on } from '../helpers/on';
import { setViewportHeightUnit } from '../helpers/styles';

/**
 * Хук, устанавливающий css-переменную "--vh" на переданный элемент.
 * @param ref Ref элемента.
 */
export function useViewportHeightUnit(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const { visualViewport } = window;
    const offList: VoidFunction[] = [];

    // eslint-disable-next-line require-jsdoc, jsdoc/require-jsdoc
    function setVariable() {
      ref.current && setViewportHeightUnit(ref.current);
    }

    offList.push(on(window, 'resize', setVariable));
    offList.push(on(window, 'orientationchange', setVariable));
    visualViewport && offList.push(on(visualViewport, 'resize', setVariable));

    setVariable();

    return () => offList.forEach(fn => fn());
  }, []);
}

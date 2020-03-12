import React, { useEffect, useRef, useCallback } from 'react';
import MobileLayout from '../layout/mobile-layout';
import debounce from 'lodash/debounce';
import classnames from 'classnames/bind';
import classes from './touch-slider.scss';
import Type from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Компонент блока, прокручиваемого по горизонтали. Реализует отступы MobileLayout.
 * @param {Object} props Свойства.
 * @param {*} props.children Прокручиваемое содержимое.
 * @param {Object} [props.layoutProps] Свойства MobileLayout.
 * @return {ReactElement} Компонент блока, прокручиваемого по горизонтали.
 */
const TouchSlider = ({ children, layoutProps }) => {
  const wrapperRef = useRef();
  const innerRef = useRef();

  /** Обновляет отступы для правильного отображения. */
  const updateGutters = useCallback(debounce(makeGutterUpdater(wrapperRef, innerRef), 250));

  useEffect(() => {
    window.addEventListener('resize', updateGutters);

    updateGutters();

    return () => window.removeEventListener('resize', updateGutters);
  }, []);

  return (
    <MobileLayout {...layoutProps}>
      <div ref={wrapperRef} className={cx('wrapper', 'invisible-scroll')}>
        <div ref={innerRef} className={cx('inner')}>
          {children}
        </div>
      </div>
    </MobileLayout>
  );
};

/**
 * Фабрика функций, обновляющих отступы.
 * @param {Object} wrapperRef Ref элемента-обертки.
 * @param {Object} innerRef Ref внутреннего-элемента.
 * @return {Function} Функция, обновляющая отступы.
 */
export const makeGutterUpdater = (wrapperRef, innerRef) => () => {
  const wrapperEl = wrapperRef.current;
  const innerEl = innerRef.current;

  if (innerEl && wrapperEl && wrapperEl.parentElement) {
    const widthDelta = window.innerWidth - wrapperEl.parentElement.getBoundingClientRect().width;

    wrapperEl.style.margin = `0 -${widthDelta / 2}px`;
    innerEl.style.padding = `0 ${widthDelta / 2}px`;
  }
};

export default TouchSlider;

TouchSlider.propTypes = {
  /**
   * Прокручиваемое содержимое.
   */
  children: Type.any,

  /**
   * Свойства передающиеся в MobileLayout.
   */
  layoutProps: Type.object,
};

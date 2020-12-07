import React from 'react';
import { MobileLayout } from '../layout';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './touch-slider.scss';

const cx = classnames.bind(classes);

/**
 * Компонент блока, прокручиваемого по горизонтали. Реализует отступы MobileLayout.
 * @param {Object} props Свойства.
 * @param {*} props.children Прокручиваемое содержимое.
 * @return {ReactElement} Компонент блока, прокручиваемого по горизонтали.
 */
const TouchSlider = ({ children }) => (
  <MobileLayout>
    <div className={cx('outer', 'invisible-scroll')}>
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  </MobileLayout>
);

TouchSlider.propTypes = {
  /**
   * Прокручиваемое содержимое.
   */
  children: PropTypes.any,
};

export default TouchSlider;

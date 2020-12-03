import React from 'react';
import Layout from '../layout';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './touch-slider.scss';

const cx = classnames.bind(classes);

/**
 * Компонент блока, прокручиваемого по горизонтали. Реализует отступы Layout.
 * @param {Object} props Свойства.
 * @param {*} props.children Прокручиваемое содержимое.
 * @return {ReactElement} Компонент блока, прокручиваемого по горизонтали.
 */
const TouchSlider = ({ children }) => (
  <Layout>
    <div className={cx('outer', 'invisible-scroll')}>
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  </Layout>
);

TouchSlider.propTypes = {
  /**
   * Прокручиваемое содержимое.
   */
  children: PropTypes.any,
};

export default TouchSlider;

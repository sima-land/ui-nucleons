import React from 'react';
import { Spinner } from '../spinner';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './loading-overlay.scss';

const cx = classnames.bind(classes);

/**
 * Компонент перекрытия для отображения состояния загрузки.
 * @param {Object} props Свойства.
 * @param {Object} [props.style] Пользовательские стили.
 * @param {string} [props.className] Пользовательский CSS-класс корневого элемента.
 * @param {Object} [props.spinnerProps] Свойства компонента Spinner.
 * @param {boolean} [props.fill=true] Нужно ли заполнять родительский элемент с помощью `position: absolute`.
 * @return {ReactElement} Компонент перекрытия для отображения состояния загрузки.
 */
const LoadingOverlay = ({ style, className, spinnerProps = {}, fill = true }) => (
  <div
    className={cx('loading-overlay', fill && 'fill', className)}
    style={style}
  >
    <Spinner {...spinnerProps} />
  </div>
);

LoadingOverlay.propTypes = {
  /**
   * Пользовательские стили.
   */
  style: PropTypes.object,

  /**
   * Пользовательский CSS-класс корневого элемента.
   */
  className: PropTypes.string,

  /**
   * Свойства компонента Spinner.
   */
  spinnerProps: PropTypes.object,

  /**
   * Нужно ли заполнять родительский элемент с помощью `position: absolute`.
   */
  fill: PropTypes.bool,
};

export default LoadingOverlay;

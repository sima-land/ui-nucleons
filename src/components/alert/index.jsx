import React, { Fragment } from 'react';
import Layer from '../layer';
import NavBar from '../nav-bar';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './alert.scss';
import { InnerBorder } from '../styling/borders';

const cx = classnames.bind(classes);

/**
 * Компонент модального диалога.
 * @param {Object} props Свойства.
 * @param {*} props.children Основное содержимое.
 * @param {string} [props.className] Класс для блока всего содержимого.
 * @param {*} [props.footer] Содержимое "подвала".
 * @param {boolean} [props.inLayer=true] Нужно ли выводить в Layer.
 * @param {Object} [props.navBarProps] Свойства компонента NavBar.
 * @param {string} [props.title] Заголовок.
 * @param {boolean} [props.withDivideNavBar=false] Нужна ли полоса между шапкой и основным содержимым.
 * @param {boolean} [props.withNavBar=Boolean(props.title)] Нужна ли шапка.
 * @return {ReactElement} Компонент модального диалога.
 */
const Alert = ({
  children,
  className,
  footer,
  inLayer = true,
  navBarProps,
  title,
  withDivideNavBar = false,
  withNavBar = Boolean(title),
}) => {
  const Wrapper = inLayer ? Layer : Fragment;

  return (
    <Wrapper>
      <div className={cx('overlay')}>
        <div className={cx('alert', className)}>
          {Boolean(withNavBar) && (
            <NavBar
              {...navBarProps}
              title={title}
              bottomBordered={withDivideNavBar}
              className={cx('header')}
            />
          )}

          <div className={cx('main')}>
            {children}
          </div>

          {Boolean(footer) && (
            <div className={InnerBorder.top}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

Alert.propTypes = {
  /**
   * Основное содержимое.
   */
  children: PropTypes.any,

  /**
   * Класс.
   */
  className: PropTypes.string,

  /**
   * Содержимое "подвала".
   */
  footer: PropTypes.any,

  /**
   * Нужно ли выводить в Layer.
   */
  inLayer: PropTypes.bool,

  /**
   * Свойства компонента NavBar.
   */
  navBarProps: PropTypes.object,

  /**
   * Заголовок.
   */
  title: PropTypes.string,

  /**
   * Нужна ли полоса между шапкой и основным содержимым.
   */
  withDivideNavBar: PropTypes.bool,

  /**
   * Нужна ли шапка.
   */
  withNavBar: PropTypes.bool,
};

export default Alert;

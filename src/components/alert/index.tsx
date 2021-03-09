import React, { Fragment } from 'react';
import Layer from '../layer';
import NavBar, { Props as NavBarProps } from '../nav-bar';
import classnames from 'classnames/bind';
import classes from './alert.scss';
import { InnerBorder } from '../styling/borders';

export interface Props {
  children?: React.ReactNode
  className?: string
  footer?: React.ReactNode
  inLayer?: boolean
  navBarProps?: NavBarProps
  title?: string
  withDivideNavBar?: boolean
  withNavBar?: boolean
}

const cx = classnames.bind(classes);

/**
 * Компонент модального диалога.
 * @param props Свойства.
 * @param props.children Основное содержимое.
 * @param props.className Класс для блока всего содержимого.
 * @param props.footer Содержимое "подвала".
 * @param props.inLayer Нужно ли выводить в Layer.
 * @param props.navBarProps Свойства компонента NavBar.
 * @param props.title Заголовок.
 * @param props.withDivideNavBar Нужна ли полоса между шапкой и основным содержимым.
 * @param props.withNavBar Нужна ли шапка.
 * @return Элемент.
 */
const Alert: React.FC<Props> = ({
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

export default Alert;

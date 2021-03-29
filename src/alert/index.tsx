import React, { Fragment } from 'react';
import Layer from '../layer';
import NavBar, { Props as NavBarProps } from '../nav-bar';
import classnames from 'classnames/bind';
import classes from './alert.scss';
import { InnerBorder } from '../styling/borders';

export interface Props {

  /** Основное содержимое. */
  children?: React.ReactNode

  /** Класс для блока всего содержимого. */
  className?: string

  /** Содержимое "подвала". */
  footer?: React.ReactNode

  /** Нужно ли выводить в Layer. */
  inLayer?: boolean

  /** Свойства компонента NavBar. */
  navBarProps?: NavBarProps

  /** Заголовок. */
  title?: string

  /** Нужна ли полоса между шапкой и основным содержимым. */
  withDivideNavBar?: boolean

  /** Нужна ли шапка. */
  withNavBar?: boolean
}

const cx = classnames.bind(classes);

/**
 * Компонент модального диалога.
 * @param props Свойства.
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

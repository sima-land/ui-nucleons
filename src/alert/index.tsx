import React, { Fragment, useRef } from 'react';
import { Portal } from '../portal';
import { NavBar, NavBarProps } from '../nav-bar';
import classnames from 'classnames/bind';
import styles from './alert.module.scss';
import { InnerBorder } from '../styling/borders';
import { LayerProvider, useLayer } from '../helpers/layer';
import { WithBodyScrollLock, useBodyScrollLock } from '../_internal/body-scroll';

export interface AlertProps extends WithBodyScrollLock {
  /** Основное содержимое. */
  children?: React.ReactNode;

  /** Класс для блока всего содержимого. */
  className?: string;

  /** Содержимое "подвала". */
  footer?: React.ReactNode;

  /** Нужно ли выводить в Layer. */
  inPortal?: boolean;

  /** Свойства компонента NavBar. */
  navBarProps?: NavBarProps;

  /** Заголовок. */
  title?: string;

  /** Нужна ли полоса между шапкой и основным содержимым. */
  withDivideNavBar?: boolean;

  /** Нужна ли шапка. */
  withNavBar?: boolean;

  /** Будет вызвана при закрытии окна нажатием на затемнение. */
  onClose?: () => void;
}

const cx = classnames.bind(styles);

/**
 * Компонент модального диалога.
 * @param props Свойства.
 * @return Элемент.
 */
export const Alert = ({ inPortal = true, ...restProps }: AlertProps) => {
  const layer = useLayer() + 100;
  const Wrapper = inPortal ? Portal : Fragment;

  return (
    <LayerProvider value={layer}>
      <Wrapper>
        <AlertInner {...restProps} />
      </Wrapper>
    </LayerProvider>
  );
};

/**
 * Промежуточный компонент, необходимый для того чтобы не передавать реф для блокировки прокрутки через портал.
 * @param props Свойства.
 * @return Элемент.
 */
const AlertInner = ({
  children,
  className,
  footer,
  navBarProps,
  title,
  withDivideNavBar,
  withNavBar = Boolean(title),
  withScrollDisable = false,
  scrollDisableOptions,
  onClose,
}: Omit<AlertProps, 'inPortal'>) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const layer = useLayer();

  useBodyScrollLock(rootRef, withScrollDisable, scrollDisableOptions);

  return (
    <div
      ref={rootRef}
      className={cx('overlay')}
      style={{ zIndex: layer }} // z-index именно здесь из-за position: fixed
      onClick={e => e.target === e.currentTarget && onClose?.()}
      data-testid='alert:overlay'
    >
      <div className={cx('alert', className)} data-testid='alert'>
        {withNavBar && (
          <NavBar
            {...navBarProps}
            title={title}
            bottomBordered={withDivideNavBar}
            className={cx('header')}
          />
        )}

        <div className={cx('main')}>{children}</div>

        {Boolean(footer) && <div className={InnerBorder.top}>{footer}</div>}
      </div>
    </div>
  );
};

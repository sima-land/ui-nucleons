import React, { useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './alert.module.scss';
import { InnerBorder } from '../styling/borders';
import { LayerProvider, useLayer } from '../helpers/layer';
import { WithBodyScrollLock, useBodyScrollLock, allowTouchMove } from '../_internal/body-scroll';
import { TopBar, TopBarProps } from '../top-bar';

export interface AlertProps extends WithBodyScrollLock {
  /** Основное содержимое. */
  children?: React.ReactNode;

  /** Класс для блока всего содержимого. */
  className?: string;

  /** Содержимое "подвала". */
  footer?: React.ReactNode;

  /** Свойства компонента NavBar. */
  navBarProps?: TopBarProps;

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
export const Alert = ({
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
}: AlertProps) => {
  const layer = useLayer() + 100;
  const rootRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(rootRef, withScrollDisable, { allowTouchMove, ...scrollDisableOptions });

  return (
    <LayerProvider value={layer}>
      <div
        ref={rootRef}
        className={cx('overlay')}
        style={{ zIndex: layer }} // z-index именно здесь из-за position: fixed
        onClick={e => e.target === e.currentTarget && onClose?.()}
        data-testid='alert:overlay'
      >
        <div className={cx('alert', className)} data-testid='alert'>
          {withNavBar && (
            <TopBar
              {...navBarProps}
              title={title}
              divided={withDivideNavBar}
              className={cx('header')}
            />
          )}

          <div className={cx('main')}>{children}</div>

          {Boolean(footer) && <div className={InnerBorder.top}>{footer}</div>}
        </div>
      </div>
    </LayerProvider>
  );
};

import React, { Fragment, useEffect, useRef } from 'react';
import { Portal } from '../portal';
import { NavBar, Props as NavBarProps } from '../nav-bar';
import classnames from 'classnames/bind';
import classes from './alert.module.scss';
import { InnerBorder } from '../styling/borders';
import { LayerProvider, useLayer } from '../helpers/layer';
import { enableBodyScroll, disableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';

export interface Props {

  /** Основное содержимое. */
  children?: React.ReactNode

  /** Класс для блока всего содержимого. */
  className?: string

  /** Содержимое "подвала". */
  footer?: React.ReactNode

  /** Нужно ли выводить в Layer. */
  inPortal?: boolean

  /** Свойства компонента NavBar. */
  navBarProps?: NavBarProps

  /** Заголовок. */
  title?: string

  /** Нужна ли полоса между шапкой и основным содержимым. */
  withDivideNavBar?: boolean

  /** Нужна ли шапка. */
  withNavBar?: boolean

  /** Нужно ли выключать прокрутку body. */
  withScrollDisable?: boolean

  /** Опции отключения прокрутки. */
  scrollDisableOptions?: BodyScrollOptions
}

const cx = classnames.bind(classes);

/**
 * Компонент модального диалога.
 * @param props Свойства.
 * @return Элемент.
 */
export const Alert = ({ inPortal = true, ...restProps }: Props) => {
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
  withScrollDisable,
  scrollDisableOptions,
}: Omit<Props, 'inPortal'>) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = rootRef.current;

    if (element && withScrollDisable) {
      disableBodyScroll(element, scrollDisableOptions);

      return () => enableBodyScroll(element);
    }
  }, [withScrollDisable]);

  return (
    <div className={cx('overlay')} ref={rootRef} data-testid='alert'>
      <div className={cx('alert', className)}>
        {withNavBar && (
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
  );
};

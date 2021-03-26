import React, { useEffect, useRef } from 'react';
import { enableBodyScroll, disableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';
import TopBar, { Props as TopBarProps } from '../top-bar';
import { useCloseHandler } from './utils';
import classnames from 'classnames/bind';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';
import { BoxShadow } from '../styling/shadows';
import { InnerBorder } from '../styling/borders';
import styles from './modal.scss';

type Size = 's' | 'm' | 'l' | 'xl' | 'fullscreen';

export interface Props {
  size?: Size
  children?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void
  scrollDisableOptions?: BodyScrollOptions
  subtitle?: string
  title?: string
  topBarProps?: TopBarProps
  withCloseButton?: boolean
  withDivideFooter?: boolean
  withDivideTopBar?: boolean
  withScrollDisable?: boolean
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Компонент модального окна.
 * @param props Свойства компонента.
 * @param props.withScrollDisable Нужно ли блокировать прокрутку body при показе.
 * @param props.scrollDisableOptions Опции для disableBodyScroll.
 * @param props.title Заголовок (только при extended=true).
 * @param props.subtitle Подзаголовок (только при extended=true).
 * @param props.topBarProps Свойства TopBar (только при extended=true).
 * @param props.withDivideTopBar Нужно ли отделять TopBar чертой (только при extended=true).
 * @param props.withDivideFooter Нужно ли отделять footer чертой (только при extended=true).
 * @param props.footer Содержимое футера (только при extended=true).
 * @param props.children Содержимое компонента.
 * @param props.onClose Функция, вызываемая при закрытии модального окна.
 * @param props.withCloseButton Нужно ли выводить крестик.
 * @param props.withTopBar Нужно ли выводить TopBar.
 * @return Элемент.
 */
const Modal: React.FC<Props> = ({
  size = 'm',
  children,
  footer,
  onClose,
  scrollDisableOptions = { reserveScrollBarGap: true },
  subtitle,
  title,
  topBarProps,
  withCloseButton,
  withDivideFooter = true,
  withDivideTopBar = false,
  withScrollDisable = true,
  'data-testid': dataTestId = 'modal',
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    withScrollDisable
      && rootRef.current
      && disableBodyScroll(rootRef.current, scrollDisableOptions);

    return () => {
      withScrollDisable
        && rootRef.current
        && enableBodyScroll(rootRef.current);
    };
  }, [withScrollDisable]);

  const fullscreen = size === 'fullscreen';

  return (
    <div
      ref={rootRef}
      className={cx('overlay')}
      data-testid='modal:overlay'
      {...onClose && useCloseHandler(onClose)}
    >
      <div className={cx('modal', `size-${size}`, !fullscreen && BoxShadow.z4)} data-testid={dataTestId}>
        <TopBar
          title={title}
          subtitle={subtitle}
          buttonsProps={
            withCloseButton
              ? {
                end: {
                  'data-testid': 'modal:close',
                  onClick: onClose,
                  icon: <CrossSVG className={cx('cursor-pointer')} />,
                },
                ...topBarProps?.buttonsProps,
              }
              : undefined
          }
          {...topBarProps}
          size={fullscreen ? 'm' : 's'}
          className={cx('header', withDivideTopBar && InnerBorder.bottom)}
        />

        {children}

        {Boolean(footer) && (
          <div className={cx('footer', withDivideFooter && InnerBorder.top)}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

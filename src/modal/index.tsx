import React, { Fragment } from 'react';
import { BodyScrollOptions } from 'body-scroll-lock';
import TopBar, { Props as TopBarProps } from '../top-bar';
import { useCloseHandler, useScrollDisable } from './utils';
import classnames from 'classnames/bind';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';
import { BoxShadow } from '../styling/shadows';
import { InnerBorder } from '../styling/borders';
import styles from './modal.scss';
import Layer from '../layer';

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
  withLayer?: boolean
}

const cx = classnames.bind(styles);

/**
 * Компонент модального окна.
 * @param props Свойства компонента.
 * @param props.children Содержимое компонента.
 * @param props.footer Содержимое футера (только при extended=true).
 * @param props.onClose Функция, вызываемая при закрытии модального окна.
 * @param props.scrollDisableOptions Опции для disableBodyScroll.
 * @param props.subtitle Подзаголовок (только при extended=true).
 * @param props.title Заголовок (только при extended=true).
 * @param props.topBarProps Свойства TopBar (только при extended=true).
 * @param props.withCloseButton Нужно ли выводить крестик.
 * @param props.withDivideFooter Нужно ли отделять footer чертой (только при extended=true).
 * @param props.withDivideTopBar Нужно ли отделять TopBar чертой (только при extended=true).
 * @param props.withLayer Нужно ли выводить элемент в Layer.
 * @param props.withScrollDisable Нужно ли блокировать прокрутку body при показе.
 * @param props.withTopBar Нужно ли выводить TopBar.
 * @return Элемент.
 */
const Modal: React.FC<Props> = ({
  'data-testid': dataTestId = 'modal',
  children,
  footer,
  onClose,
  scrollDisableOptions = { reserveScrollBarGap: true },
  size = 'm',
  subtitle,
  title,
  topBarProps,
  withCloseButton,
  withDivideFooter = true,
  withDivideTopBar,
  withLayer,
  withScrollDisable = true,
}) => {
  const Wrapper = withLayer ? Layer : Fragment;
  const fullscreen = size === 'fullscreen';

  const rootRef = useScrollDisable<HTMLDivElement>(withScrollDisable, scrollDisableOptions);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Modal;

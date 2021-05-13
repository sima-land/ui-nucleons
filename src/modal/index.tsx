import React, { Fragment } from 'react';
import { BodyScrollOptions } from 'body-scroll-lock';
import { TopBar, Props as TopBarProps } from '../top-bar';
import { useCloseHandler, useScrollDisable } from './utils';
import classnames from 'classnames/bind';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';
import { BoxShadow } from '../styling/shadows';
import { InnerBorder } from '../styling/borders';
import styles from './modal.scss';
import { Layer } from '../layer';

type Size = 's' | 'm' | 'l' | 'xl' | 'fullscreen';

export interface Props {

  /** Содержимое компонента. */
  children?: React.ReactNode

  /** Содержимое футера. */
  footer?: React.ReactNode

  /** Функция, вызываемая при закрытии модального окна. */
  onClose?: () => void

  /** Опции для disableBodyScroll. */
  scrollDisableOptions?: BodyScrollOptions

  /** Размер окна. */
  size?: Size

  /** Подзаголовок. */
  subtitle?: string

  /** Заголовок. */
  title?: string

  /** Свойства TopBar. */
  topBarProps?: Omit<TopBarProps, 'className'>

  /** Нужно ли выводить крестик. */
  withCloseButton?: boolean

  /** Нужно ли отделять footer чертой. */
  withDivideFooter?: boolean

  /** Нужно ли отделять TopBar чертой. */
  withDivideTopBar?: boolean

  /** Нужно ли выводить элемент в Layer (при SSR необходимо указать false). */
  withLayer?: boolean

  /** Нужно ли блокировать прокрутку body при показе. */
  withScrollDisable?: boolean

  /** Нужно ли выводить TopBar. */
  withTopBar?: boolean

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Компонент модального окна.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const Modal: React.FC<Props> = ({
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
  withTopBar = true,
  'data-testid': dataTestId = 'modal',
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
          {withTopBar && (
            <TopBar
              title={title}
              subtitle={subtitle}
              {...topBarProps}
              buttonsProps={
                withCloseButton
                  ? {
                    end: {
                      'data-testid': 'modal:close',
                      onClick: onClose,
                      icon: <CrossSVG />,
                    },
                    ...topBarProps?.buttonsProps,
                  }
                  : topBarProps?.buttonsProps
              }
              size={fullscreen ? 'm' : 's'}
              className={cx('header', withDivideTopBar && InnerBorder.bottom)}
            />
          )}

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

import React, { Fragment, useRef } from 'react';
import { BodyScrollOptions } from 'body-scroll-lock';
import { TopBar, Props as TopBarProps } from '../top-bar';
import { useCloseHandler, useScrollDisable } from './utils';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';
import ArrowLeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left';
import { BoxShadow } from '../styling/shadows';
import { InnerBorder } from '../styling/borders';
import { Layer } from '../layer';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import classnames from 'classnames/bind';
import styles from './modal.scss';

type Size = 's' | 'm' | 'l' | 'xl' | 'fullscreen';

export interface Props {

  /** Содержимое компонента. */
  children?: React.ReactNode

  /** Содержимое футера. */
  footer?: React.ReactNode

  /** Будет вызвана при нажатии на кнопку "назад" в топ баре. */
  onBack?: () => void

  /** Будет вызвана при закрытии окна. */
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

  /** Нужно ли выводить кнопку назад в топ баре. */
  withBackButton?: boolean

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

  /** Высота вида "400px". */
  height?: string | number,
}

const cx = classnames.bind(styles);

/**
 * Компонент модального окна.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const Modal = ({
  children,
  footer,
  onClose,
  onBack,
  scrollDisableOptions = { reserveScrollBarGap: true },
  size = 'm',
  subtitle,
  title,
  topBarProps,
  withCloseButton,
  withBackButton = Boolean(onBack),
  withDivideFooter = true,
  withDivideTopBar,
  withLayer,
  withScrollDisable = true,
  withTopBar = Boolean(title) || withCloseButton || withBackButton,
  height,
  'data-testid': testId = 'modal',
}: Props) => {
  const heightRef = useRef(height); // не обновляем значение здесь чтобы запретить динамику высоты
  const Wrapper = withLayer ? Layer : Fragment;
  const fullscreen = size === 'fullscreen';
  const rootRef = useScrollDisable<HTMLDivElement>(withScrollDisable, scrollDisableOptions);
  const handleClose = useCloseHandler(onClose);

  return (
    <Wrapper>
      <div
        ref={rootRef}
        className={cx('overlay')}
        data-testid='modal:overlay'
        {...handleClose}
      >
        <div
          className={cx(
            'modal',
            `size-${size}`,
            !fullscreen && BoxShadow.z4
          )}
          style={{
            '--modal-height': heightRef.current,
          } as React.CSSProperties}
          data-testid={testId}
        >
          {withTopBar && (
            <TopBar
              {...topBarProps}
              title={title}
              subtitle={subtitle}
              buttonsProps={{
                ...topBarProps?.buttonsProps,
                ...withBackButton && {
                  start: {
                    'data-testid': 'modal:back',
                    onClick: onBack,
                    icon: <ArrowLeftSVG />,
                  },
                },
                ...withCloseButton && {
                  end: {
                    'data-testid': 'modal:close',
                    onClick: onClose,
                    icon: <CrossSVG />,
                  },
                },
              }}
              size={fullscreen ? 'm' : 's'}
              className={cx('header', withDivideTopBar && InnerBorder.bottom)}
            />
          )}

          <CustomScrollbar className={cx('main')} overflow={{ x: 'h', y: 's' }}>
            {children}
          </CustomScrollbar>

          {footer && (
            <div className={cx('footer', withDivideFooter && InnerBorder.top)}>
              {footer}
            </div>
          )}

          {!footer && !fullscreen && (
            <div className={cx('footer-stub')} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

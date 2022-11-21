import React, { ReactNode, useContext, useImperativeHandle, useRef } from 'react';
import { TopBar, TopBarProps } from '../top-bar';
import { navigationButtons } from '../top-bar/utils';
import { BottomBar, BottomBarProps } from '../bottom-bar';
import { CustomScrollbar, getViewport } from '../_internal/custom-scrollbar';
import { ViewportContext } from '../context/viewport';
import { ModalContext } from './utils';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

export interface ModalHeaderProps extends Omit<TopBarProps, 'size'> {
  onBack?: () => void;
  onClose?: () => void;
}

export type ModalFooterProps = Omit<BottomBarProps, 'size'>;

/**
 * Шапка окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalHeader({ className, onBack, onClose, buttons, ...rest }: ModalHeaderProps) {
  const { topBarSize } = useContext(ModalContext);

  return (
    <TopBar
      {...rest}
      size={topBarSize}
      buttons={navigationButtons({ buttons, onBack, onClose })}
      className={cx('header', className)}
    />
  );
}

/**
 * Основной контент окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalBody({
  children,
  onFullScroll,
  fullScrollThreshold,
}: {
  children?: ReactNode;
  fullScrollThreshold?: number;
  onFullScroll?: () => void;
}) {
  const viewportRef = useRef<HTMLElement>(null);
  const scrollableRef = useRef<HTMLElement>(null);
  const osComponentRef = useRef<OverlayScrollbarsComponent>(null);
  const { withScrollDisable, scrollDisableOptions } = useContext(ModalContext);

  useImperativeHandle<HTMLElement | null, HTMLElement | null>(scrollableRef, () =>
    getViewport(osComponentRef.current),
  );

  useImperativeHandle<HTMLElement | null, HTMLElement | null>(viewportRef, () =>
    getViewport(osComponentRef.current),
  );

  usePageScrollLock(scrollableRef, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

  return (
    <ViewportContext.Provider value={viewportRef}>
      <CustomScrollbar
        inFlexBox
        osComponentRef={osComponentRef}
        className={styles.body}
        overflow={{ x: 'hidden', y: 'scroll' }}
        onFullScroll={onFullScroll}
        fullScrollThreshold={fullScrollThreshold}
      >
        {children}
      </CustomScrollbar>
    </ViewportContext.Provider>
  );
}

/**
 * Футер окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalFooter({ className, ...rest }: ModalFooterProps) {
  const { bottomBarSize } = useContext(ModalContext);

  return <BottomBar {...rest} size={bottomBarSize} className={cx('footer', className)} />;
}

/**
 * Контент который будет выводится поверх окна с абсолютным позиционированием.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalOverlap({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

import React, { ReactNode, useContext, useRef } from 'react';
import { TopBar, TopBarProps } from '../top-bar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import { BottomBar, BottomBarProps } from '../bottom-bar';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import { ViewportContext } from '../context/viewport';
import { BSL_IGNORE_ATTR } from '../constants';
import { ModalContext } from './utils';
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
      buttons={{
        ...buttons,
        ...(onBack && {
          start: {
            'data-testid': 'modal:back',
            onClick: onBack,
            icon: <ArrowLeftSVG />,
          },
        }),
        ...(onClose && {
          end: {
            'data-testid': 'modal:close',
            onClick: onClose,
            icon: <CrossSVG />,
          },
        }),
      }}
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
  const ref = useRef<HTMLDivElement>(null);

  return (
    <CustomScrollbar
      inFlexBox
      className={styles.body}
      overflow={{ x: 'h', y: 's' }}
      onFullScroll={onFullScroll}
      fullScrollThreshold={fullScrollThreshold}
    >
      <ViewportContext.Provider value={ref}>
        <div className={styles.main} ref={ref} {...{ [BSL_IGNORE_ATTR]: true }}>
          {children}
        </div>
      </ViewportContext.Provider>
    </CustomScrollbar>
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

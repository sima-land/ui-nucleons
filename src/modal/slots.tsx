import React, { useRef } from 'react';
import { TopBar, TopBarProps } from '../top-bar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import { BottomBar, BottomBarProps } from '../bottom-bar';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import styles from './modal.module.scss';
import { ViewportContext } from '../context/viewport';
import { BSL_IGNORE_ATTR } from '../constants';

export interface ModalHeaderProps extends TopBarProps {
  onBack?: () => void;
  onClose?: () => void;
}

/**
 * Шапка окна.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModalHeader = ({ onBack, onClose, ...topBarProps }: ModalHeaderProps) => (
  <TopBar
    {...topBarProps}
    buttonsProps={{
      ...topBarProps.buttonsProps,
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
    className={styles.header}
  />
);

/**
 * Основной контент окна.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModalBody = ({
  children,
  onFullScroll,
  fullScrollThreshold,
}: {
  children?: React.ReactNode;
  fullScrollThreshold?: number;
  onFullScroll?: () => void;
}) => {
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
};

/**
 * Футер окна.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModalFooter = (props: BottomBarProps) => <BottomBar {...props} />;

/**
 * Контент который будет выводится поверх окна с абсолютным позиционированием.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModalOverlap: React.FC = ({ children }) => <>{children}</>;

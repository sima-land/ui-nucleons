import React from 'react';
import { TopBar, TopBarProps } from '../top-bar';
import CrossSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/cross';
import ArrowLeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left';
import { BottomBar, BottomBarProps } from '../bottom-bar';
import styles from './modal.scss';

export interface ModalHeaderProps extends TopBarProps {
  onBack?: () => void
  onClose?: () => void
}

/**
 * Шапка окна.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModalHeader = ({
  onBack,
  onClose,
  ...topBarProps
}: ModalHeaderProps) => (
  <TopBar
    {...topBarProps}
    buttonsProps={{
      ...topBarProps.buttonsProps,
      ...onBack && {
        start: {
          'data-testid': 'modal:back',
          onClick: onBack,
          icon: <ArrowLeftSVG />,
        },
      },
      ...onClose && {
        end: {
          'data-testid': 'modal:close',
          onClick: onClose,
          icon: <CrossSVG />,
        },
      },
    }}
    className={styles.header}
  />
);

/**
 * Основной контент окна.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModalBody: React.FC = ({ children }) => (
  <>{children}</>
);

/**
 * Футер окна.
 * @param props Свойства.
 * @return Элемент.
 */
export const ModalFooter = (props: BottomBarProps) => (
  <BottomBar {...props} />
);

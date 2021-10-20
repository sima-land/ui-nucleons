import React from 'react';
import { TopBar, TopBarProps } from '../top-bar';
import { BottomBar, BottomBarProps } from '../bottom-bar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import styles from './side-page.module.scss';

/**
 * @param props Свойства.
 * @return Элемент.
 */
export const SidePageHeader = ({
  onBack,
  onClose,
  ...topBarProps
}: TopBarProps & {
  onBack?: () => void;
  onClose?: () => void;
}) => (
  <TopBar
    {...topBarProps}
    size='m'
    className={styles.header}
    buttonsProps={{
      ...topBarProps.buttonsProps,
      ...(onBack && {
        start: {
          'data-testid': 'side-page:back',
          onClick: onBack,
          icon: <ArrowLeftSVG />,
        },
      }),
      ...(onClose && {
        end: {
          'data-testid': 'side-page:close',
          onClick: onClose,
          icon: <CrossSVG />,
        },
      }),
    }}
  />
);

SidePageHeader.displayName = 'SidePage.Header';

/**
 * @param props Свойства.
 * @return Элемент.
 */
export const SidePageBody = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

SidePageBody.displayName = 'SidePage.Body';

/**
 * @param props Свойства.
 * @return Элемент.
 */
export const SidePageFooter = (props: BottomBarProps) => (
  <BottomBar {...props} size='m' className={styles.footer} />
);

SidePageFooter.displayName = 'SidePage.Footer';

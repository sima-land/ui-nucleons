import React from 'react';
import { TopBar, TopBarProps } from '../top-bar';
import { BottomBar, BottomBarProps } from '../bottom-bar';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import styles from './side-page.module.scss';
import classNames from 'classnames';

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
    size='xl'
    className={styles.header}
    buttons={{
      ...topBarProps.buttons,
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
export const SidePageFooter = ({
  padded = true, // @todo по умолчанию true для обратной совместимости - убрать true в ближайшем мажоре
  ...props
}: BottomBarProps & { padded?: boolean }) => (
  <BottomBar {...props} size='l' className={classNames(styles.footer, padded && styles.padded)} />
);

SidePageFooter.displayName = 'SidePage.Footer';

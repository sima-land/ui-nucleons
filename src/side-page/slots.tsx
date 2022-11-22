import React, { ReactNode } from 'react';
import { TopBar, TopBarProps } from '../top-bar';
import { BottomBar, BottomBarProps } from '../bottom-bar';
import { navigationButtons } from '../top-bar/utils';
import classNames from 'classnames';
import styles from './side-page.module.scss';

/**
 * Шапка SidePage.
 * @param props Свойства.
 * @return Элемент.
 */
export function SidePageHeader({
  onBack,
  onClose,
  buttons,
  ...topBarProps
}: TopBarProps & {
  onBack?: () => void;
  onClose?: () => void;
}) {
  return (
    <TopBar
      {...topBarProps}
      size='unset'
      className={styles.header}
      buttons={navigationButtons({ buttons, onBack, onClose })}
    />
  );
}

/**
 * Основной контент SidePage.
 * @param props Свойства.
 * @return Элемент.
 */
export function SidePageBody({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

/**
 * Подвал SidePage.
 * @param props Свойства.
 * @return Элемент.
 */
export function SidePageFooter({ ...props }: BottomBarProps) {
  return <BottomBar {...props} size='unset' className={classNames(styles.footer)} />;
}

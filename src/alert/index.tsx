import React, { useImperativeHandle, useRef } from 'react';
import { WithPageScrollLock, usePageScrollLock } from '../_internal/page-scroll-lock';
import { ModalOverlay } from '../modal-overlay';
import { Card, CardContent } from '../card';
import { TopBar } from '../top-bar';
import { BottomBar } from '../bottom-bar';
import { defineSlots } from '../helpers/define-slots';
import { CardContentProps } from '../card/slots';
import { useExactClick } from '../modal-overlay/utils';
import classnames from 'classnames/bind';
import styles from './alert.module.scss';

export interface AlertProps extends WithPageScrollLock {
  /** Основное содержимое. */
  children?: React.ReactNode;

  /** Будет вызвана при закрытии окна нажатием на затемнение. */
  onClose?: VoidFunction;
}

const cx = classnames.bind(styles);

/**
 * Компонент модального диалога.
 * @param props Свойства.
 * @return Элемент.
 */
export function Alert({
  children,
  withScrollDisable = false,
  scrollDisableOptions,
  onClose,
}: AlertProps) {
  const scrollableRef = useRef<HTMLDivElement>(null);

  usePageScrollLock(scrollableRef, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

  const { topBar, body, bottomBar } = defineSlots(children, {
    topBar: TopBar,
    body: AlertBody,
    bottomBar: BottomBar,
  });

  const overlayClickBind = useExactClick(onClose);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    body?.props.scrollableRef,
    () => scrollableRef.current,
  );

  return (
    <ModalOverlay className={styles.overlay} {...overlayClickBind}>
      <Card shadow='z4' rounds='m' className={cx('alert')} data-testid='alert'>
        {topBar && <TopBar {...topBar.props} size='s' />}
        {body && (
          <CardContent {...body.props} scrollableRef={scrollableRef}>
            {body}
          </CardContent>
        )}
        {bottomBar && <BottomBar {...bottomBar.props} size='s' />}
      </Card>
    </ModalOverlay>
  );
}

/**
 * Основной контент Alert.
 * @param props Свойства.
 * @return Элемент.
 */
export function AlertBody({ children }: CardContentProps) {
  return <>{children}</>;
}

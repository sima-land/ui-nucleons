import { ReactNode, useContext, useRef } from 'react';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import { ViewportContext } from '../context/viewport';
import { ModalContext } from './utils';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

/**
 * Основной контент окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalBody({ children }: { children?: ReactNode }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const { withScrollDisable, scrollDisableOptions } = useContext(ModalContext);

  usePageScrollLock(viewportRef, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

  return (
    <ViewportContext.Provider value={viewportRef}>
      <CustomScrollbar
        viewportRef={viewportRef}
        className={cx('body')}
        overflow={{ x: 'hidden', y: 'scroll' }}
      >
        {children}
      </CustomScrollbar>
    </ViewportContext.Provider>
  );
}

/**
 * Контент который будет выводится поверх окна с абсолютным позиционированием.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalOverlap({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

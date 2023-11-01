import { ReactNode, useImperativeHandle, useRef } from 'react';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import { ViewportContext } from '../context/viewport';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import { ModalBodyProps } from './types';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

/**
 * Основной контент окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalBody({
  children,
  rootRef,
  viewportRef,
  className,
  withScrollDisable,
  scrollDisableOptions,
  ...restProps
}: ModalBodyProps) {
  const viewportInnerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(viewportRef, () => viewportInnerRef.current as HTMLDivElement);

  // ВАЖНО: не смотря на то что есть возможность задать viewportRef оставляем хук здесь
  // потому что через портал с рефами работать не получится а useState не так удобен
  usePageScrollLock(viewportInnerRef, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

  return (
    <ViewportContext.Provider value={viewportInnerRef}>
      <CustomScrollbar
        {...restProps} // @todo решить что делать с viewportProps
        rootRef={rootRef}
        viewportRef={viewportInnerRef}
        className={cx('body', className)}
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
  return <div className={cx('overlap')}>{children}</div>;
}

/**
 * Заглушка для футера по дизайн-гайдам.
 * @return Элемент.
 */
export function ModalBottomGap() {
  return <div className={cx('bottom-gap')} />;
}

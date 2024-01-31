import { useImperativeHandle, useRef } from 'react';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import { AlertBodyProps } from './types';
import classNames from 'classnames/bind';
import styles from './alert-body.m.scss';

const cx = classNames.bind(styles);

/**
 * Основной контент Alert.
 * @param props Свойства.
 * @return Элемент.
 */
export function AlertBody({
  children,
  className,
  rootRef,
  withScrollDisable = false,
  scrollDisableOptions,
  ...restProps
}: AlertBodyProps) {
  const ref = useRef<HTMLDivElement>(null);

  usePageScrollLock(ref, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

  useImperativeHandle(rootRef, () => ref.current as HTMLDivElement);

  return (
    <div {...restProps} ref={ref} className={cx('body', className)}>
      {children}
    </div>
  );
}

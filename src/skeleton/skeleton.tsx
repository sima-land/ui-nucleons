import type { SkeletonProps } from './types';
import classNames from 'classnames';
import styles from './skeleton.m.scss';

/**
 * Скелетон - блок с анимацией загрузки.
 * @param props Свойства.
 * @return Элемент.
 */
export function Skeleton({
  theme = 'light',
  shining = true,
  children,
  className,
  rootRef,
  ...restProps
}: SkeletonProps) {
  const rootClassName = classNames(
    styles.skeleton,
    theme === 'light' && styles['theme-light'],
    theme === 'dark' && styles['theme-dark'],
    shining && styles.shining,
    className,
  );

  return (
    <div ref={rootRef} {...restProps} className={rootClassName}>
      {children}
    </div>
  );
}

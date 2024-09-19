import { SidePageBodyProps } from './types';
import { useMemo, useRef } from 'react';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import { mergeRefs } from '../helpers';
import classNames from 'classnames';
import styles from './side-page-body.m.scss';

/**
 * Основной контент SidePage.
 * @param props Свойства.
 * @return Элемент.
 */
export function SidePageBody({
  rootRef,
  children,
  className,
  withScrollDisable,
  scrollDisableOptions,
  'data-testid': testId,
  ...restProps
}: SidePageBodyProps) {
  const innerRootRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMemo(() => mergeRefs([rootRef, innerRootRef]), [rootRef, innerRootRef]);

  usePageScrollLock(innerRootRef, {
    lockEnabled: withScrollDisable,
    ...scrollDisableOptions,
  });

  return (
    <div
      ref={mergedRef}
      className={classNames(styles.body, className)}
      {...restProps}
      data-testid={testId}
    >
      {children}
    </div>
  );
}

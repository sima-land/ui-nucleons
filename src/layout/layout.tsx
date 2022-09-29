import React, { forwardRef } from 'react';
import { LayoutProps } from './types';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';

const cx = classNames.bind(styles);

export const Layout = forwardRef<HTMLElement, LayoutProps>(function Layout(
  { className, disabledOn = [], ...restProps },
  ref,
) {
  return (
    <div
      {...(restProps as any)}
      ref={ref}
      className={cx(
        'layout',
        className,
        disabledOn.map(key => `disabled-${key}`),
      )}
    />
  );
});

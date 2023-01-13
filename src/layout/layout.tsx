import React, { Ref } from 'react';
import { LayoutProps } from './types';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';

const cx = classNames.bind(styles);

/**
 * Контейнер, формирующий отступы по горизонтали в соответствии с дизайн-гайдами.
 * @param props Свойства.
 * @return Элемент.
 */
export function Layout({
  children,
  className,
  disabledOn = [],
  rootRef,
  ...rest
}: Omit<LayoutProps, 'element'> & { rootRef?: Ref<HTMLDivElement> }) {
  const rootClassName = cx(
    'layout',
    className,
    disabledOn.map(key => `disabled-${key}`),
  );

  return (
    <div {...rest} ref={rootRef} className={rootClassName}>
      {children}
    </div>
  );
}

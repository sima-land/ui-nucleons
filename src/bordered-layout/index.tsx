import React from 'react';
import classnames from 'classnames/bind';
import { MobileLayout } from '../layout';
import { InnerBorder } from '../styling/borders';
import styles from './bordered-layout.module.scss';

export interface BorderedLayoutProps {
  /** Флаг добавления рамки сверху. */
  top?: boolean;

  /** Флаг добавления рамки снизу. */
  bottom?: boolean;

  /** Содержимое. */
  children?: React.ReactNode;
}

const cx = classnames.bind(styles);

/**
 * Выводит содержимое по мобильному layout'у с вертикальными полосками.
 * @deprecated Можно использовать комбинацию Layout, пример есть в Storybook.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const BorderedLayout = ({ top, bottom, children }: BorderedLayoutProps) => {
  let borderClass;

  if (top && bottom) {
    borderClass = InnerBorder.y;
  } else if (top) {
    borderClass = InnerBorder.top;
  } else if (bottom) {
    borderClass = InnerBorder.bottom;
  }

  return (
    <MobileLayout disabledOn={['mxs', 'ms']}>
      <div className={cx('inner', borderClass)}>{children}</div>
    </MobileLayout>
  );
};

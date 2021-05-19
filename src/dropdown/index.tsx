import React, { forwardRef } from 'react';
import { BoxShadow } from '../styling/shadows';
import { MediumRounds } from '../styling/shapes';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import classnames from 'classnames/bind';
import styles from './dropdown.scss';

export type Props = React.HTMLAttributes<HTMLDivElement>;

const cx = classnames.bind(styles);

/**
 * Компонент выпадающего блока с контентом, например списком.
 */
export const Dropdown = forwardRef<HTMLDivElement | null, Props>(function Dropdown ({
  className,
  children,
  ...restProps
}, ref) {
  return (
    <div ref={ref} className={cx('root', className, BoxShadow.z4, MediumRounds.all)} {...restProps}>
      <CustomScrollbar className={cx('inner')} overflow={{ x: 'h', y: 's' }}>
        {children}
      </CustomScrollbar>
    </div>
  );
});

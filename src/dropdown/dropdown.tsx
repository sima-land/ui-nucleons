import { forwardRef } from 'react';
import type { DropdownProps } from './types';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import classNames from 'classnames/bind';
import styles from './dropdown.module.scss';

const cx = classNames.bind(styles);

/**
 * Компонент выпадающего блока с контентом, например списком.
 */
export const Dropdown = forwardRef<HTMLDivElement | null, DropdownProps>(function Dropdown(
  { className, children, 'data-testid': testId = 'dropdown', viewportRef, ...restProps },
  ref,
) {
  return (
    <div ref={ref} className={cx('root', className)} {...restProps} data-testid={testId}>
      <CustomScrollbar
        className={cx('inner')}
        overflow={{ x: 'hidden', y: 'scroll' }}
        viewportRef={viewportRef}
      >
        {children}
      </CustomScrollbar>
    </div>
  );
});

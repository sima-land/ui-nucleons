import { HTMLAttributes, forwardRef } from 'react';
import { BoxShadow } from '../styling/shadows';
import classnames from 'classnames/bind';
import styles from './hint.module.scss';

type Direction = 'top' | 'left' | 'bottom' | 'right';

export interface HintProps extends HTMLAttributes<HTMLDivElement> {
  /** С какой стороны появляется хинт. */
  direction: Direction;
}

const cx = classnames.bind(styles);

/**
 * @deprecated Теперь нужно использовать `hint`.
 */
export const Hint = forwardRef<HTMLDivElement | null, HintProps>(
  ({ children, className, direction, ...restProps }, ref) => (
    <div {...restProps} ref={ref} className={cx('root', className, direction)} data-testid='hint'>
      <div className={cx('body', BoxShadow.z4)}>{children}</div>
    </div>
  ),
);

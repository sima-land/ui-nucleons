import React, { forwardRef } from 'react';
import { BoxShadow } from '../styling/shadows';
import { MediumRounds } from '../styling/shapes';
import { CustomScrollbar, CustomScrollbarProps } from '../_internal/custom-scrollbar';
import classnames from 'classnames/bind';
import styles from './dropdown.module.scss';

interface DropdownStyle extends React.CSSProperties {
  '--dropdown-max-height'?: string;
}

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: DropdownStyle;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Свойства компонента CustomScrollbar. */
  customScrollbarProps?: Omit<CustomScrollbarProps, 'className' | 'overflow' | 'children'>;
}

const cx = classnames.bind(styles);

/**
 * Компонент выпадающего блока с контентом, например списком.
 */
export const Dropdown = forwardRef<HTMLDivElement | null, DropdownProps>(function Dropdown(
  { className, children, 'data-testid': testId = 'dropdown', customScrollbarProps, ...restProps },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cx('root', className, BoxShadow.z4, MediumRounds.all)}
      {...restProps}
      data-testid={testId}
    >
      <CustomScrollbar
        {...customScrollbarProps}
        className={cx('inner')}
        overflow={{ x: 'h', y: 's' }}
      >
        {children}
      </CustomScrollbar>
    </div>
  );
});

import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import styles from './toggle.module.scss';
import { CheckboxProps } from '../_internal/checkbox';

export type ToggleProps = CheckboxProps;

const cx = classnames.bind(styles);

/**
 * Компонент стилизованного переключателя (input[type=checkbox]).
 */
export const Toggle = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      style,
      'data-testid': testId = 'toggle',

      // input props
      ...restProps
    },
    ref,
  ) => (
    <label className={cx('root', className)} style={style}>
      <input
        {...restProps}
        className={cx('input')}
        ref={ref}
        type='checkbox'
        data-testid={testId}
      />
      <span className={cx('switch')} />
    </label>
  ),
);

Toggle.displayName = 'Toggle';

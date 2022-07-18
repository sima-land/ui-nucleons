import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './checkbox.module.scss';
import { CheckboxProps } from '../_internal/checkbox';

export type { CheckboxProps };

const cx = classnames.bind(classes);

/**
 * Компонент стилизованного переключателя (input[type=checkbox]).
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      style,
      'data-testid': testId = 'checkbox',

      // input props
      ...restProps
    },
    ref,
  ) => (
    <span className={cx('root', className)} style={style}>
      <input
        {...restProps}
        data-testid={testId}
        ref={ref}
        type='checkbox'
        className={cx('input')}
      />

      <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
        {/* square */}
        <rect x='0.5' y='0.5' width='15' height='15' rx='1.5' className={cx('square')} />

        {/* check mark */}
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.8 5.21967L6.4 9.18934L5.36569 8.21967C5.05327 7.92678 4.54673 7.92678 4.23431 8.21967C3.9219 8.51256 3.9219 8.98744 4.23431 9.28033L5.83431 10.7803C6.14673 11.0732 6.65327 11.0732 6.96569 10.7803L11.7657 6.28033C12.0781 5.98744 12.0781 5.51256 11.7657 5.21967C11.4533 4.92678 11.1124 4.92678 10.8 5.21967Z'
          fill='white'
          className={cx('mark')}
        />
      </svg>
    </span>
  ),
);

Checkbox.displayName = 'Checkbox';

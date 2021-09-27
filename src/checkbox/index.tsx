import React, { forwardRef, useState, useEffect } from 'react';
import CheckedSVG from './svg/checked.svg';
import UncheckedSVG from './svg/unchecked.svg';
import DisabledCheckedSVG from './svg/disabled-checked.svg';
import DisabledUncheckedSVG from './svg/disabled-unchecked.svg';
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
      checked,
      disabled,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const [isChecked, toggleCheck] = useState<boolean>(Boolean(checked));

    useEffect(() => {
      toggleCheck(Boolean(checked));
    }, [checked]);

    return (
      <span className={cx('root', className)} style={style}>
        <input
          {...restProps}
          data-testid={testId}
          ref={ref}
          type='checkbox'
          className={cx('input')}
          onChange={event => {
            toggleCheck(event.target.checked);
            onChange?.(event);
          }}
          checked={isChecked}
          disabled={disabled}
        />
        {!isChecked && !disabled && <UncheckedSVG />}
        {isChecked && !disabled && <CheckedSVG />}
        {!isChecked && disabled && <DisabledUncheckedSVG />}
        {isChecked && disabled && <DisabledCheckedSVG />}
      </span>
    );
  },
);

Checkbox.displayName = 'Checkbox';

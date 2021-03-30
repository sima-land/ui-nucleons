import React, { useState, forwardRef, useEffect } from 'react';
import CheckboxSVG from './checkbox.svg';
import classnames from 'classnames/bind';
import classes from './checkbox.scss';

export type Props = React.InputHTMLAttributes<HTMLInputElement>;

const cx = classnames.bind(classes);

/**
 * Компонент галочки.
 * @param props Свойства.
 */
export const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox ({
  checked = false,
  disabled,
  onChange,
  className,
  ...restProps
}, ref) {
  const [isChecked, toggleCheck] = useState(checked);

  useEffect(() => toggleCheck(checked), [checked]);

  return (
    <span className={cx('checkbox-wrapper', className)}>
      <input
        {...restProps}
        ref={ref}
        type='checkbox'
        className={cx('checkbox-input')}
        onChange={event => {
          toggleCheck(event.target.checked);
          onChange?.(event);
        }}
        checked={isChecked}
        disabled={disabled}
      />
      <CheckboxSVG
        className={cx([
          'checkbox-icon',
          isChecked && 'checked',
          disabled && 'disabled',
        ])}
      />
    </span>
  );
});

Checkbox.displayName = 'Checkbox';

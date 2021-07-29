import React, { useState, forwardRef, useEffect } from 'react';
import CheckedSVG from './svg/checked.svg';
import UncheckedSVG from './svg/unchecked.svg';
import DisabledCheckedSVG from './svg/disabled-checked.svg';
import DisabledUncheckedSVG from './svg/disabled-unchecked.svg';
import classnames from 'classnames/bind';
import classes from './checkbox.module.scss';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(classes);

/**
 * Компонент галочки. Поддерживает все свойства тега input.
 * @param props Свойства.
 */
export const Checkbox = forwardRef<HTMLInputElement | null, CheckboxProps>(function Checkbox ({
  defaultChecked,
  checked = defaultChecked,
  disabled,
  onChange,
  className,
  'data-testid': testId = 'checkbox',
  ...restProps
}, ref) {
  const [isChecked, toggleCheck] = useState<boolean>(Boolean(checked));

  useEffect(() => {
    toggleCheck(Boolean(checked));
  }, [checked]);

  return (
    <span className={cx('root', className)}>
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
      {!isChecked && !disabled && (
        <UncheckedSVG />
      )}
      {isChecked && !disabled && (
        <CheckedSVG />
      )}
      {!isChecked && disabled && (
        <DisabledUncheckedSVG />
      )}
      {isChecked && disabled && (
        <DisabledCheckedSVG />
      )}
    </span>
  );
});

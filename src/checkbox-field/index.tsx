import React, { forwardRef } from 'react';
import { Checkbox } from '../checkbox';
import classnames from 'classnames/bind';
import classes from './checkbox-field.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

  /** Содержимое ярлыка. */
  label?: string

  /** Содержимое ошибки. */
  error?: string

  /** Содержимое описания. */
  info?: string
}

const cx = classnames.bind(classes);

export const CheckboxField = forwardRef<HTMLInputElement | null, Props>(function CheckboxField ({
  label,
  error,
  info,
  ...restProps
}, ref) {
  return (
    <span className={cx('container')}>
      <label className={cx('row')}>
        <span className={cx('checkbox-column')}>
          <Checkbox
            {...restProps}
            ref={ref}
            type='checkbox'
          />
        </span>
        <span className={cx('label-column')}>
          {label && (
            <span
              className={cx('content-wrapper', 'label')}
              children={label}
            />
          )}
        </span>
      </label>

      {error && (
        <span
          className={cx('content-wrapper', 'error')}
          children={error}
        />
      )}

      {info && (
        <span
          className={cx('content-wrapper', 'info')}
          children={info}
        />
      )}
    </span>
  );
});

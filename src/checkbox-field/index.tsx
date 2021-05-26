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

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(classes);

export const CheckboxField = forwardRef<HTMLInputElement | null, Props>(function CheckboxField ({
  label,
  error,
  info,
  'data-testid': testId = 'checkbox-field',
  ...restProps
}, ref) {
  return (
    <span className={cx('container')} data-testid={testId}>
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
              data-testid='checkbox-field:label'
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

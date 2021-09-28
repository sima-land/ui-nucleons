import React, { forwardRef } from 'react';
import { Checkbox } from '../checkbox';
import { Toggle } from '../toggle';
import classnames from 'classnames/bind';
import classes from './checkbox-field.module.scss';

export interface CheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Содержимое ярлыка. */
  label: string;

  /** Содержимое описания. */
  info?: string;

  /** Нужно ли показывать наличие ошибки. */
  failed?: boolean;

  /** Нужно ли выводить текст для "checkbox" мелким. */
  smallText?: boolean;

  /** Отображаемое поле. */
  fieldView?: 'checkbox' | 'toggle';

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(classes);

export const CheckboxField = forwardRef<HTMLInputElement | null, CheckboxFieldProps>(
  function CheckboxField(
    {
      smallText,
      fieldView = 'checkbox',
      label,
      info,
      failed,
      'data-testid': testId = 'checkbox-field',
      style,
      className,

      // input props
      id,
      disabled,
      ...restProps
    },
    ref,
  ) {
    const inputProps = { id, disabled, ...restProps };

    return (
      <div
        className={cx(
          'root',
          `field-${fieldView}`,
          { failed, disabled, 'small-text': smallText },
          className,
        )}
        style={style}
        data-testid={testId}
      >
        <div className={cx('field-row')}>
          {fieldView === 'checkbox' && <Checkbox {...inputProps} ref={ref} />}
          {fieldView === 'toggle' && <Toggle {...inputProps} ref={ref} />}
        </div>

        <label htmlFor={id}>
          <span className={cx('label')} data-testid='checkbox-field:label'>
            {label}
          </span>
          {info && <span className={cx('info')}>{info}</span>}
        </label>
      </div>
    );
  },
);

import React, { InputHTMLAttributes } from 'react';
import { FieldProps, WithTestId } from '../types';
import classNames from 'classnames/bind';
import styles from './radio-button.module.scss';

const cx = classNames.bind(styles);

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    FieldProps,
    WithTestId {}

/**
 * Радио-кнопка.
 * @param props Свойства.
 * @return Элемент.
 */
export function RadioButton({
  style,
  className,
  'data-testid': testId = 'radio-button',
  ...restProps
}: RadioButtonProps) {
  return (
    <div style={style} className={cx('root', className)}>
      <input {...restProps} type='radio' className={cx('input')} data-testid={testId} />
      <div className={cx('circle')} />
    </div>
  );
}

import { forwardRef } from 'react';
import { CheckboxInputProps } from '../types';
import classnames from 'classnames/bind';
import styles from './toggle.module.scss';

export type ToggleProps = CheckboxInputProps;

const cx = classnames.bind(styles);

/**
 * Тогл - элемент для управления полем с двумя состояниями - включено и отключено.
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
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

import type { ToggleProps } from './types';
import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './toggle.module.scss';

const cx = classNames.bind(styles);

/**
 * Тогл - элемент для управления полем с двумя состояниями - включено и отключено.
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  {
    className,
    style,
    'data-testid': testId = 'toggle',

    // input props
    ...restProps
  },
  ref,
) {
  return (
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
  );
});

Toggle.displayName = 'Toggle';

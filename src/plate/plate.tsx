import type { PlateProps } from './types';
import { forwardRef } from 'react';
import { BoxShadow } from '../styling/shadows';
import { SmallRounds, MediumRounds } from '../styling/shapes';
import classNames from 'classnames/bind';
import styles from './plate.m.scss';

const cx = classNames.bind(styles);

/**
 * Plate это просто div с возможностью легко задавать тень и скругления.
 * И он должен оставаться компонентом, который только задает оформление обычного div.
 */
export const Plate = forwardRef<HTMLDivElement | null, PlateProps>(function Plate(
  {
    className,
    children,
    rounds = 's',
    shadow = 'z1',
    'data-testid': testId = 'plate',
    ...restProps
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cx(
        'root',
        className,
        shadow && BoxShadow[shadow],
        rounds === 's' && SmallRounds.all,
        rounds === 'm' && MediumRounds.all,
      )}
      data-testid={testId}
      children={children}
      {...restProps}
    />
  );
});

import React, { forwardRef } from 'react';
import { bgColor } from '../styling/colors';
import { BoxShadow } from '../styling/shadows';
import { SmallRounds, MediumRounds } from '../styling/shapes';
import classnames from 'classnames';

export interface PlateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Тень. */
  shadow?: keyof typeof BoxShadow;

  /** Скругление. */
  rounds?: 's' | 'm';

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

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
      className={classnames(
        bgColor('basic-white'),
        className,
        BoxShadow[shadow],
        rounds === 's' && SmallRounds.all,
        rounds === 'm' && MediumRounds.all,
      )}
      data-testid={testId}
      children={children}
      {...restProps}
    />
  );
});

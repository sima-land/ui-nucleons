import React from 'react';
import { getStars } from './utils';
import { StarType } from './types';
import classnames from 'classnames/bind';
import StarSVG from './star.svg';
import styles from './rating.module.scss';

export type StarSize = 's' | 'm';

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: StarSize

  /** Значение рейтинга. */
  value: number

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Компонент рейтинга.
 * @param props Свойства.
 * @return Элемент.
 */
export const Rating = ({
  size,
  value,
  className,
  'data-testid': testId = 'rating',
  ...restProps
}: RatingProps) => (
  <div
    {...restProps}
    className={cx('root', className)}
    data-testid={testId}
    data-rating={value} // для приемочного тестирования
  >
    {getStars(Math.min(5, value), 5).map((type, index) => (
      <Star key={index} type={type} size={size} />
    ))}
  </div>
);

/**
 * Звезда.
 * @param props Свойства.
 * @return Элемент.
 */
const Star = ({ type, size = 's' }: { type: StarType, size?: StarSize }) => (
  <div className={cx('star', `size-${size}`)}>
    {type === 'empty' && (
      <StarSVG className={cx('svg')} />
    )}

    {type === 'half' && (
      <>
        <StarSVG className={cx('svg')} />
        <StarSVG className={cx('svg', 'half')} preserveAspectRatio='xMinYMin slice' />
      </>
    )}

    {type === 'full' && (
      <StarSVG className={cx('svg', 'full')} />
    )}
  </div>
);

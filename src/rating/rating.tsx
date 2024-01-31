import type { RatingProps, StarSize, StarType } from './types';
import { getStars } from './utils';
import StarSVG from '@sima-land/ui-quarks/icons/16x16/Filled/Star';
import classNames from 'classnames/bind';
import styles from './rating.m.scss';

const cx = classNames.bind(styles);

/**
 * Звезды рейтинга.
 * @param props Свойства.
 * @return Элемент.
 */
export const Rating = ({
  size = 's',
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
const Star = ({ type, size }: { type: StarType; size: StarSize }) => (
  <div className={cx('star', `size-${size}`)}>
    {type === 'empty' && <StarSVG className={cx('svg')} />}

    {type === 'half' && (
      <>
        <StarSVG className={cx('svg')} />
        <StarSVG className={cx('svg', 'half')} preserveAspectRatio='xMinYMin slice' />
      </>
    )}

    {type === 'full' && <StarSVG className={cx('svg', 'full')} />}
  </div>
);

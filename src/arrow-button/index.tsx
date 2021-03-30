import React from 'react';
import classnames from 'classnames/bind';
import { COLORS } from '../colors';
import classes from './arrow-button.scss';
import UpSVG from './icons/24x24/arrow-up.svg';
import RightSVG from './icons/24x24/arrow-right.svg';
import DownSVG from './icons/24x24/arrow-down.svg';
import LeftSVG from './icons/24x24/arrow-left.svg';
import TopSmallSVG from './icons/16x16/arrow-up.svg';
import RightSmallSVG from './icons/16x16/arrow-right.svg';
import DownSmallSVG from './icons/16x16/arrow-down.svg';
import LeftSmallSVG from './icons/16x16/arrow-left.svg';

type Size = 's' | 'l';

type Direction = 'up' | 'right' | 'down' | 'left';

type IconSet = Readonly<Record<Direction, React.FC<React.SVGProps<SVGSVGElement>>>>;

export interface Props extends Omit<JSX.IntrinsicElements['button'], 'size'> {

  /** Размер. */
  size?: Size

  /** Направление (отвечает за иконку). */
  direction?: Direction
}

const cx = classnames.bind(classes);

const ICONS: Readonly<Record<Size, IconSet>> = {
  s: {
    up: TopSmallSVG,
    right: RightSmallSVG,
    down: DownSmallSVG,
    left: LeftSmallSVG,
  },
  l: {
    up: UpSVG,
    right: RightSVG,
    down: DownSVG,
    left: LeftSVG,
  },
};

/**
 * Компонент круглой кнопки со стрелкой.
 * @param props Свойства. Поддерживаются свойства элемента button.
 * @return Элемент.
 */
export const ArrowButton: React.FC<Props> = ({
  size = 'l',
  direction = 'right',
  className,
  ...buttonProps
}) => {
  const Icon = ICONS[size][direction];

  return (
    <button
      type='button'
      {...buttonProps}
      className={cx(
        'arrow-button',
        `size-${size}`,
        className
      )}
    >
      <Icon aria-hidden fill={COLORS.get('gray87')} />
    </button>
  );
};

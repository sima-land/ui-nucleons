import React from 'react';
import classnames from 'classnames/bind';
import classes from './arrow-button.module.scss';
import UpSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-up';
import RightSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-right';
import DownSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-down';
import LeftSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/arrow-left';
import UpSmallSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/arrow-up';
import RightSmallSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/arrow-right';
import DownSmallSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/arrow-down';
import LeftSmallSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/arrow-left';

type Size = 's' | 'l';

type Direction = 'up' | 'right' | 'down' | 'left';

type IconSet = Readonly<Record<Direction, React.FC<React.SVGProps<SVGSVGElement>>>>;

export interface Props extends Omit<JSX.IntrinsicElements['button'], 'size' | 'children'> {

  /** Размер. */
  size?: Size

  /** Направление (отвечает за иконку). */
  direction?: Direction

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(classes);

const ICONS: Readonly<Record<Size, IconSet>> = {
  s: {
    up: UpSmallSVG,
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
export const ArrowButton = ({
  size = 'l',
  direction = 'right',
  className,
  'data-testid': testId = 'arrow-button',
  ...buttonProps
}: Props) => {
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
      data-testid={testId}
    >
      <Icon aria-hidden fill='currentColor' />
    </button>
  );
};

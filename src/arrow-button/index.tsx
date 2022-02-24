import React from 'react';
import classnames from 'classnames/bind';
import classes from './arrow-button.module.scss';
import UpSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-up';
import RightSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-right';
import DownSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-down';
import LeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import UpSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/arrow-up';
import RightSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/arrow-right';
import DownSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/arrow-down';
import LeftSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/arrow-left';

export type ArrowButtonSize = 's' | 'l';

export type ArrowDirection = 'up' | 'right' | 'down' | 'left';

type IconSet = Readonly<
  Record<ArrowDirection, React.ComponentType<React.SVGAttributes<SVGSVGElement>>>
>;

export interface ArrowButtonProps
  extends Omit<JSX.IntrinsicElements['button'], 'size' | 'children'> {
  /** Размер. */
  size?: ArrowButtonSize;

  /** Направление (отвечает за иконку). */
  direction?: ArrowDirection;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(classes);

const ICONS: Readonly<Record<ArrowButtonSize, IconSet>> = {
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
}: ArrowButtonProps) => {
  const Icon = ICONS[size][direction];

  return (
    <button
      type='button'
      {...buttonProps}
      className={cx('arrow-button', `size-${size}`, className)}
      data-testid={testId}
    >
      <Icon aria-hidden fill='currentColor' />
    </button>
  );
};

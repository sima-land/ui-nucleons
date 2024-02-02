import type { ElementType, SVGAttributes } from 'react';
import type { ArrowDirection, ArrowButtonProps } from './types';
import UpSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowUp';
import RightSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowRight';
import DownSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowDown';
import LeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import UpSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowUp';
import RightSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowRight';
import DownSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowDown';
import LeftSmallSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowLeft';
import classNames from 'classnames/bind';
import styles from './arrow-button.m.scss';

const cx = classNames.bind(styles);

const ICONS = {
  s: {
    up: UpSmallSVG,
    right: RightSmallSVG,
    down: DownSmallSVG,
    left: LeftSmallSVG,
  } satisfies Record<ArrowDirection, ElementType<SVGAttributes<SVGSVGElement>>>,
  l: {
    up: UpSVG,
    right: RightSVG,
    down: DownSVG,
    left: LeftSVG,
  } satisfies Record<ArrowDirection, ElementType<SVGAttributes<SVGSVGElement>>>,
} as const;

/**
 * Кнопка-стрелка - круглая кнопка со стрелкой.
 * @param props Свойства. Поддерживаются свойства элемента button.
 * @return Элемент.
 */
export function ArrowButton({
  size = 'l',
  direction = 'right',
  className,
  'data-testid': testId = 'arrow-button',
  ...buttonProps
}: ArrowButtonProps) {
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
}

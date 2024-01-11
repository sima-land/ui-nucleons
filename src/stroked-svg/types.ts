import type { ElementType, HTMLAttributes, SVGAttributes } from 'react';
import type { WithTestId } from '../types';

export interface StrokedSVGProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    WithTestId {
  /** Компонент, выводящий svg-элемент. */
  component: ElementType<SVGAttributes<SVGSVGElement>>;

  /** Цвет внешней обводки. */
  stroke?: string;

  /** Ширина внешней обводки. */
  strokeWidth?: number;

  /** Цвет заливки. */
  fill?: string;
}

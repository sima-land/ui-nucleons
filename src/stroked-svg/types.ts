import type { ElementType, HTMLAttributes, SVGAttributes } from 'react';

export interface StrokedSVGProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Компонент, выводящий svg-элемент. */
  component: ElementType<SVGAttributes<SVGSVGElement>>;

  /** Цвет внешней обводки. */
  stroke?: string;

  /** Ширина внешней обводки. */
  strokeWidth?: number;

  /** Цвет заливки. */
  fill?: string;
}

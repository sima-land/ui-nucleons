import { forwardRef } from 'react';
import { COLORS } from '../colors';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface StrokedSVGProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Компонент, выводящий svg-элемент. */
  component: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;

  /** Цвет внешней обводки. */
  stroke?: string;

  /** Ширина внешней обводки. */
  strokeWidth?: number;

  /** Цвет заливки. */
  fill?: string;
}

/**
 * Выводит иконку с внешней обводкой.
 * @param props Свойства.
 * @return Элемент.
 */
export const StrokedSVG = forwardRef<HTMLDivElement, StrokedSVGProps>(
  (
    {
      component: Tag,
      fill,
      stroke = COLORS.get('basic-gray4'),
      strokeWidth = 1,
      className,
      ...restProps
    },
    ref,
  ) => (
    <div ref={ref} className={classNames(styles.root, className)} {...restProps}>
      <Tag stroke={stroke} strokeWidth={`${strokeWidth * 2}px`} className={styles.stroke} />
      <Tag fill={fill} className={styles.svg} />
    </div>
  ),
);

StrokedSVG.displayName = 'StrokedSVG';

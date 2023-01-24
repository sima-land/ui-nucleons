import React, { forwardRef } from 'react';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/cross';
import classnames from 'classnames/bind';
import styles from './tooltip.module.scss';

export interface TooltipProps {
  /** Содержимое. */
  children?: React.ReactNode;

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Сработает при клике за пределами или на крестик. */
  onClose?: React.MouseEventHandler<SVGSVGElement>;

  /** Стили. */
  style?: React.CSSProperties;
}

const cx = classnames.bind(styles);

/**
 * Компонент подсказки.
 * @deprecated Можно использовать `popup`.
 * @param props Свойства.
 * @return Элемент.
 */
export const Tooltip = forwardRef<HTMLDivElement | null, TooltipProps>(
  ({ children, onClose, style, className }, ref) => (
    <div ref={ref} style={style} className={cx('root', className)} data-testid='tooltip'>
      <CrossSVG className={cx('cross')} onClick={onClose} data-testid='tooltip:cross' />
      <div className={cx('content')}>{children}</div>
    </div>
  ),
);

import React from 'react';
import { MobileLayout } from '../layout';
import classnames from 'classnames/bind';
import styles from './touch-slider.module.scss';

export interface TouchSliderProps {
  /** Прокручиваемое содержимое. */
  children?: React.ReactNode;
}

const cx = classnames.bind(styles);

/**
 * Компонент блока, прокручиваемого по горизонтали. Реализует отступы MobileLayout.
 * @param props Свойства.
 * @return Элемент.
 */
export const TouchSlider: React.FC<TouchSliderProps> = ({ children }) => (
  <MobileLayout>
    <div className={cx('outer', 'invisible-scroll')}>
      <div className={cx('inner')}>{children}</div>
    </div>
  </MobileLayout>
);

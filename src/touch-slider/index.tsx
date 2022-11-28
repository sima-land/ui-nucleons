import React from 'react';
import { MobileLayout } from '../layout';
import { BSL_IGNORE_ATTR } from '../_internal/page-scroll-lock';
import styles from './touch-slider.module.scss';

export interface TouchSliderProps {
  /** Прокручиваемое содержимое. */
  children?: React.ReactNode;
}

/**
 * Компонент блока, прокручиваемого по горизонтали. Реализует отступы MobileLayout.
 * Предназначен для использования на странице без дополнительных отступов по горизонтали.
 * @deprecated Следует использовать Carousel. Отказались от "волшебной обрезки" прокручиваемой области (экспериментально).
 * @param props Свойства.
 * @return Элемент.
 */
export const TouchSlider: React.FC<TouchSliderProps> = ({ children }) => (
  <MobileLayout>
    <div className={styles.outer} {...{ [BSL_IGNORE_ATTR]: true }}>
      <div className={styles.inner}>{children}</div>
    </div>
  </MobileLayout>
);

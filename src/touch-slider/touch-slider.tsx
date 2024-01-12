import { MobileLayout } from '../layout';
import { BSL_IGNORE_ATTR } from '../_internal/page-scroll-lock';
import { TouchSliderProps } from './types';
import styles from './touch-slider.module.scss';

/**
 * Блок, прокручиваемый по горизонтали. Реализует отступы MobileLayout.
 * Предназначен для использования на странице без дополнительных отступов по горизонтали.
 * @deprecated Следует использовать Carousel. Отказались от "волшебной обрезки" прокручиваемой области (экспериментально).
 * @param props Свойства.
 * @return Элемент.
 */
export function TouchSlider({ children }: TouchSliderProps) {
  return (
    <MobileLayout>
      <div className={styles.outer} {...{ [BSL_IGNORE_ATTR]: true }}>
        <div className={styles.inner}>{children}</div>
      </div>
    </MobileLayout>
  );
}

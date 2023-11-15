import type { HTMLAttributes } from 'react';

interface CallbackData {
  startValue: number;
  finishValue: number;
}

export interface RangeProps {
  /** Начальная граница. */
  min?: number;

  /** Конечная граница. */
  max?: number;

  /** Шаг. */
  step?: number;

  /** Значение начального ползунка. */
  startValue?: number;

  /** Значение конечного ползунка. */
  finishValue?: number;

  /** Сработает при изменении. */
  onChange?: (data: CallbackData) => void;

  /** Сработает при перетаскивании. */
  onSlide?: (data: CallbackData) => void;

  /** Отключен ли компонент. */
  disabled?: boolean;

  /** Свойства контейнера. */
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

import type { CSSProperties, InputHTMLAttributes, MouseEventHandler } from 'react';
import type { WithTestId } from '../types';

/** Размер Stepper (влияет на высоту и минимальную ширину). */
export type StepperSize = 's' | 'm';

/** Стили Stepper. */
export interface StepperStyle extends CSSProperties {
  /** Ширина. */
  '--stepper-width'?: string;
}

export interface StepperProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'>,
    WithTestId {
  /** Нужно ли выводить кнопку добавления. */
  canAdd?: boolean;

  /** Нужно ли выводить кнопку вычитания. */
  canSubtract?: boolean;

  /** Делает кнопку "+" отключенной. */
  plusDisabled?: boolean;

  /** Делает кнопку "-" отключенной. */
  minusDisabled?: boolean;

  /** Нужно ли предотвращать blur на поле при нажатии "+/-". */
  buttonClickBehavior?: 'prevent-input-blur';

  /** Сработает при добавлении. */
  onAdd?: MouseEventHandler;

  /** Сработает при вычитании. */
  onSubtract?: MouseEventHandler;

  /** Размер. */
  size?: StepperSize;

  /** Стили корневого элемента. */
  style?: StepperStyle;

  /** Нужно ли показывать состояние ошибки. */
  failed?: boolean;
}

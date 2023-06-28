import React, {
  useState,
  forwardRef,
  CSSProperties,
  InputHTMLAttributes,
  MouseEventHandler,
  useCallback,
  useRef,
  useImperativeHandle,
} from 'react';
import PlusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Plus';
import MinusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Minus';
import styles from './stepper.module.scss';
import classnames from 'classnames/bind';

/** Размер Stepper (влияет на высоту и минимальную ширину). */
export type StepperSize = 's' | 'm';

/** Стили Stepper. */
export interface StepperStyle extends CSSProperties {
  /** Ширина. */
  '--stepper-width'?: string;
}

export interface StepperProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
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

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Стили корневого элемента. */
  style?: StepperStyle;

  /** Нужно ли показывать состояние ошибки. */
  failed?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Stepper - поле ввода количества.
 * @param props Свойства.
 * @return Элемент.
 */
export const Stepper = forwardRef<HTMLInputElement, StepperProps>(function Stepper(
  {
    buttonClickBehavior,
    canAdd = true,
    canSubtract = true,
    className,
    disabled,
    plusDisabled = disabled,
    minusDisabled = disabled,
    readOnly,
    onAdd,
    onBlur,
    onChange,
    onFocus,
    onSubtract,
    size = 'm',
    style,
    value,
    failed,
    'data-testid': testId = 'stepper',
    ...inputProps
  },
  forwardedRef,
) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    forwardedRef,
    () => ref.current,
  );

  const noBlurOnMousedown = useCallback<MouseEventHandler>(
    event => {
      if (focused && event.target !== ref.current && buttonClickBehavior === 'prevent-input-blur') {
        event.preventDefault();
      }
    },
    [focused, buttonClickBehavior],
  );

  const rootClassName = cx('root', `size-${size}`, { disabled, focused, failed }, className);

  return (
    <div
      data-testid={testId}
      style={style}
      className={rootClassName}
      onMouseDown={noBlurOnMousedown}
    >
      <button
        tabIndex={-1} // по аналогии с <input type="number" />
        hidden={!canSubtract}
        disabled={minusDisabled ?? disabled ?? readOnly}
        className={cx('button')}
        data-testid='stepper:minus'
        aria-label='Уменьшить'
        onMouseDown={noBlurOnMousedown}
        onClick={canSubtract && !minusDisabled && !disabled && !readOnly ? onSubtract : undefined}
      >
        <MinusSVG className={styles.svg} />
      </button>
      <input
        {...inputProps}
        ref={ref}
        readOnly={readOnly}
        data-testid='stepper:input'
        className={cx('input')}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onFocus={e => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={e => {
          setFocused(false);
          onBlur?.(e);
        }}
      />
      <button
        tabIndex={-1} // по аналогии с <input type="number" />
        hidden={!canAdd}
        disabled={plusDisabled ?? disabled ?? readOnly}
        className={cx('button')}
        data-testid='stepper:plus'
        aria-label='Увеличить'
        onMouseDown={noBlurOnMousedown}
        onClick={canAdd && !plusDisabled && !disabled && !readOnly ? onAdd : undefined}
      >
        <PlusSVG className={styles.svg} />
      </button>
    </div>
  );
});

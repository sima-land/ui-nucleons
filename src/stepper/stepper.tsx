import type { StepperProps } from './types';
import {
  useState,
  forwardRef,
  MouseEventHandler,
  useCallback,
  useRef,
  useImperativeHandle,
} from 'react';
import PlusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Plus';
import MinusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Minus';
import classNames from 'classnames/bind';
import styles from './stepper.m.scss';

const cx = classNames.bind(styles);

/**
 * Степпер - поле ввода количества.
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

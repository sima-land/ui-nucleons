import React, { useState, forwardRef } from 'react';
import PlusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/plus';
import MinusSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/minus';
import styles from './stepper.module.scss';
import classnames from 'classnames/bind';

type Size = 's' | 'm';

interface StepperCSS extends React.CSSProperties {
  '--stepper-width'?: string;
}

export interface StepperProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  /** Нужно ли выводить кнопку добавления. */
  canAdd?: boolean;

  /** Нужно ли выводить кнопку вычитания. */
  canSubtract?: boolean;

  /** Сработает при добавлении. */
  onAdd?: React.MouseEventHandler<SVGSVGElement>;

  /** Сработает при вычитании. */
  onSubtract?: React.MouseEventHandler<SVGSVGElement>;

  /** Размер. */
  size?: Size;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Стили корневого элемента. */
  style?: StepperCSS;

  /** Нужно ли показывать состояние ошибки. */
  failed?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Компонент поля количества.
 * @param props Свойства.
 * @return Элемент.
 */
export const Stepper = forwardRef<HTMLInputElement, StepperProps>(
  (
    {
      canAdd = true,
      canSubtract = true,
      className,
      disabled,
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
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    return (
      <div
        data-testid={testId}
        style={style}
        className={cx(
          'root',
          `size-${size}`,
          { disabled, focused, readonly: readOnly, failed },
          className,
        )}
      >
        <MinusSVG
          data-testid='stepper:minus'
          className={cx('button', { hidden: !canSubtract })}
          onClick={canSubtract && !disabled && !readOnly ? onSubtract : undefined}
        />
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
        <PlusSVG
          data-testid='stepper:plus'
          className={cx('button', { hidden: !canAdd })}
          onClick={canAdd && !disabled && !readOnly ? onAdd : undefined}
        />
      </div>
    );
  },
);

import React, { useState } from 'react';
import PlusSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/plus';
import MinusSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/minus';
import styles from './stepper.scss';
import classnames from 'classnames/bind';

type Size = 's' | 'm'

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  canAdd?: boolean
  canSubtract?: boolean
  onAdd?: React.MouseEventHandler<SVGSVGElement>
  onSubtract?: React.MouseEventHandler<SVGSVGElement>
  size?: Size
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Возвращает компонент поля количества.
 * @param props Свойства.
 * @param props.canAdd Нужно ли выводить кнопку добавления.
 * @param props.canSubtract Нужно ли выводить кнопку вычитания.
 * @param props.className Класс.
 * @param props.disabled Отключено ли поле.
 * @param props.onAdd Сработает при добавлении.
 * @param props.onBlur Сработает при событии blur.
 * @param props.onChange .
 * @param props.onFocus .
 * @param props.onSubtract Сработает при вычитании.
 * @param props.size Размер.
 * @param props.style Стили.
 * @param props.value Значение.
 * @param props.'data-testid' Идентификатор для систем автоматизированного тестирования.
 * @return Элемент.
 */
export const Stepper: React.FC<Props> = ({
  canAdd = true,
  canSubtract = true,
  className,
  disabled,
  onAdd,
  onBlur,
  onChange,
  onFocus,
  onSubtract,
  size = 'm',
  style,
  value,
  'data-testid': dataTestId,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      data-testid={dataTestId}
      style={style}
      className={cx('root', `size-${size}`, { disabled, focused }, className)}
    >
      <MinusSVG
        data-testid='stepper:minus'
        className={cx('button', { hidden: !canSubtract })}
        onClick={canSubtract && !disabled ? onSubtract : undefined}
      />
      <input
        {...inputProps}
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
        onClick={canAdd && !disabled ? onAdd : undefined}
      />
    </div>
  );
};

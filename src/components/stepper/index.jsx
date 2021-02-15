import React, { useState } from 'react';
import PlusSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/plus';
import MinusSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/minus';
import styles from './stepper.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Возвращает компонент поля количества.
 * @param {Object} props Свойства.
 * @param {boolean} props.canAdd Нужно ли выводить кнопку добавления.
 * @param {boolean} props.canSubtract Нужно ли выводить кнопку вычитания.
 * @param {string} props.className Класс.
 * @param {boolean} props.disabled Отключено ли поле.
 * @param {Function} props.onAdd Сработает при добавлении.
 * @param {Function} props.onBlur Сработает при событии blur.
 * @param {Function} props.onChange .
 * @param {Function} props.onFocus .
 * @param {Function} props.onSubtract Сработает при вычитании.
 * @param {'s' | 'm'} props.size Размер.
 * @param {Object} props.style Стили.
 * @param {string | number} props.value Значение.
 * @param {string} props.'data-testid' Идентификатор для систем автоматизированного тестирования.
 * @return {ReactElement} Элемент.
 */
export const Stepper = ({
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

Stepper.propTypes = {
  canAdd: PropTypes.bool,
  canSubtract: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onAdd: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSubtract: PropTypes.func,
  size: PropTypes.oneOf(['s', 'm']),
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  'data-testid': PropTypes.string,
};

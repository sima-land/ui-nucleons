import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import styles from './toggle.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface Props {

  /** Отмечен ли переключатель. */
  checked?: InputProps['checked']

  /** CSS-классы корневого компонента. */
  className?: string

  /** Отмечен ли переключатель по умолчанию. */
  defaultChecked?: InputProps['defaultChecked']

  /** Отключен ли переключатель. */
  disabled?: InputProps['disabled']

  /** Свойства внутреннего элемента input. */
  inputProps?: InputProps

  /** Сработает при смене состояния. */
  onChange?: InputProps['onChange']

  /** Стили корневого компонента. */
  style?: React.CSSProperties

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Компонент стилизованного переключателя (input[type=checkbox]).
 * @param props Свойства.
 * @return Элемент.
 */
export const Toggle = forwardRef<HTMLInputElement, Props>(({
  checked,
  className,
  defaultChecked,
  inputProps,
  onChange,
  style,
  disabled,
  'data-testid': testId = 'price',
}, ref) => (
  <label className={cx('root', className)} style={style}>
    <input
      {...inputProps}
      disabled={disabled}
      checked={checked}
      className={cx('input')}
      defaultChecked={defaultChecked}
      onChange={onChange}
      ref={ref}
      type='checkbox'
      data-testid={testId}
    />
    <span className={cx('switch')} />
  </label>
));

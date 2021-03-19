import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import styles from './toggle.scss';

type InputProps = React.HTMLProps<HTMLInputElement>

export interface Props {
  checked?: InputProps['checked']
  className?: string
  defaultChecked?: InputProps['defaultChecked']
  inputProps?: InputProps
  onChange?: InputProps['onChange']
  style?: React.CSSProperties
  disabled?: InputProps['disabled']
}

const cx = classnames.bind(styles);

/**
 * Возвращает компонент стилизованного переключателя (input[type=checkbox]).
 * @param props Свойства.
 * @param props.checked Отмечен ли переключатель.
 * @param props.disabled Отключен ли переключатель.
 * @param props.className CSS-классы корневого компонента.
 * @param props.defaultChecked Отмечен ли переключатель по умолчанию.
 * @param props.inputProps Свойства внутреннего элемента input.
 * @param props.onChange Сработает при смене состояния.
 * @param props.style Стили корневого компонента.
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
    />
    <span className={cx('switch')} />
  </label>
));

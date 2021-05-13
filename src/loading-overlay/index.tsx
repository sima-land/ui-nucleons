import React from 'react';
import { Spinner, Props as SpinnerProps } from '../spinner';
import classnames from 'classnames/bind';
import classes from './loading-overlay.scss';

export interface Props {

  /** Пользовательский CSS-класс корневого элемента. */
  className?: string

  /** Нужно ли заполнять родительский элемент с помощью `position: absolute`. */
  fill?: boolean

  /** Свойства компонента Spinner. */
  spinnerProps?: SpinnerProps

  /** Пользовательские стили. */
  style?: React.CSSProperties
}

const cx = classnames.bind(classes);

/**
 * Компонент перекрытия для отображения состояния загрузки.
 * @param props Свойства.
 * @return Элемент.
 */
export const LoadingOverlay = ({ style, className, spinnerProps = {}, fill = true }: Props) => (
  <div
    className={cx('loading-overlay', fill && 'fill', className)}
    style={style}
  >
    <Spinner {...spinnerProps} />
  </div>
);

import React from 'react';
import { Spinner, Props as SpinnerProps } from '../spinner';
import classnames from 'classnames/bind';
import classes from './loading-overlay.scss';

export interface Props {
  style?: React.CSSProperties
  className?: string
  spinnerProps?: SpinnerProps
  fill?: boolean
}

const cx = classnames.bind(classes);

/**
 * Компонент перекрытия для отображения состояния загрузки.
 * @param props Свойства.
 * @param props.style Пользовательские стили.
 * @param props.className Пользовательский CSS-класс корневого элемента.
 * @param props.spinnerProps Свойства компонента Spinner.
 * @param props.fill Нужно ли заполнять родительский элемент с помощью `position: absolute`.
 * @return Компонент перекрытия для отображения состояния загрузки.
 */
const LoadingOverlay: React.FC<Props> = ({ style, className, spinnerProps = {}, fill = true }) => (
  <div
    className={cx('loading-overlay', fill && 'fill', className)}
    style={style}
  >
    <Spinner {...spinnerProps} />
  </div>
);

export default LoadingOverlay;

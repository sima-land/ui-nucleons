import React, { HTMLAttributes, Ref } from 'react';
import { WithTestId } from '../types';
import classnames from 'classnames/bind';
import styles from './hint-view.module.scss';

export interface HintViewProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Ref корневого элемента. */
  hintRef?: Ref<HTMLDivElement>;
}

const cx = classnames.bind(styles);

/** Длина стороны квадрата, составленного из двух стрелок (треугольников). */
export const arrowSquareSize = Math.sqrt(4 * 4 + 4 * 4);

/**
 * "Хинт" - всплывающая подсказка.
 * @param props Свойства.
 * @return Элемент.
 */
export function HintView({
  hintRef,
  className,
  children,
  'data-testid': testId = 'hint',
  ...rest
}: HintViewProps) {
  return (
    <div ref={hintRef} className={cx('root', className)} data-testid={testId} {...rest}>
      {children}
    </div>
  );
}

/**
 * Стрелка хинта.
 * @param props Свойства.
 * @return Элемент.
 */
function HintArrow({
  arrowRef,
  className,
  ...rest
}: Omit<HTMLAttributes<HTMLDivElement>, 'children'> & { arrowRef?: Ref<HTMLDivElement> }) {
  return <div ref={arrowRef} className={cx('arrow', className)} {...rest}></div>;
}

HintView.Arrow = HintArrow;

import React, { forwardRef } from 'react';
import { BoxShadow } from '../styling/shadows';
import styles from './dropdown.scss';
import classnames from 'classnames/bind';
import { MediumRounds } from '../styling/shapes';

export interface Props extends React.HTMLProps<HTMLDivElement> {
  withShadow?: boolean
}

const cx = classnames.bind(styles);

/**
 * Компонент выпадающего контента.
 * @param props.withShadow Нужна ли тень.
 * @return Элемент.
 */
export const Dropdown = forwardRef<HTMLDivElement, Props>(function Dropdown ({
  withShadow = true,
  className,
  ...restProps
}, ref) {
  return (
    <div
      {...restProps}
      ref={ref}
      className={cx(
        'root',
        'invisible-scroll',
        withShadow && BoxShadow.z4,
        MediumRounds.all,
        className
      )}
    />
  );
});

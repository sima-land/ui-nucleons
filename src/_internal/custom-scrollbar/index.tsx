import React from 'react';
import { OverlayScrollbarsComponent, OverlayScrollbarsComponentProps } from 'overlayscrollbars-react';
import classnames from 'classnames/bind';
import styles from './custom-scrollbar.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';

type Options = NonNullable<OverlayScrollbarsComponentProps['options']>;

export interface CustomScrollbarProps {

  /** Стили. */
  style?: React.CSSProperties

  /** Класс. */
  className?: string

  /** Содержимое. */
  children?: React.ReactNode

  /** Опции переполнения. */
  overflow?: Options['overflowBehavior']

  /** Необходимо поставить true если нужно использовать внутри flexbox-родителя. */
  inFlexBox?: boolean
}

const cx = classnames.bind(styles);

/**
 * Компонент блока с кастомными полосами прокрутки по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export const CustomScrollbar = ({
  style,
  className,
  children,
  overflow,
  inFlexBox = false,
}: CustomScrollbarProps) => (
  <OverlayScrollbarsComponent
    style={style}
    className={cx('custom-scrollbar', className, { 'os-host-flexbox': inFlexBox })}
    options={{ overflowBehavior: overflow }}
  >
    {children}
  </OverlayScrollbarsComponent>
);

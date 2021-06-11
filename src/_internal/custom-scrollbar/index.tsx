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

  /** Сработает при полной прокрутке. */
  onFullScroll?: () => void

  /** Запас для определения полной прокрутки. */
  fullScrollThreshold?: number
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
  onFullScroll,
  fullScrollThreshold,
}: CustomScrollbarProps) => (
  <OverlayScrollbarsComponent
    style={style}
    className={cx('custom-scrollbar', className, { 'os-host-flexbox': inFlexBox })}
    options={{
      overflowBehavior: overflow,
      callbacks: onFullScroll
        ? {
          onScrollStop: HandleFullScroll(onFullScroll, fullScrollThreshold),
        }
        : undefined,
    }}
  >
    {children}
  </OverlayScrollbarsComponent>
);

/**
 * Возвращает обработчик прокрутки, который вызовет callback при полной прокрутке.
 * @param callback Callback.
 * @param threshold Запас.
 * @return Обработчик.
 */
export const HandleFullScroll = (
  callback: () => void,
  threshold = 16
) => (event: UIEvent | undefined) => {
  const el = event?.target;

  el instanceof Element
    && el.scrollTop >= el.scrollHeight - el.clientHeight - threshold
    && callback();
};

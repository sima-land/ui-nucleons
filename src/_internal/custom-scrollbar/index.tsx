import React, { CSSProperties, ReactNode, Ref, useCallback, useMemo } from 'react';
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from 'overlayscrollbars-react';
import classnames from 'classnames/bind';
import styles from './custom-scrollbar.module.scss';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { useIdentityRef } from '../../hooks/identity';

type Options = NonNullable<OverlayScrollbarsComponentProps['options']>;

export interface CustomScrollbarProps {
  /** Стили. */
  style?: CSSProperties;

  /** Класс. */
  className?: string;

  /** Содержимое. */
  children?: ReactNode;

  /** Опции переполнения. */
  overflow?: Options['overflowBehavior'];

  /** Необходимо поставить true если нужно использовать внутри flexbox-родителя. */
  inFlexBox?: boolean;

  /** Сработает при полной прокрутке. */
  onFullScroll?: () => void;

  /** Запас для определения полной прокрутки. */
  fullScrollThreshold?: number;

  /** Реф для экземпляра компонента OverlayScrollbarsComponent. */
  osComponentRef?: Ref<OverlayScrollbarsComponent>;
}

const cx = classnames.bind(styles);

/**
 * Компонент блока с кастомными полосами прокрутки по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function CustomScrollbar({
  osComponentRef,
  style,
  className,
  children,
  overflow,
  inFlexBox = false,
  onFullScroll,
  fullScrollThreshold,
}: CustomScrollbarProps) {
  const onFullScrollRef = useIdentityRef(onFullScroll);

  // ВАЖНО: overlayscrollbars не реагирует на замену callback'а onScrollStop на undefined поэтому проверяем сами
  const handleFullScroll = useCallback(() => {
    const callback = onFullScrollRef.current;
    callback?.();
  }, [onFullScrollRef]);

  const handleScrollStop = useMemo(
    () => HandleFullScroll(handleFullScroll, fullScrollThreshold),
    [handleFullScroll],
  );

  return (
    <OverlayScrollbarsComponent
      ref={osComponentRef}
      style={style}
      className={cx('custom-scrollbar', className, { 'os-host-flexbox': inFlexBox })}
      options={{
        overflowBehavior: overflow,
        callbacks: { onScrollStop: handleScrollStop },
      }}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

/**
 * Возвращает обработчик прокрутки, который вызовет callback при полной прокрутке.
 * @param callback Callback.
 * @param threshold Запас.
 * @return Обработчик.
 */
export function HandleFullScroll(callback: () => void, threshold = 16) {
  return (event: UIEvent | undefined) => {
    const el = event?.target;

    el instanceof Element &&
      el.scrollTop >= el.scrollHeight - el.clientHeight - threshold &&
      callback();
  };
}

/**
 * Получив OverlayScrollbarsComponent вернет элемент-viewport или null.
 * @param component Экземпляр OverlayScrollbarsComponent.
 * @return Элемент или null.
 */
export function getViewport(
  component: OverlayScrollbarsComponent | undefined | null,
): HTMLElement | null {
  return component?.osInstance()?.getElements().viewport || null;
}

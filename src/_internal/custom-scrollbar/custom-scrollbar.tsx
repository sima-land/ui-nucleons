import { HTMLAttributes, RefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import {
  OverlayScrollbarsComponentProps,
  OverlayScrollbarsComponentRef,
  UseOverlayScrollbarsInitialization,
  UseOverlayScrollbarsInstance,
  useOverlayScrollbars,
} from 'overlayscrollbars-react';
import { useIsomorphicLayoutEffect } from '../../hooks';
import type { CustomScrollbarProps } from './types';
import classNames from 'classnames/bind';

// ВАЖНО: сначала стили overlayscrollbars затем местные для правильной специфичности
import 'overlayscrollbars/overlayscrollbars.css';
import styles from './custom-scrollbar.m.scss';

const cx = classNames.bind(styles);

/**
 * Блок с кастомными полосами прокрутки.
 * @param props Свойства.
 * @return Элемент.
 * @todo Переименовать в StyledScrollbars и вынести из _internal?
 */
export function CustomScrollbar({
  children,
  style,
  className,
  overflow,
  rootRef,
  viewportRef,
  viewportProps,
  ...restProps
}: CustomScrollbarProps) {
  const ref = useRef<OverlayScrollbarsComponentRef>(null);

  useImperativeHandle(rootRef, () => ref.current?.getElement() as any);

  useImperativeHandle(viewportRef, () => ref.current?.osInstance()?.elements().viewport as any);

  return (
    <OverlayScrollbarsComponent
      {...restProps}
      ref={ref}
      defer={false}
      style={style}
      className={cx('root', className)}
      viewportProps={viewportProps}
      options={{
        // костыль из-за https://github.com/KingSora/OverlayScrollbars/issues/586
        ...(overflow && { overflow }),
        scrollbars: {
          theme: cx('theme'),
        },
      }}
      events={{
        /** @inheritdoc */
        initialized(instance) {
          // ВАЖНО: в новой версии на viewport автоматически ставится tabindex
          // это ломает Select так как у него blur на корневом элементе Dropdown
          // поэтому принудительно удаляем tabindex с элемента
          // подсказали тут: https://github.com/KingSora/OverlayScrollbars/discussions/638#discussioncomment-9494642
          // @todo возможно стоит переделать Select так чтобы фокус был на viewport - тогда этот костыль будет не нужен
          instance.elements().viewport.removeAttribute('tabindex');
        },
      }}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

/**
 * Аналог OverlayScrollbarsComponent из пакета 'overlayscrollbars-react'.
 * Использует useIsomorphicLayoutEffect вместо useEffect.
 */
const OverlayScrollbarsComponent = forwardRef<
  OverlayScrollbarsComponentRef,
  Omit<OverlayScrollbarsComponentProps, 'element'> & {
    viewportProps?: HTMLAttributes<HTMLDivElement>;
  }
>((props, ref) => {
  const { options, events, defer, children, viewportProps, ...rootProps } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [initialize, getInstance] = useOverlayScrollbars({ options, events, defer });

  useImperativeHandle(
    ref,
    () => ({
      /** @inheritdoc */
      osInstance() {
        return getInstance();
      },

      /** @inheritdoc */
      getElement() {
        return rootRef.current;
      },
    }),
    [initialize, getInstance],
  );

  useOverlayScrollbarsInit(initialize, getInstance, rootRef, viewportRef);

  return (
    <div {...rootProps} ref={rootRef}>
      <div {...viewportProps} ref={viewportRef}>
        {children}
      </div>
    </div>
  );
});

/** @inheritdoc */
export function useOverlayScrollbarsInit(
  initialize: UseOverlayScrollbarsInitialization,
  getInstance: UseOverlayScrollbarsInstance,
  rootRef: RefObject<HTMLDivElement>,
  viewportRef: RefObject<HTMLDivElement>,
) {
  useIsomorphicLayoutEffect(() => {
    const { current: root } = rootRef;
    const { current: viewport } = viewportRef;

    if (root && viewport) {
      initialize({
        target: root,
        elements: {
          viewport,
          content: viewport,
        },
      });
    }

    return () => {
      getInstance()?.destroy();
    };
  }, [initialize, getInstance]);
}

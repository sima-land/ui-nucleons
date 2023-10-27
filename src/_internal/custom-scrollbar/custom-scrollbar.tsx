import { forwardRef, useImperativeHandle, useRef } from 'react';
import {
  OverlayScrollbarsComponentProps,
  OverlayScrollbarsComponentRef,
  useOverlayScrollbars,
} from 'overlayscrollbars-react';
import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import type { CustomScrollbarProps } from './types';
import classNames from 'classnames/bind';

// ВАЖНО: сначала стили overlayscrollbars затем местные для правильной специфичности
import 'overlayscrollbars/overlayscrollbars.css';
import styles from './custom-scrollbar.module.scss';

const cx = classNames.bind(styles);

/**
 * Компонент блока с кастомными полосами прокрутки по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function CustomScrollbar({
  style,
  className,
  children,
  overflow,
  rootRef,
  viewportRef,
}: CustomScrollbarProps) {
  const ref = useRef<OverlayScrollbarsComponentRef>(null);

  useImperativeHandle(rootRef, () => ref.current?.getElement() as any);

  useImperativeHandle(viewportRef, () => ref.current?.osInstance()?.elements().viewport as any);

  return (
    <OverlayScrollbarsComponent
      ref={ref}
      defer={false}
      style={style}
      className={cx('root', className)}
      options={{
        overflow,
        scrollbars: {
          theme: cx('theme'),
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
export const OverlayScrollbarsComponent = forwardRef<
  OverlayScrollbarsComponentRef,
  OverlayScrollbarsComponentProps
>((props, ref) => {
  const { options, events, defer, children, ...other } = props;

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

  return (
    <div {...other} data-overlayscrollbars-initialize='' ref={rootRef}>
      <div data-overlayscrollbars-contents='' ref={viewportRef}>
        {children}
      </div>
    </div>
  );
});

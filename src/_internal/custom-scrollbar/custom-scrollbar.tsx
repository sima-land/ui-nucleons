import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { CustomScrollbarProps } from './types';
import {
  OverlayScrollbarsComponentProps,
  OverlayScrollbarsComponentRef,
  useOverlayScrollbars,
} from 'overlayscrollbars-react';
import { useIsomorphicLayoutEffect } from '@sima-land/ui-nucleons/hooks';
import classNames from 'classnames/bind';

// ВАЖНО: сначала overlayscrollbars.css, затем custom-scrollbar.module.scss для правильной специфичности
// https://github.com/KingSora/OverlayScrollbars/discussions/580#discussioncomment-7366420
import 'overlayscrollbars/overlayscrollbars.css';
import styles from './custom-scrollbar.module.scss';

const cx = classNames.bind(styles);

/**
 * Компонент блока с кастомными полосами прокрутки по гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function CustomScrollbar({
  className,
  style,
  overflow,
  children,
  rootRef,
  viewportRef,
}: CustomScrollbarProps) {
  const ref = useRef<OverlayScrollbarsComponentRef<'div'>>(null);

  useImperativeHandle(
    rootRef,
    () => (ref.current?.osInstance()?.elements().target || null) as HTMLElement,
  );

  useImperativeHandle(
    viewportRef,
    () => (ref.current?.osInstance()?.elements().viewport || null) as HTMLElement,
  );

  return (
    <OverlayScrollbarsComponent
      ref={ref}
      defer={false}
      element='div'
      style={style}
      className={cx('root', className)}
      options={{
        overflow,
        scrollbars: {
          theme: cx('theme'),
          autoHide: 'never',
          clickScroll: true,
        },
      }}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

/**
 * Это аналог OverlayScrollbarsComponent который использует useIsomorphicLayoutEffect.
 * Оригинал использует useEffect, который нам не подходит из-за блокировки прокрутки.
 * Чтобы при переключении окон не мелькала полоса прокрутки необходим useLayoutEffect.
 */
const OverlayScrollbarsComponent = forwardRef<
  OverlayScrollbarsComponentRef<'div'>,
  OverlayScrollbarsComponentProps<'div'>
>((props, ref) => {
  const { options, events, defer, children, ...other } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [initialize, getInstance] = useOverlayScrollbars({ options, events, defer });

  useImperativeHandle(
    ref,
    () => ({
      getElement: () => rootRef.current,
      osInstance: getInstance,
    }),
    [initialize, getInstance],
  );

  useIsomorphicLayoutEffect(() => {
    const { current: root } = rootRef;
    const { current: inner } = innerRef;

    if (root && inner) {
      initialize({
        target: root,
        elements: {
          viewport: inner,
          content: inner,
        },
      });
    }

    return () => {
      getInstance()?.destroy();
    };
  }, [initialize, getInstance]);

  return (
    <div data-overlayscrollbars-initialize='' {...other} ref={rootRef}>
      <div data-overlayscrollbars-contents='' ref={innerRef}>
        {children}
      </div>
    </div>
  );
});

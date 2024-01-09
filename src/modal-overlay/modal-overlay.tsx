import type { ModalOverlayProps } from './types';
import { useImperativeHandle, useRef } from 'react';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import { LayerProvider, useLayer } from '../helpers/layer';
import classNames from 'classnames';
import styles from './modal-overlay.module.scss';

/**
 * Полноэкранное затемнение для модальных компонентов (Alert, Modal, SidePage...).
 * @param props Свойства.
 * @return Элемент.
 */
export function ModalOverlay({
  rootRef,
  children,
  className,
  style,
  withScrollDisable = false,
  scrollDisableOptions,
  'data-testid': testId = 'modal-overlay',
  ...restProps
}: ModalOverlayProps) {
  const layer = useLayer() + 100;

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => ref.current);

  // ВАЖНО: поскольку у ModalOverlay тоже есть прокрутка - для него тоже надо блокировать прокрутку страницы (в частности на iPad)
  usePageScrollLock(ref, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

  return (
    <LayerProvider value={layer}>
      <div
        {...restProps}
        ref={ref}
        className={classNames(styles.root, className)}
        data-testid={testId}
        style={{
          ...style,
          zIndex: layer, // ВАЖНО: z-index должен быть на том же элементе что и position: fixed
        }}
      >
        {children}
      </div>
    </LayerProvider>
  );
}

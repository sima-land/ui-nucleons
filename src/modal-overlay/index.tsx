import { HTMLAttributes, Ref, useImperativeHandle, useRef } from 'react';
import { useViewportHeightUnit } from '../hooks/styles';
import { LayerProvider, useLayer } from '../helpers/layer';
import classNames from 'classnames';
import styles from './modal-overlay.module.scss';

export interface ModalOverlayProps extends HTMLAttributes<HTMLDivElement> {
  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

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
  'data-testid': testId = 'modal-overlay',
  ...restProps
}: ModalOverlayProps) {
  const layer = useLayer() + 100;

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => ref.current);

  useViewportHeightUnit(ref);

  return (
    <LayerProvider value={layer}>
      <div
        {...restProps}
        ref={ref}
        className={classNames(styles.root, className)}
        data-testid={testId}
        style={{
          ...style,
          zIndex: layer, // z-index должен быть на том же элементе что и position: fixed
        }}
      >
        {children}
      </div>
    </LayerProvider>
  );
}

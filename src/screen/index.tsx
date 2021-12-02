import React, { useRef } from 'react';
import { HeaderSlot, BodySlot, FooterSlot } from './slots';
import { LoadingOverlay, LoadingOverlayProps } from '../loading-overlay';
import { useBodyScrollLock } from '../_internal/body-scroll';
import { LayerProvider, useLayer } from '../helpers/layer';
import { defineSlots } from '../helpers/define-slots';
import styles from './screen.module.scss';

export interface ScreenProps {
  /** Содержимое. */
  children?: React.ReactNode;

  /** Нужно ли выводить вместо содержимого состояние загрузки. */
  loading?: boolean;

  /** Определяет область отображаемую как загружающуюся. */
  loadingArea?: 'content' | 'full';

  /** Свойства компонента LoadingOverlay. */
  loadingOverlayProps?: LoadingOverlayProps;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

/**
 * Экран.
 * @param props Свойства.
 * @return Элемент.
 */
export const Screen = ({
  children,
  loading,
  loadingArea = 'full',
  loadingOverlayProps,
  'data-testid': testId = 'screen',
}: ScreenProps) => {
  const layer = useLayer() + 300; // 300 из-за монолита
  const rootRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(rootRef, true);

  const { header, body, footer } = defineSlots(children, {
    header: HeaderSlot,
    body: BodySlot,
    footer: FooterSlot,
  });

  return (
    <div ref={rootRef} className={styles.root} style={{ zIndex: layer }} data-testid={testId}>
      {loading && loadingArea === 'full' ? (
        <LoadingOverlay {...loadingOverlayProps} />
      ) : (
        <LayerProvider value={layer}>
          {header}

          {loading && loadingArea === 'content' ? (
            <Screen.Body>
              <LoadingOverlay {...loadingOverlayProps} fill={false} style={{ height: '100%' }} />
            </Screen.Body>
          ) : (
            body
          )}

          {footer}
        </LayerProvider>
      )}
    </div>
  );
};

Screen.Header = HeaderSlot;
Screen.Body = BodySlot;
Screen.Footer = FooterSlot;

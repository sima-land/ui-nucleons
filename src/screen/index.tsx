import React, { useRef } from 'react';
import { HeaderSlot, BodySlot, FooterSlot } from './slots';
import { LoadingOverlay, LoadingOverlayProps } from '../loading-overlay';
import { useBodyScrollLock } from '../_internal/body-scroll';
import { LayerProvider, useLayer } from '../helpers/layer';
import { defineSlots } from '../helpers/define-slots';
import { useInfiniteScroll } from '../hooks';
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

  /** Будет вызвана при полной прокрутке содержимого экрана. */
  onFullScroll?: () => void;

  /** Отступ от нижней границы содержимого экрана, после которого начинает срабатывать onFullScroll. */
  fullScrollThreshold?: number;

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
  onFullScroll,
  fullScrollThreshold = 320,
  'data-testid': testId = 'screen',
}: ScreenProps) => {
  const fullLoading = loading && loadingArea === 'full';

  const layer = useLayer() + 300; // 300 из-за монолита

  const { header, body, footer } = defineSlots(children, {
    header: HeaderSlot,
    body: BodySlot,
    footer: FooterSlot,
  });

  // при блокировке прокрутки нужно передавать элемент которому нужно сохранить возможность прокрутки
  // https://github.com/willmcpo/body-scroll-lock/blame/79c4cf2c956eb7d5cf8d54a03d12751bc6ac8aa3/README.md#L52
  // поэтому используем внутренний ref и useImperativeHandle
  const bodyRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(bodyRef, true);

  useInfiniteScroll(bodyRef, { onFullScroll, threshold: fullScrollThreshold });

  return (
    <div className={styles.root} style={{ zIndex: layer }} data-testid={testId}>
      <LayerProvider value={layer}>
        {!fullLoading && header}

        {/* ВАЖНО: элемент с bodyRef должен выводиться всегда, т.к. он нужен для блокировки прокрутки */}
        <div ref={bodyRef} className={styles.body} data-testid='screen:body'>
          {loading ? (
            <LoadingOverlay {...loadingOverlayProps} fill={false} style={{ height: '100%' }} />
          ) : (
            body
          )}
        </div>

        {!fullLoading && footer && (
          <div className={styles.footer} data-testid='screen:footer'>
            {footer}
          </div>
        )}
      </LayerProvider>
    </div>
  );
};

Screen.Header = HeaderSlot;
Screen.Body = BodySlot;
Screen.Footer = FooterSlot;

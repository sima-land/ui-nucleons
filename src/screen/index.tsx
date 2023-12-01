import { ReactNode, useRef } from 'react';
import { HeaderSlot, BodySlot, FooterSlot } from './slots';
import { LayerProvider, useLayer } from '../helpers/layer';
import { defineSlots } from '../helpers/define-slots';
import { ScreenContext, ScreenInnerProps } from './utils';
import { WithPageScrollLock } from '../_internal/page-scroll-lock';
import styles from './screen.module.scss';
import { useViewportHeightUnit } from '../hooks/styles';
import type { WithTestId } from '../types';

export interface ScreenProps extends ScreenInnerProps, WithPageScrollLock, WithTestId {
  /** Содержимое. */
  children?: ReactNode;

  /** Определяет область отображаемую как загружающуюся. */
  loadingArea?: 'content' | 'full';
}

/**
 * Экран.
 * @deprecated На адаптивных страницах стоит использовать Modal.
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
  withScrollDisable,
  scrollDisableOptions,
  'data-testid': testId = 'screen',
}: ScreenProps) => {
  const fullLoading = loading && loadingArea === 'full';

  const layer = useLayer() + 300; // 300 из-за монолита

  const { header, body, footer } = defineSlots(children, {
    header: HeaderSlot,
    body: BodySlot,
    footer: FooterSlot,
  });

  const rootRef = useRef<HTMLDivElement>(null);

  useViewportHeightUnit(rootRef);

  if (!body) {
    throw Error(
      'Looks like you are trying to render <Screen /> without <Screen.Body /> slot, but it is required',
    );
  }

  return (
    <div
      ref={rootRef}
      className={styles.root}
      style={{
        zIndex: layer, // z-index именно здесь из-за position: fixed
      }}
      data-testid={testId}
    >
      <LayerProvider value={layer}>
        {!fullLoading && header}

        <ScreenContext.Provider
          value={{
            loading,
            loadingOverlayProps,
            onFullScroll,
            fullScrollThreshold,
            withScrollDisable,
            scrollDisableOptions,
          }}
        >
          {/* ВАЖНО: body должен выводиться всегда (без условий), т.к. он нужен для блокировки прокрутки */}
          {body}
        </ScreenContext.Provider>

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

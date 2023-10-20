import { forwardRef, useRef, useImperativeHandle, useContext, ReactNode } from 'react';
import { get } from 'lodash';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import { useInfiniteScroll } from '../hooks';
import { LoadingOverlay } from '../loading-overlay';
import { ScreenContext } from './utils';
import styles from './screen.module.scss';
import { TopBar, TopBarProps } from '../top-bar';

export interface HeaderSlotProps extends TopBarProps {
  /** Будет вызвана при нажатии на кнопку-стрелку. */
  onBack?: () => void;

  /** Будет вызвана при нажатии на кнопку-крести. */
  onClose?: () => void;
}

/**
 * Слот шапки экрана.
 * @param props Свойства.
 * @return Элемент.
 */
export const HeaderSlot = ({
  divided,
  title,
  subtitle,
  buttons,
  onBack,
  onClose,
  ...restProps
}: HeaderSlotProps) => (
  <TopBar
    {...restProps}
    size='s'
    title={title}
    subtitle={subtitle}
    divided={divided}
    buttons={{
      ...buttons,
      start: onBack
        ? {
            // ВАЖНО: не подмешиваем свойства из buttons.start
            // чтобы не распылять конфигурацию одной и той же кнопки по нескольким местам
            icon: <ArrowLeftSVG />,
            onClick: onBack,
            'aria-label': 'Вернуться назад',
            'data-testid': 'screen:back',
          }
        : get(buttons, 'start'),
      end: onClose
        ? {
            // ВАЖНО: не подмешиваем свойства из buttons.end
            // чтобы не распылять конфигурацию одной и той же кнопки по нескольким местам
            icon: <CrossSVG />,
            onClick: onClose,
            'aria-label': `Закрыть ${title || ''}`.trim(),
            'data-testid': 'screen:close',
          }
        : get(buttons, 'end'),
    }}
  />
);

/**
 * Слот основного контента экрана.
 */
export const BodySlot = forwardRef<HTMLDivElement | null, { children?: ReactNode }>(
  function BodySlot({ children }, outerRef) {
    const {
      loading,
      loadingOverlayProps,
      onFullScroll,
      fullScrollThreshold,
      withScrollDisable,
      scrollDisableOptions,
    } = useContext(ScreenContext);

    // при блокировке прокрутки нужно передавать элемент, которому нужно сохранить возможность прокрутки
    // https://github.com/willmcpo/body-scroll-lock/blame/79c4cf2c956eb7d5cf8d54a03d12751bc6ac8aa3/README.md#L52
    // поэтому используем внутренний ref и useImperativeHandle
    const ref = useRef<HTMLDivElement>(null);

    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(outerRef, () => ref.current);

    usePageScrollLock(ref, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

    useInfiniteScroll(ref, { onFullScroll, threshold: fullScrollThreshold });

    return (
      // ВАЖНО: элемент с ref должен выводиться всегда (без условий), т.к. он нужен для блокировки прокрутки
      <div ref={ref} className={styles.body} data-testid='screen:body'>
        {loading ? (
          <LoadingOverlay {...loadingOverlayProps} fill={false} style={{ height: '100%' }} />
        ) : (
          children
        )}
      </div>
    );
  },
);

/**
 * Слот футера экрана.
 * @param props Свойства.
 * @return Элемент.
 */
export const FooterSlot = ({ children }: { children?: ReactNode }) => <>{children}</>;

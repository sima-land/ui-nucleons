import React, { Fragment, useRef, useEffect } from 'react';
import { Layer } from '../layer';
import isFunction from 'lodash/isFunction';
import { ScreenLayout, Props as LayoutProps, CallbackData } from './screen-layout';
import { cx, OrNil } from './utils';
import { LoadingOverlay, Props as LoadingProps } from '../loading-overlay';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface AdvancedCallbackData extends CallbackData {
  rootElement: OrNil<HTMLDivElement>
}

export interface Props {

  /** Содержимое. */
  children?: React.ReactNode

  /** Реф контента. */
  contentRef?: LayoutProps['childrenRef']

  /** Содержимое подвала. */
  footer?: any

  /** Отступ от нижней границы для срабатывания onFullScroll. */
  fullScrollThreshold?: number

  /** Нужно ли выводить вместо содержимого состояние загрузки. */
  loading?: boolean

  /** Определяет область отображаемую как загружающуюся. */
  loadingArea?: 'content' | 'full'

  /** Свойства компонента LoadingOverlay. */
  loadingOverlayProps?: LoadingProps

  /** Свойства компонента NavBar. */
  navBarProps?: LayoutProps['navBarProps']

  /** Сработает при клике на кнопку "назад". */
  onBack?: (data: AdvancedCallbackData) => void

  /** Сработает при кнопке на крест. */
  onClose?: (data: AdvancedCallbackData) => void

  /** Сработает при полной прокрутке контента. */
  onFullScroll?: LayoutProps['onFullScroll']

  /** Подзаголовок. */
  subtitle?: string

  /** Заголовок. */
  title?: string

  /** Нужно ли выводить кнопку "назад". */
  withBackButton?: boolean

  /** Нужно ли выводить закрывающий крест. */
  withCloseButton?: boolean

  /** Нужно ли рисовать черту между шапкой и основным содержимым. */
  withDivideHeader?: boolean

  /** Нужно ли выводить кнопку "назад". */
  withHeader?: boolean

  /** Нужно ли выводить Layer (при SSR необходимо указать false). */
  withLayer?: boolean
}

/**
 * Экран.
 * @param props Свойства.
 * @return Элемент.
 */
export const Screen: React.FC<Props> = ({
  children,
  contentRef,
  footer,
  fullScrollThreshold = 320,
  loading = false,
  loadingArea = 'full',
  loadingOverlayProps,
  navBarProps,
  onBack,
  onClose,
  onFullScroll,
  subtitle,
  title,
  withBackButton = false,
  withCloseButton = true,
  withDivideHeader = true,
  withHeader = true,
  withLayer = true,
}) => {
  const Wrapper = withLayer ? Layer : Fragment;
  const rootRef = useRef();
  const innerContentRef = useRef<OrNil<HTMLDivElement>>();

  // включаем прокрутку body при размонтировании
  useEffect(() => () => {
    innerContentRef.current && enableBodyScroll(innerContentRef.current as any);
  }, []);

  return (
    <Wrapper>
      <div
        ref={rootRef as any}
        className={cx('screen', 'full-width')}
      >
        {
          loading && loadingArea === 'full'
            ? <LoadingOverlay {...loadingOverlayProps} />
            : (
              <ScreenLayout
                title={title}
                subtitle={subtitle}
                withHeader={withHeader}
                withDivideHeader={withDivideHeader}
                withBackButton={withBackButton}
                withCloseButton={withCloseButton}
                children={
                  loading && loadingArea === 'content'
                    ? (
                      <LoadingOverlay
                        {...loadingOverlayProps}
                        {...loadingArea === 'content' && {
                          fill: false,
                          style: { height: '100%' },
                        }}
                      />
                    )
                    : children
                }
                childrenRef={element => {
                  setRefValue(contentRef as any, element);
                  takeScrollableElement(innerContentRef, element);
                }}
                footer={footer}
                onBack={({ contentElement }) => {
                  isFunction(onBack) && onBack({
                    rootElement: rootRef.current,
                    contentElement,
                  });
                }}
                onClose={({ contentElement }) => {
                  isFunction(onClose) && onClose({
                    rootElement: rootRef.current,
                    contentElement,
                  });
                }}
                onFullScroll={onFullScroll}
                fullScrollThreshold={fullScrollThreshold}
                navBarProps={navBarProps}
              />
            )
        }
      </div>
    </Wrapper>
  );
};

/**
 * Записывает переданное значение в ref контента.
 * @param ref Ref-контейнер.
 * @param value Значение для записи.
 */
export const setRefValue = (ref: React.RefCallback<any> | React.MutableRefObject<any>, value: any) => {
  if (isFunction(ref)) {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

/**
 * Записывает полученный элемент в ref и отключает прокрутку.
 * @param ref Ref-контейнер.
 * @param element Элемент для записи.
 */
export const takeScrollableElement = (
  ref: React.MutableRefObject<OrNil<HTMLDivElement>>,
  element?: HTMLDivElement | null
) => {
  if (element && element !== ref.current) {
    // если элемент изменился - включаем прокрутку для старого
    ref.current && enableBodyScroll(ref.current);

    // сохраняем новый элемент
    ref.current = element;

    // отключаем прокрутку для нового элемента
    disableBodyScroll(element);
  }
};

import React, { Fragment, useRef, useEffect } from 'react';
import Layer from '../layer';
import isFunction from 'lodash/isFunction';
import { ScreenLayout, Props as LayoutProps, CallbackData } from './screen-layout';
import { cx, OrNil } from './utils';
import LoadingOverlay, { Props as LoadingProps } from '../loading-overlay';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface AdvancedCallbackData extends CallbackData {
  rootElement: OrNil<HTMLDivElement>
}

export interface Props {
  contentRef?: LayoutProps['childrenRef']
  footer?: any
  fullScrollThreshold?: number
  loading?: boolean
  loadingArea?: 'content' | 'full'
  loadingOverlayProps?: LoadingProps
  navBarProps?: LayoutProps['navBarProps']
  onBack?: (data: AdvancedCallbackData) => void
  onClose?: (data: AdvancedCallbackData) => void
  onFullScroll?: LayoutProps['onFullScroll']
  subtitle?: string
  title?: string
  withBackButton?: boolean
  withCloseButton?: boolean
  withDivideHeader?: boolean
  withHeader?: boolean
  withLayer?: boolean
}

/**
 * Экран.
 * @param props Свойства.
 * @param props.title Заголовок.
 * @param props.subtitle Подзаголовок.
 * @param props.onBack Сработает при клике на кнопку "назад".
 * @param props.onClose Сработает при кнопке на крест.
 * @param props.onFullScroll Сработает при полной прокрутке контента.
 * @param props.fullScrollThreshold Отступ от нижней границы для срабатывания onFullScroll.
 * @param props.withHeader Нужно ли выводить кнопку "назад".
 * @param props.withDivideHeader Нужно ли рисовать черту между шапкой и основным содержимым.
 * @param props.withBackButton Нужно ли выводить кнопку "назад".
 * @param props.withCloseButton Нужно ли выводить закрывающий крест.
 * @param props.children Содержимое.
 * @param props.footer Содержимое подвала.
 * @param props.loading Нужно ли выводить вместо содержимого состояние загрузки.
 * @param props.loadingOverlayProps Свойства компонента LoadingOverlay.
 * @param props.loadingArea Определяет область отображаемую как загружающуюся.
 * @param props.contentRef Реф контента.
 * @param props.withLayer Нужно ли выводить Layer.
 * @param props.navBarProps Свойства компонента NavBar.
 * @return Элементё.
 */
const Screen: React.FC<Props> = ({
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
 * @param {Object|Function} ref Ref-контейнер.
 * @param {*} value Значение для записи.
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
 * @param {Object} ref Ref-контейнер.
 * @param {HTMLElement} element Элемент для записи.
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

export default Screen;

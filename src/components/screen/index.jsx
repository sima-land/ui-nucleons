import React, { useRef, useEffect } from 'react';
import Layer from '../layer';
import isFunction from 'lodash/isFunction';
import { ScreenLayout } from './screen-layout';
import { cx } from './common';
import LoadingOverlay from '../loading-overlay';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import PropTypes from 'prop-types';

/**
 * Экран.
 * @param {Object} props Свойства.
 * @param {string} [props.title] Заголовок.
 * @param {string} [props.subtitle] Подзаголовок.
 * @param {Function} [props.onBack] Сработает при клике на кнопку "назад".
 * @param {Function} [props.onClose] Сработает при кнопке на крест.
 * @param {Function} [props.onFullScroll] Сработает при полной прокрутке контента.
 * @param {Function} [props.fullScrollThreshold=320] Отступ от нижней границы для срабатывания onFullScroll.
 * @param {boolean} [props.withHeader=true] Нужно ли выводить кнопку "назад".
 * @param {boolean} [props.withBackButton=false] Нужно ли выводить кнопку "назад".
 * @param {boolean} [props.withCloseButton=true] Нужно ли выводить закрывающий крест.
 * @param {*} [props.children] Содержимое.
 * @param {*} [props.footer] Содержимое подвала.
 * @param {boolean} [props.loading=false] Нужно ли выводить вместо содержимого состояние загрузки.
 * @param {Object} [props.loadingOverlayProps={}] Свойства компонента LoadingOverlay.
 * @param {Object} [props.contentRef] Реф контента.
 * @param {boolean} [props.withLayer=true] Нужно ли выводить Layer.
 * @return {ReactElement} Экран.
 */
const Screen = ({
  title,
  subtitle,
  onBack,
  onClose,
  onFullScroll,
  withHeader = true,
  withBackButton = false,
  withCloseButton = true,
  children,
  footer,
  loading = false,
  loadingOverlayProps = {},
  fullScrollThreshold = 320,
  contentRef,
  withLayer = true,
}) => {
  const Wrapper = withLayer ? Layer : React.Fragment;
  const rootRef = useRef();
  const innerContentRef = useRef();

  // включаем прокрутку body при размонтировании
  useEffect(() => () => innerContentRef.current && enableBodyScroll(innerContentRef.current), []);

  return (
    <Wrapper>
      <div
        ref={rootRef}
        className={cx('screen', 'full-width')}
      >
        {
          loading
            ? <LoadingOverlay {...loadingOverlayProps} />
            : (
              <ScreenLayout
                title={title}
                subtitle={subtitle}
                withHeader={withHeader}
                withBackButton={withBackButton}
                withCloseButton={withCloseButton}
                children={children}
                childrenRef={element => {
                  setRefValue(contentRef, element);
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
export const setRefValue = (ref, value) => {
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
export const takeScrollableElement = (ref, element) => {
  if (element && element !== ref.current) {
    // если элемент изменился - включаем прокрутку для старого
    ref.current && enableBodyScroll(ref.current);

    // сохраняем новый элемент
    ref.current = element;

    // отключаем прокрутку для нового элемента
    disableBodyScroll(element);
  }
};

Screen.propTypes = {
  /**
   * Заголовок.
   */
  title: PropTypes.string,

  /**
   * Подзаголовок.
   */
  subtitle: PropTypes.string,

  /**
   * Сработает при клике на кнопку "назад".
   */
  onBack: PropTypes.func,

  /**
   * Сработает при кнопке на крест.
   */
  onClose: PropTypes.func,

  /**
   * Сработает при полной прокрутке контента.
   */
  onFullScroll: PropTypes.func,

  /**
   * Отступ от нижней границы для срабатывания onFullScroll.
   */
  fullScrollThreshold: PropTypes.number,

  /**
   * Нужно ли выводить шапку с заголовком и кнопками.
   */
  withHeader: PropTypes.bool,

  /**
   * Нужно ли выводить кнопку "назад".
   */
  withBackButton: PropTypes.bool,

  /**
   * Нужно ли выводить закрывающий крест.
   */
  withCloseButton: PropTypes.bool,

  /**
   * Содержимое.
   */
  children: PropTypes.any,

  /**
   * Содержимое подвала.
   */
  footer: PropTypes.any,

  /**
   * Нужно ли выводить вместо содержимого состояние загрузки.
   */
  loading: PropTypes.bool,

  /**
   * Свойства компонента LoadingOverlay.
   */
  loadingOverlayProps: PropTypes.object,

  /**
   * Реф контента.
   */
  contentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),

  /**
   * Нужно ли выводить Layer.
   */
  withLayer: PropTypes.bool,
};

export default Screen;

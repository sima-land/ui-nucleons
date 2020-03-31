import React, { useEffect, useState } from 'react';
import Layer from '../layer';
import isFunction from 'lodash/isFunction';
import { ScreenLayout } from './screen-layout';
import { cx } from './common';
import LoadingOverlay from '../loading-overlay';
import { useInfiniteScroll } from '../hooks';
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
 * @param {boolean} [props.withBackButton] Нужно ли выводить кнопку "назад".
 * @param {boolean} [props.withCloseButton=true] Нужно ли выводить закрывающий крест.
 * @param {*} [props.children] Содержимое.
 * @param {*} [props.footer] Содержимое подвала.
 * @param {boolean} [props.loading=false] Нужно ли выводить вместо содержимого состояние загрузки.
 * @param {Object} [props.loadingOverlayProps={}] Свойства компонента LoadingOverlay.
 * @return {ReactElement} Экран.
 */
const Screen = ({
  title,
  subtitle,
  onBack,
  onClose,
  onFullScroll,
  withBackButton,
  withCloseButton = true,
  children,
  footer,
  loading = false,
  loadingOverlayProps = {},
}) => {
  const [rootElement, setRootElement] = useState(null);
  const [contentElement, setContentElement] = useState(null);

  useEffect(() => {
    rootElement && disableBodyScroll(rootElement);
    return () => rootElement && enableBodyScroll(rootElement);
  }, [rootElement]);

  useInfiniteScroll({ current: contentElement }, {
    threshold: 320,
    onFullScroll,
  });

  return (
    <Layer>
      <div ref={setRootElement} className={cx('screen', 'full-width')}>
        {
          loading
            ? <LoadingOverlay {...loadingOverlayProps} />
            : (
              <ScreenLayout
                title={title}
                subtitle={subtitle}
                withBackButton={withBackButton}
                withCloseButton={withCloseButton}
                childrenRef={setContentElement}
                children={children}
                footer={footer}
                onBack={() => {
                  isFunction(onBack) && onBack({
                    rootElement,
                    contentElement,
                  });
                }}
                onClose={() => {
                  isFunction(onClose) && onClose({
                    rootElement,
                    contentElement,
                  });
                }}
              />
            )
        }
      </div>
    </Layer>
  );
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
};

export default Screen;

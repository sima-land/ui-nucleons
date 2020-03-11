import React, { useEffect, useState } from 'react';
import Text from '../text';
import Icon from '../icon';
import Layer from '../layer';
import classnames from 'classnames/bind';
import isFunction from 'lodash/isFunction';
import { useInfiniteScroll } from '../hooks';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import PropTypes from 'prop-types';

import arrowLeft from '../icons/full-left-arrow.svg';
import crossIcon from '../icons/cross-big.svg';
import classes from './screen.scss';

const cx = classnames.bind(classes);

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
        <div className={cx('header', 'full-width')}>
          {Boolean(withBackButton) && (
            <Icon
              size={24}
              icon={arrowLeft}
              className={cx('button', 'button-back')}
              onClick={() => {
                isFunction(onBack) && onBack({
                  rootElement,
                  contentElement,
                });
              }}
              aria-label='Вернуться назад'
              role='button'
            />
          )}
          <Text
            truncate
            size={16}
            lineHeight={24}
            weight={600}
            color='gray87'
            children={title}
          />
          {Boolean(subtitle) && (
            <Text
              truncate
              size={12}
              lineHeight={12}
              color='gray38'
              children={subtitle}
            />
          )}
          {Boolean(withCloseButton) && (
            <Icon
              size={24}
              icon={crossIcon}
              className={cx('button', 'button-close')}
              onClick={() => {
                isFunction(onClose) && onClose({
                  rootElement,
                  contentElement,
                });
              }}
              aria-label={`Закрыть ${title}`}
              role='button'
            />
          )}
        </div>
        <div
          ref={setContentElement}
          className={cx('content', 'full-width')}
          children={children}
        />
        {Boolean(footer) && (
          <div className={cx('footer', 'full-width')}>
            {footer}
          </div>
        )}
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
};

export default Screen;

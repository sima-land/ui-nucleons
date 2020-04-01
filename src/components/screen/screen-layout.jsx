import React, { Fragment, useRef, useEffect } from 'react';
import Text from '../text';
import Icon from '../icon';
import { cx } from './common';
import on from '../helpers/on';
import { isFullyScrolled } from '../helpers/is-fully-scrolled';
import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';

import arrowLeft from '../icons/full-left-arrow.svg';
import crossIcon from '../icons/cross-big.svg';

/**
 * Разметка содержимого компонента Screen.
 * @param {Object} props Свойства.
 * @param {string} [props.title] Заголовок.
 * @param {string} [props.subtitle] Подзаголовок.
 * @param {Function} [props.onBack] Сработает при клике на кнопку "назад".
 * @param {Function} [props.onClose] Сработает при клике на крест.
 * @param {Function} [props.onFullScroll] Сработает при полной прокрутке контента.
 * @param {boolean} [props.withBackButton] Нужно ли выводить кнопку "назад".
 * @param {boolean} [props.withCloseButton] Нужно ли выводить закрывающий крест.
 * @param {*} [props.children] Содержимое.
 * @param {*} [props.footer] Содержимое подвала.
 * @return {ReactElement} Разметка содержимого компонента Screen.
 */
export const ScreenLayout = ({
  title,
  subtitle,
  onBack,
  onClose,
  withHeader,
  withBackButton,
  withCloseButton,
  children,
  footer,
  onFullScroll,
  fullScrollThreshold,
}) => {
  const contentRef = useRef();
  const unsubscribeRef = useRef();

  // отписываемся от события "scroll"
  useEffect(() => () => unsubscribeRef.current && unsubscribeRef.current());

  return (
    <Fragment>
      {Boolean(withHeader) && (
        <div className={cx('header', 'full-width')}>
          {Boolean(withBackButton) && (
            <Icon
              size={24}
              icon={arrowLeft}
              className={cx('button', 'button-back')}
              onClick={() => isFunction(onBack) && onBack({
                contentElement: contentRef.current,
              })}
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
              onClick={() => isFunction(onClose) && onClose({
                contentElement: contentRef.current,
              })}
              aria-label={`Закрыть ${title}`}
              role='button'
            />
          )}
        </div>
      )}
      <div
        className={cx('content', 'full-width')}
        children={children}
        ref={createTakeContentRef({
          elementRef: contentRef,
          unsubscribeRef,
          onFullScroll,
          fullScrollThreshold,
        })}
      />
      {Boolean(footer) && (
        <div className={cx('footer', 'full-width')}>
          {footer}
        </div>
      )}
    </Fragment>
  );
};

/**
 * Возвращает функцию сохранения аргумента в ref-контейнер.
 * Возвращаемая функция выполняет подписку на "scroll" и вызывает callback в момент полной прокрутки.
 * @param {Object} options Опции.
 * @param {Object} options.elementRef Ref-контейнер для элемента.
 * @param {Object} options.unsubscribeRef Ref-контейнер для функции отписки от "scroll".
 * @param {Function} [options.onFullScroll] Сработает при полной прокрутке.
 * @param {number} [options.fullScrollThreshold=0] Отступ от нижней границы для срабатывания onFullScroll.
 * @return {Function} Функция сохранения аргумента в ref-контейнер.
 */
export const createTakeContentRef = ({
  elementRef,
  unsubscribeRef,
  onFullScroll,
  fullScrollThreshold: threshold = 0,
}) => element => {
  if (element && element !== elementRef.current) {
    // сохраняем ссылку для последующей отправки в onClose/onBack
    elementRef.current = element;

    // если ранее были подписаны - отписываемся
    unsubscribeRef.current && unsubscribeRef.current();

    // выполняем подписку, сохраняем функцию отписки
    unsubscribeRef.current = on(element, 'scroll', () => {
      isFullyScrolled(element, { threshold })
        && isFunction(onFullScroll)
        && onFullScroll({ contentElement: element });
    });
  }
};

ScreenLayout.propTypes = {
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
   * Ref элемента основного содержимого.
   */
  childrenRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Содержимое подвала.
   */
  footer: PropTypes.any,
};

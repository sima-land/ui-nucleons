import React, { Fragment, useRef, useImperativeHandle } from 'react';
import NavBar from '../nav-bar';
import { cx } from './common';
import on from '../helpers/on';
import { isFullyScrolled } from '../helpers/is-fully-scrolled';
import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import arrowLeft from '../icons/full-left-arrow.svg';
import crossIcon from '../icons/cross-big.svg';

/**
 * Разметка содержимого компонента Screen.
 * @param {Object} props Свойства.
 * @param {*} [props.children] Содержимое.
 * @param {*} [props.childrenRef] Ref для элемента содержимого.
 * @param {*} [props.footer] Содержимое подвала.
 * @param {*} [props.fullScrollThreshold] Отступ от нижней границы для срабатывания onFullScroll.
 * @param {*} [props.navBarProps={}] Свойства компонента NavBar.
 * @param {Function} [props.onBack] Сработает при клике на кнопку "назад".
 * @param {Function} [props.onClose] Сработает при клике на крест.
 * @param {Function} [props.onFullScroll] Сработает при полной прокрутке контента.
 * @param {string} [props.subtitle] Подзаголовок.
 * @param {string} [props.title] Заголовок.
 * @param {boolean} [props.withBackButton] Нужно ли выводить кнопку "назад".
 * @param {boolean} [props.withCloseButton] Нужно ли выводить закрывающий крест.
 * @param {boolean} [props.withDivideHeader] Нужно ли рисовать черту между шапкой и основным содержимым.
 * @param {boolean} [props.withHeader] Нужно ли выводить шапку с заголовком и кнопками.
 * @return {ReactElement} Разметка содержимого компонента Screen.
 */
export const ScreenLayout = ({
  children,
  childrenRef,
  footer,
  fullScrollThreshold,
  navBarProps = {},
  onBack,
  onClose,
  onFullScroll,
  subtitle,
  title,
  withBackButton,
  withCloseButton,
  withDivideHeader,
  withHeader,
}) => {
  const contentRef = useRef();
  const unsubscribeRef = useRef();

  useImperativeHandle(childrenRef, () => contentRef.current);

  return (
    <Fragment>
      {Boolean(withHeader) && (
        <NavBar
          {...navBarProps}
          title={title}
          subtitle={subtitle}
          bottomBordered={withDivideHeader}
          buttons={{
            ...navBarProps.buttons,
            start: withBackButton
              ? {
                icon: arrowLeft,
                onClick: () => isFunction(onBack) && onBack({ contentElement: contentRef.current }),
                'aria-label': 'Вернуться назад',
              }
              : get(navBarProps.buttons, 'start'),
            end: withCloseButton
              ? {
                icon: crossIcon,
                onClick: () => isFunction(onClose) && onClose({ contentElement: contentRef.current }),
                'aria-label': `Закрыть ${title || ''}`.trim(),
              }
              : get(navBarProps.buttons, 'end'),
          }}
        />
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
  if (!element) {
    elementRef.current = null;

    // если ранее были подписаны - отписываемся
    unsubscribeRef.current && unsubscribeRef.current();
  } else if (element !== elementRef.current) {
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
   * Нужно ли рисовать черту между шапкой и основным содержимым.
   */
  withDivideHeader: PropTypes.bool,

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

  /**
   * Свойства компонента NavBar.
   */
  navBarProps: PropTypes.object,
};

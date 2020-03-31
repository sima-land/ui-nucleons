import React, { Fragment } from 'react';
import Text from '../text';
import Icon from '../icon';
import { cx } from './common';
import PropTypes from 'prop-types';

import arrowLeft from '../icons/full-left-arrow.svg';
import crossIcon from '../icons/cross-big.svg';

/**
 * Разметка содержимого компонента Screen.
 * @param {Object} props Свойства.
 * @param {string} [props.title] Заголовок.
 * @param {string} [props.subtitle] Подзаголовок.
 * @param {Function} [props.onBack] Сработает при клике на кнопку "назад".
 * @param {Function} [props.onClose] Сработает при кнопке на крест.
 * @param {Function} [props.onFullScroll] Сработает при полной прокрутке контента.
 * @param {boolean} [props.withBackButton] Нужно ли выводить кнопку "назад".
 * @param {boolean} [props.withCloseButton=true] Нужно ли выводить закрывающий крест.
 * @param {*} [props.children] Содержимое.
 * @param {Object|Function} [props.childrenRef] Содержимое.
 * @param {*} [props.footer] Содержимое подвала.
 * @return {ReactElement} Разметка содержимого компонента Screen.
 */
export const ScreenLayout = ({
  title,
  subtitle,
  onBack,
  onClose,
  childrenRef,
  withBackButton,
  withCloseButton,
  children,
  footer,
}) => (
  <Fragment>
    <div className={cx('header', 'full-width')}>
      {Boolean(withBackButton) && (
        <Icon
          size={24}
          icon={arrowLeft}
          className={cx('button', 'button-back')}
          onClick={onBack}
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
          onClick={onClose}
          aria-label={`Закрыть ${title}`}
          role='button'
        />
      )}
    </div>
    <div
      ref={childrenRef}
      className={cx('content', 'full-width')}
      children={children}
    />
    {Boolean(footer) && (
      <div className={cx('footer', 'full-width')}>
        {footer}
      </div>
    )}
  </Fragment>
);

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

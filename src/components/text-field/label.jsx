import React from 'react';
import { cx } from './classes';
import PropTypes from 'prop-types';

/**
 * Компонент label для TextField.
 * @param {Object} props Свойства.
 * @param {boolean} props.disabled Отключено ли поле.
 * @param {boolean} props.focused Сфокусировано ли поле.
 * @param {boolean} props.failed Ошибочно ли введено значение в поле.
 * @param {'desktop'|'mobile'} props.variant Вариант отображения поля.
 * @param {boolean} props.asPlaceholder Нужно ли отображать label как placeholder.
 * @param {string} props.children Содержимое.
 * @return {ReactElement} Компонент label.
 */
export const Label = ({
  disabled,
  focused,
  failed,
  variant,
  asPlaceholder,
  children,
}) => (
  <label
    className={cx([
      'label',
      asPlaceholder && 'as-placeholder',
      disabled && 'disabled',
      failed && 'failed',
      focused && 'focused',
      variant && `variant-${variant}`,
    ])}
    children={children}
  />
);

Label.propTypes = {
  /**
   * Отключено ли поле.
   */
  disabled: PropTypes.bool,

  /**
   * Сфокусировано ли поле.
   */
  focused: PropTypes.bool,

  /**
   * Ошибочно ли введено значение в поле.
   */
  failed: PropTypes.bool,

  /**
   * Вариант отображения поля.
   */
  variant: PropTypes.oneOf(['desktop', 'mobile']),

  /**
   * Нужно ли отображать label как placeholder.
   */
  asPlaceholder: PropTypes.bool,

  /**
   * Содержимое.
   */
  children: PropTypes.string,
};

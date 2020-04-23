import React, { Children, cloneElement } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import classes from './clean-buttons.scss';

const cx = classnames.bind(classes);

/**
 * Компонент группы прозрачных кнопок.
 * @param {Object} props Свойства.
 * @param {'s'|'m'} [props.size='m'] Содержимое.
 * @param {*} props.children Содержимое.
 * @return {ReactElement} Компонент группы прозрачных кнопок.
 */
const CleanGroup = ({ children, size = 'm' }) => (
  <div className={cx('clean-group')}>
    {Children.map(
      children,
      item => item && item.type === CleanButton
        ? cloneElement(item, { size })
        : item
    )}
  </div>
);

CleanGroup.propTypes = {
  /**
   * Содержимое.
   */
  children: PropTypes.any,

  /**
   * Размер.
   */
  size: PropTypes.oneOf(['s', 'm']),
};

/**
 * Компонент прозрачной кнопки.
 * @param {Object} props Свойства. Поддерживаются свойства элементов button/a (зависит от того, передан ли asLink).
 * @param {*} props.children Содержимое.
 * @param {'s'|'m'} props.size Размер.
 * @param {string} props.href Адрес ссылки.
 * @param {boolean} [props.asLink=!!props.href] Нужно ли выводить кнопку как ссылку.
 * @return {ReactElement} Компонент прозрачной кнопки.
 */
const CleanButton = ({
  children,
  size = 'm',
  href,
  asLink = Boolean(href),
  ...restProps
}) => {
  const Container = asLink ? 'a' : 'button';

  return (
    <Container
      className={cx('clean-button', `size-${size}`)}
      href={href}
      children={children}
      {...restProps}
    />
  );
};

CleanButton.propTypes = {
  /**
   * Содержимое.
   */
  children: PropTypes.any,

  /**
   * Размер.
   */
  size: PropTypes.oneOf(['s', 'm']),

  /**
   * Адрес ссылки.
   */
  href: PropTypes.string,

  /**
   * Нужно ли выводить кнопку как ссылку.
   */
  asLink: PropTypes.bool,
};

export const Clean = {
  Group: CleanGroup,
  Button: CleanButton,
};

export default Clean;

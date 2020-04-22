import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import classes from './top-bar.scss';

const cx = classnames.bind(classes);

/**
 * Компонент шапки модальных окон/экранов.
 * @param {Object} props Свойства.
 * @param {'s'|'m'|'l'} [props.size='m'] Размер.
 * @param {string} props.title Заголовок.
 * @param {string} [props.subtitle] Подзаголовок.
 * @param {*} [props.startIcon] Начальная иконка.
 * @param {*} [props.endIcon] Конечная иконка.
 * @param {*} [props.startSecondaryIcon] Дополнительная начальная иконка (ближе к центру).
 * @param {*} [props.endSecondaryIcon] Дополнительная конечная иконка (ближе к центру).
 * @return {ReactElement} Компонент шапки модальных окон/экранов.
 */
const TopBar = ({
  size = 'm',
  title,
  subtitle,
  startIcon,
  endIcon,
  startSecondaryIcon,
  endSecondaryIcon,
}) => {
  const stub = startIcon || endIcon ? iconStub : null;
  const secondaryStub = startSecondaryIcon || endSecondaryIcon ? iconStub : null;

  return (
    <div className={cx('modal-header', `size-${size}`)}>
      {startIcon ? <IconButton children={startIcon} /> : stub}
      {startSecondaryIcon ? <IconButton children={startSecondaryIcon} /> : secondaryStub}

      <div className={cx('main-section')}>
        <div className={cx('title', 'ellipsis')}>{title}</div>
        {Boolean(subtitle) && (
          <div className={cx('subtitle', 'ellipsis')}>
            {subtitle}
          </div>
        )}
      </div>

      {endSecondaryIcon ? <IconButton children={endSecondaryIcon} /> : secondaryStub}
      {endIcon ? <IconButton children={endIcon} /> : stub}
    </div>
  );
};

TopBar.propTypes = {
  /**
   * Размер.
   */
  size: PropTypes.oneOf(['s', 'm', 'l']),

  /**
   * Заголовок.
   */
  title: PropTypes.string,

  /**
   * Подзаголовок.
   */
  subtitle: PropTypes.string,

  /**
   * Начальная иконка.
   */
  startIcon: PropTypes.any,

  /**
   * Конечная иконка.
   */
  endIcon: PropTypes.any,

  /**
   * Дополнительная начальная иконка (ближе к центру).
   */
  startSecondaryIcon: PropTypes.any,

  /**
   * Дополнительная конечная иконка (ближе к центру).
   */
  endSecondaryIcon: PropTypes.any,
};

/**
 * Компонент кнопки-иконки.
 * @param {Object} props Свойства. Поддерживаются свойства button.
 * @param {Object} props.children Содержимое.
 * @return {ReactElement} Компонент кнопки-иконки.
 */
export const IconButton = ({ children, ...props }) => (
  <button {...props} className={cx('icon-button')}>
    {children}
  </button>
);

IconButton.propTypes = {
  /**
   * Содержимое.
   */
  children: PropTypes.any,
};

const iconStub = (
  <div className={cx('icon-button')} />
);

export default TopBar;

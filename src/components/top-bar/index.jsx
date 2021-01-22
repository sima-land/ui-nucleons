import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import classes from './top-bar.scss';

const cx = classnames.bind(classes);

/**
 * Компонент шапки модальных окон/экранов.
 * @param {Object} props Свойства.
 * @param {'s'|'m'|'l'} [props.size='m'] Размер.
 * @param {string} props.title Заголовок.
 * @param {string} [props.subtitle] Подзаголовок.
 * @param {{ start, startSecondary, end, endSecondary }} [props.buttonsProps] Свойства кнопок.
 * @param {*} [props.className] CSS-класс корневого элемента.
 * @return {ReactElement} Компонент шапки модальных окон/экранов.
 */
const TopBar = ({
  size = 'm',
  title,
  subtitle,
  buttonsProps: {
    start,
    startSecondary,
    end,
    endSecondary,
  } = {},
  className,
}) => {
  const hasStart = has(start, 'icon');
  const hasStartSecondary = has(startSecondary, 'icon');
  const hasEnd = has(end, 'icon');
  const hasEndSecondary = has(endSecondary, 'icon');

  const stub = hasStart || hasEnd ? iconStub : null;
  const secondaryStub = hasStartSecondary || hasEndSecondary ? iconStub : null;

  return (
    <div className={cx('modal-header', `size-${size}`, className)}>
      {hasStart ? <IconButton {...start} /> : stub}
      {hasStartSecondary ? <IconButton {...startSecondary} /> : secondaryStub}

      <div className={cx('main-section')}>
        <div className={cx('title', 'ellipsis')}>{title}</div>
        {Boolean(subtitle) && (
          <div className={cx('subtitle', 'ellipsis')}>
            {subtitle}
          </div>
        )}
      </div>

      {hasEndSecondary ? <IconButton {...endSecondary} /> : secondaryStub}
      {hasEnd ? <IconButton {...end} /> : stub}
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
   * Свойства кнопок.
   */
  buttonsProps: PropTypes.shape({

    /**
     * Свойства начальной кнопки.
     */
    start: PropTypes.shape({
      icon: PropTypes.any,
    }),

    /**
     * Свойства дополнительной начальной кнопки (ближе к центру).
     */
    startSecondary: PropTypes.shape({
      icon: PropTypes.any,
    }),

    /**
     * Свойства конечной кнопки.
     */
    end: PropTypes.shape({
      icon: PropTypes.any,
    }),

    /**
     * Свойства дополнительной конечной кнопки (ближе к центру).
     */
    endSecondary: PropTypes.shape({
      icon: PropTypes.any,
    }),
  }),

  /**
   * CSS-класс корневого элемента.
   */
  className: PropTypes.string,
};

/**
 * Компонент кнопки-иконки.
 * @param {Object} props Свойства. Поддерживаются свойства button.
 * @param {Object} props.icon Иконка.
 * @return {ReactElement} Компонент кнопки-иконки.
 */
export const IconButton = ({ icon, ...buttonProps }) => (
  <button {...buttonProps} type='button' className={cx('icon-button')}>
    {icon}
  </button>
);

IconButton.propTypes = {
  /**
   * Иконка.
   */
  icon: PropTypes.any,
};

const iconStub = (
  <div className={cx('icon-button')} />
);

export default TopBar;

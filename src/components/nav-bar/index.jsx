import React from 'react';
import classes from './nav-bar.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { prop } from 'lodash/fp';
import { InnerBorder } from '../styling/borders';
import { COLORS } from '../constants';

const cx = classnames.bind(classes);

const getIcon = prop('icon');

/**
 * Компонент панели навигации.
 * @param {Object} props Свойства.
 * @param {string} [props.title] Заголовок.
 * @param {string} [props.subtitle] Подзаголовок.
 * @param {string} [props.className] Класс корневого элемента.
 * @param {boolean} [props.bottomBordered=false] Нужна ли внутренняя граница снизу.
 * @param {{ start, startSecondary, end, endSecondary }} [props.buttons] Данные кнопок.
 * @return {ReactElement} Компонент панели навигации.
 */
const NavBar = ({
  title,
  subtitle,
  className,
  bottomBordered = false,
  buttons: {
    start,
    startSecondary,
    end,
    endSecondary,
  } = {},
}) => {
  const startButtons = [start, startSecondary];
  const endButtons = [end, endSecondary];

  const hasStartButtons = startButtons.some(Boolean);
  const hasEndButtons = endButtons.some(Boolean);
  const hasButtons = hasStartButtons || hasEndButtons;

  const isStartIconGroup = hasStartButtons && startButtons.every(getIcon);
  const isEndIconGroup = hasEndButtons && endButtons.every(getIcon);

  return (
    <div className={cx('nav-bar', className, bottomBordered && InnerBorder.bottom)}>
      {hasButtons && (
        <div className={cx('button-groups')}>
          {hasStartButtons && (
            <div className={cx('group')}>
              {start && (
                <NavButton shift={isStartIconGroup && 'right'} {...start} />
              )}
              {startSecondary && (
                <NavButton shift={isStartIconGroup && 'left'} {...startSecondary} />
              )}
            </div>
          )}
          {hasEndButtons && (
            <div className={cx('group')}>
              {endSecondary && (
                <NavButton stub shift={isEndIconGroup && 'right'} {...endSecondary} />
              )}
              {end && (
                <NavButton stub shift={isEndIconGroup && 'left'} {...end} />
              )}
            </div>
          )}
        </div>
      )}

      {/* центральный блок */}
      <div className={cx('main')}>
        {Boolean(title) && (
          <div className={cx('title', 'truncate')}>{title}</div>
        )}
        {Boolean(subtitle) && (
          <div className={cx('subtitle', 'truncate')}>{subtitle}</div>
        )}
      </div>

      {hasButtons && (
        <div className={cx('button-groups', 'end')}>
          {hasEndButtons && (
            <div className={cx('group')}>
              {endSecondary && (
                <NavButton shift={isEndIconGroup && 'right'} {...endSecondary} />
              )}
              {end && (
                <NavButton shift={isEndIconGroup && 'left'} {...end} />
              )}
            </div>
          )}
          {hasStartButtons && (
            <div className={cx('group')}>
              {start && (
                <NavButton stub shift={isStartIconGroup && 'right'} {...start} />
              )}
              {startSecondary && (
                <NavButton stub shift={isStartIconGroup && 'left'} {...startSecondary} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ButtonPropsShape = PropTypes.shape({
  text: PropTypes.string,
  icon: PropTypes.func,
});

NavBar.propTypes = {
  /**
   * Заголовок.
   */
  title: PropTypes.string,

  /**
   * Подзаголовок.
   */
  subtitle: PropTypes.string,

  /**
   * Класс корневого элемента.
   */
  className: PropTypes.string,

  /**
   * Нужна ли внутренняя граница снизу.
   */
  bottomBordered: PropTypes.bool,

  /**
   * Данные кнопок.
   */
  buttons: PropTypes.shape({
    start: ButtonPropsShape,
    startSecondary: ButtonPropsShape,
    end: ButtonPropsShape,
    endSecondary: ButtonPropsShape,
  }),
};

/**
 * Компонент кнопки (с текстом или иконки).
 * @param {Object} props Свойства.
 * @param {string} [props.text] Текст.
 * @param {Function} props.icon Функция возвращающая React-элемент svg-иконки (имеет приоритет над "text").
 * @param {boolean} props.stub Является ли кнопка заглушкой (будет скрыта через aria, не будет содержать иконки).
 * @param {'left'|'right'} [props.shift] Определяет как сместить иконку внутри кнопки.
 * @param {string} [props.className] Класс.
 * @return {ReactElement} Компонент кнопки.
 */
export const NavButton = ({
  text,
  icon: Icon,
  stub = false,
  shift,
  className,
  ...buttonProps
}) => (
  <button
    {...buttonProps}
    className={cx(
      'button',
      Icon && 'icon',
      shift === 'left' && 'shift-left',
      shift === 'right' && 'shift-right',
      stub && 'stub',
      className
    )}
    aria-hidden={stub ? 'true' : undefined}
  >
    {
      Icon && !stub
        ? <Icon fill={COLORS.get('gray87')} aria-hidden='true' />
        : text
    }
  </button>
);

NavButton.propTypes = {
  /**
   * Текст.
   */
  text: PropTypes.string,

  /**
   * Функция возвращающая React-элемент svg-иконки (имеет приоритет над "text").
   */
  icon: PropTypes.func,

  /**
   * Является ли кнопка заглушкой (будет скрыта через aria, не будет содержать иконки).
   */
  stub: PropTypes.bool,

  /**
   * Определяет как сместить иконку внутри кнопки.
   */
  shift: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.oneOf(['left', 'right']),
  ]),

  /**
   * Класс.
   */
  className: PropTypes.string,
};

export default NavBar;

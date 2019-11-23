import React from 'react';
import Icon from '../icon';
import arrowUp from '../icons/arrow-up.svg';
import arrowLeft from '../icons/arrow-left.svg';
import arrowDown from '../icons/arrow-down.svg';
import arrowRight from '../icons/arrow-right.svg';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './nav-button.scss';

const cx = classnames.bind(classes);

/**
 * Компонент кнопки управления каруселью.
 * @param {Object} props Свойства.
 * @param {'forward'|'backward'} props.type Тип прокрутки.
 * @param {boolean} props.vertical Прокручивает ли кнопка карусель по вертикали.
 * @param {boolean} props.canUse Активна ли кнопка.
 * @param {Function} props.onUse Сработает при нажатии.
 * @return {ReactElement} Кнопка управления каруселью.
 */
export const NavButton = ({
  type,
  vertical,
  canUse = true,
  onUse,
}) => (
  <button
    type='button'
    className={cx([
      'carousel-control',
      vertical && 'vertical',
      type,
    ])}
    onClick={onUse}
    aria-label={type === 'backward' ? 'назад' : 'вперед'}
    children={(
      <Icon
        size={10}
        role='presentation'
        icon={getIcon({ type, vertical })}
      />
    )}
    disabled={!canUse}
  />
);

NavButton.propTypes = {
  /**
   * Тип прокрутки.
   */
  type: PropTypes.oneOf(['forward', 'backward']),

  /**
   * Прокручивает ли кнопка карусель по вертикали.
   */
  vertical: PropTypes.bool,

  /**
   * Активна ли кнопка.
   */
  canUse: PropTypes.bool,

  /**
   * Сработает при нажатии.
   */
  onUse: PropTypes.func,
};

/**
 * Возвращает иконку кнопки.
 * @param {Object} props Свойства.
 * @param {boolean} props.vertical Прокручивает ли кнопка карусель по вертикали.
 * @param {'forward'|'backward'} props.type Тип прокрутки.
 * @return {ReactElement} Иконка.
 */
export const getIcon = ({ type, vertical }) => {
  let icon;

  if (type === 'backward') {
    icon = vertical ? arrowUp : arrowLeft;
  } else {
    icon = vertical ? arrowDown : arrowRight;
  }

  return icon;
};

export default NavButton;

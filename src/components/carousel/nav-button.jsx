import React from 'react';
import UpSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/up';
import LeftSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/left';
import DownSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/down';
import RightSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/right';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './nav-button.scss';

const cx = classnames.bind(classes);

/**
 * Компонент кнопки управления каруселью.
 * @param {Object} props Свойства.
 * @param {'forward'|'backward'} props.type Тип прокрутки.
 * @param {boolean} props.vertical Прокручивает ли кнопка карусель по вертикали.
 * @param {boolean} props.disabled Отключена ли кнопка.
 * @param {Function} props.onClick Сработает при нажатии.
 * @return {ReactElement} Кнопка управления каруселью.
 */
export const NavButton = ({
  type,
  vertical,
  disabled,
  onClick,
}) => {
  const Icon = getIcon({ type, vertical });

  return (
    <button
      type='button'
      className={cx([
        'carousel-control',
        vertical && 'vertical',
        type,
      ])}
      onClick={onClick}
      aria-label={type === 'backward' ? 'назад' : 'вперед'}
      children={(
        <Icon role='presentation' fill='currentColor' />
      )}
      disabled={disabled}
    />
  );
};

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
   * Отключена ли кнопка.
   */
  disabled: PropTypes.bool,

  /**
   * Сработает при нажатии.
   */
  onClick: PropTypes.func,
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
    icon = vertical ? UpSVG : LeftSVG;
  } else {
    icon = vertical ? DownSVG : RightSVG;
  }

  return icon;
};

export default NavButton;

import React from 'react';
import classnames from 'classnames/bind';
import { COLORS } from '../colors';
import classes from './arrow-button.scss';
import UpSVG from './icons/24x24/arrow-up.svg';
import RightSVG from './icons/24x24/arrow-right.svg';
import DownSVG from './icons/24x24/arrow-down.svg';
import LeftSVG from './icons/24x24/arrow-left.svg';
import TopSmallSVG from './icons/16x16/arrow-up.svg';
import RightSmallSVG from './icons/16x16/arrow-right.svg';
import DownSmallSVG from './icons/16x16/arrow-down.svg';
import LeftSmallSVG from './icons/16x16/arrow-left.svg';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

const ICONS = {
  s: {
    up: TopSmallSVG,
    right: RightSmallSVG,
    down: DownSmallSVG,
    left: LeftSmallSVG,
  },
  l: {
    up: UpSVG,
    right: RightSVG,
    down: DownSVG,
    left: LeftSVG,
  },
};

/**
 * Компонент круглой кнопки со стрелкой.
 * @param {Object} props Свойства. Поддерживаются свойства элемента button.
 * @param {'s'|'l'} [props.size='l'] Размер.
 * @param {'up'|'right'|'down'|'left'} [props.direction='right'] Направление (отвечает за иконку).
 * @param {string} [props.className] CSS-класс.
 * @return {ReactElement} Компонент кнопки.
 */
const ArrowButton = ({
  size = 'l',
  direction = 'right',
  className,
  ...buttonProps
}) => {
  const Icon = ICONS[size][direction];

  return (
    <button
      {...buttonProps}
      className={cx(
        'arrow-button',
        `size-${size}`,
        className
      )}
    >
      <Icon aria-hidden fill={COLORS.get('gray87')} />
    </button>
  );
};

ArrowButton.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'l']),
  direction: PropTypes.oneOf(['up', 'right', 'down', 'left']),
  className: PropTypes.string,
};

export default ArrowButton;

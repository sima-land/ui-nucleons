import React from 'react';
import classes from './wish.scss';
import classnames from 'classnames/bind';
import Link from '../link';
import Icon from '../icon';
import filledHeart from '../icons/filled-heart.svg';
import PropTypes from 'prop-types';
import { useIsTouchDevice } from '../hooks';

const cx = classnames.bind(classes);

/**
 * Кнопка добавления товара в избранное.
 * @param {Object} props Свойства компонента.
 * @param {Function} props.onClick Обработка клика на компоненте.
 * @param {boolean} [props.isChecked] Добавлен ли в избранное товар.
 * @param {boolean} [props.isDisplayText] Признак вывода текста.
 * @param {number} [props.size=16] Размер иконки.
 * @return {ReactElement} Кнопка добавления товара в избранное.
 */
const Wish = ({
  isChecked,
  onClick,
  size = 16,
  isDisplayText,
}) => {
  const isTouchDevice = useIsTouchDevice();
  return (
    <Link
      onClick={onClick}
      className={cx('wrap', isTouchDevice && 'touch')}
      color='black'
      aria-label={isChecked ? 'Убрать из избранного' : 'Добавить в избранное'}
      pseudo
    >
      <Icon
        icon={filledHeart}
        className={cx(!isDisplayText ? 'icon-no-fill' : 'icon-fill', isChecked && 'active')}
        size={size}
        role='presentation'
      />
      {isDisplayText && (
        <span aria-hidden className={cx('text')}>
          {isChecked ? 'В избранном' : 'В избранное'}
        </span>
      )}
    </Link>
  );
};

Wish.propTypes = {
  /**
   * Признак добавление товара в избранное.
   */
  isChecked: PropTypes.bool,

  /**
   * Сработает при нажатии на компонент.
   */
  onClick: PropTypes.func,

  /**
   * Размер изображения.
   */
  size: PropTypes.number,

  /**
   * Признак вывода текста.
   */
  isDisplayText: PropTypes.bool,
};

Wish.displayName = 'Wish';
export default Wish;

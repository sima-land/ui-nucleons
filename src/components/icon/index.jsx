import React from 'react';
import classnames from 'classnames/bind';
import imageCap from '../icons/image-cap.svg';
import styles from './icon.scss';
import Type from 'prop-types';

const cx = classnames.bind(styles);
export const ICON_COLORS = ['white', 'dark-gray', 'dark-blue', 'gray'];

/**
 * Компонент SVG-Иконки.
 * @param {Object} props Свойства Компонента.
 * @param {string} props.icon Импортированная иконка.
 * @param {string} props.color Если передается - применяется этот цвет, если нет, то цвет наследуется от color родителя.
 * @param {number} props.size Размеры иконки.
 * @param {boolean} props.inline Если элемент должен выглядеть как встроенный.
 * @param {string} props.className Название класса.
 * @param {...*} restProps Остальные параметры.
 * @param {Function} props.onClick Обработчик клика на иконке.
 * @return {React.Element} Svg-icon.
 */
const Icon = ({ icon, size, color, inline, className, ...restProps }) => {
  const iconClasses = cx(
    'icon', {
      [`icon-${color}`]: color && ICON_COLORS.includes(color),
      ['icon-block']: !inline,
    },
    className
  );
  const Image = typeof icon === 'function' ? icon : imageCap;

  return (
    <Image
      width={size}
      height={size}
      className={iconClasses}
      viewBox='0 0 36 36'
      {...restProps}
    />
  );
};

Icon.propTypes = {
  /**
   * SVG импортированный в компонент.
   */
  icon: Type.func,
  /**
   * Размер иконки.
   */
  size: Type.number,
  /**
   * Цвет иконки. Если передается - применяется этот цвет, если нет, то цвет наследуется от color родителя.
   */
  color: Type.oneOf(['white', 'dark-gray', 'dark-blue', 'gray']),
  /**
   * Устанавливает display: inline если иконка должна быть встроена в текст.
   */
  inline: Type.bool,
  /**
   * Название css-класса, который нужно добавить к классам компонента.
   */
  className: Type.string,
  /**
   * Обработчик клика на иконке.
   */
  onClick: Type.func,
};

export default Icon;

import React from 'react';
import classnames from 'classnames/bind';
import icons from './icons';
import styles from './icon.scss';
import Type from 'prop-types';

const cx = classnames.bind(styles);
const ICON_COLORS = ['white', 'dark-gray', 'dark-blue', 'gray'];

/**
 * SVG Иконка.
 * @param {Object} props Свойства Компонента.
 * @param {string} props.iconName Название иконки.
 * @param {string} props.icon Импортированная иконка.
 * @param {string} props.color Если передается - применяется этот цвет, если нет, то цвет наследуется от color родителя.
 * @param {number} props.size Размеры иконки.
 * @param {boolean} props.inline Если элемент должен выглядеть как встроенный.
 * @param {string} props.className Название класса.
 * @param {Object} props.params Остальные параметры.
 * @return {React.Element} Svg-icon.
 */
const Icon = ({ iconName, icon, size = 36, color, inline, className, ...params }) => {
  const iconClasses = cx(
    'icon', {
      [`icon-${color}`]: color && ICON_COLORS.includes(color),
      [styles['icon-block']]: !inline,
    },
    className
  );
  let Image = icons['image-cap'];
  if (iconName && icons[iconName]) {
    Image = icons[iconName];
  } else if (icon) {
    Image = icon;
  }
  return (
    <Image width={size}
      height={size}
      className={iconClasses}
      viewBox='0 0 36 36'
      {...params}
    />
  );
};

Icon.propTypes = {
  /**
   * Название иконки из папки icons
   */
  iconName: Type.string,
  /**
   * SVG импортированный в компонент
   */
  icon: Type.func,
  /**
   * Размер иконки
   */
  size: Type.number,
  /**
   *  Цвет иконки. если передается - применяется этот цвет, если нет, то цвет наследуется от color родителя
   *  Допустимые значения ['white' | 'darkGray' | 'darkBlue' | 'gray']
   */
  color: Type.string,
  /**
   * display: inline если иконка должна быть встроена в текст
   */
  inline: Type.bool,
  /**
   * Название css-класса, который нужно добавить к классам компонента
   */
  className: Type.string,
  /**
   * Остальные параметры
   */
  params: Type.object,
};

export default Icon;

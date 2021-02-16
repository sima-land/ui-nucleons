import React from 'react';
import classnames from 'classnames/bind';
import StubSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/search';
import classes from './icon.scss';
import Type from 'prop-types';
import { color as getColorClass } from '../styling/colors';
import { COLORS } from '../constants';

const cx = classnames.bind(classes);

/**
 * Компонент SVG-Иконки.
 * @param {Object} props Свойства.
 * @param {string} props.icon Импортированная иконка.
 * @param {string} props.color Если передается - применяется этот цвет, если нет, то цвет наследуется от color родителя.
 * @param {number} props.size Размеры иконки.
 * @param {boolean} props.inline Если элемент должен выглядеть как встроенный.
 * @param {string} props.className Название класса.
 * @param {Function} props.onClick Обработчик клика на иконке.
 * @return {ReactElement} Компонент SVG-Иконки.
 */
const Icon = ({ icon, size, color, inline, className, ...restProps }) => {
  const iconClasses = cx(
    'icon',
    !inline && 'icon-block',
    getColorClass(color),
    className
  );
  const Image = typeof icon === 'function' ? icon : StubSVG;

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
  color: Type.oneOf([...COLORS.keys()]),

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

import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { COLORS } from '../constants';
import PropTypes from 'prop-types';
import PersonSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/person';
import classes from './avatar.scss';
import { getMonogram } from './utils';
import { color as colorClass } from '../styling/colors';

const cx = classnames.bind(classes);

const SIZES = [40, 48, 56, 64, 72, 104];

const ICON_SIZES = {
  40: 16,
  48: 24,
  56: 24,
  64: 24,
  72: 24,
  104: 24,
};

/**
 * Компонент аватара.
 * @param {Object} props Свойства компонента.
 * @param {number} props.size Размер аватара.
 * @param {string} [props.imageUrl] Ссылка на картинку.
 * @param {string} [props.bgColor='gray4'] Цвет аватара без картинки.
 * @param {number} [props.bgOpacity=1] Цвет аватара без картинки.
 * @param {string} props.textColor Цвет текста без картинки.
 * @param {string} props.title Текст без картинки.
 * @param {string} [props.monogram] Монограмма без картинки.
 * @param {string} [props.className] Класс.
 * @param {React.ComponentType} [props.icon] Иконка.
 * @param {Object} props.style Стиль элементов rect/image, формирующего маску "super ellipse".
 * @return {ReactElement} Компонент.
 */
export const Avatar = ({
  size = 72,
  imageUrl,
  bgColor = 'gray4',
  bgOpacity = 1,
  textColor = 'gray87',
  title,
  monogram = getMonogram(title),
  className,
  icon: Icon = PersonSVG,
  style,
}) => {
  const [needImage, toggleImage] = useState(Boolean(imageUrl));

  useEffect(() => {
    toggleImage(Boolean(imageUrl));
  }, [imageUrl]);

  return (
    <div
      className={cx(
        'root',
        `size-${SIZES.includes(size) ? size : 72}`,
        colorClass(textColor),
        className
      )}
      style={style}
    >
      {/* фон, необходим в том числе под изображениями так как могут быть PNG */}
      <div
        className={cx('shape')}
        style={
          !needImage
            ? {
              opacity: bgOpacity,
              background: COLORS.get(bgColor),
            }
            : {}
        }
      />

      {/* инициалы/иконка */}
      {!needImage && (
        <div className={cx('content')}>
          {
            monogram
              ? monogram.slice(0, 2).toUpperCase()
              : (
                <Icon
                  fill={COLORS.get(textColor)}
                  width={ICON_SIZES[size]}
                  height={ICON_SIZES[size]}
                  className={cx('icon')}
                />
              )
          }
        </div>
      )}

      {/* изображение */}
      {needImage && (
        <img
          src={imageUrl}
          alt=''
          className={cx('image')}
          onError={() => toggleImage(false)}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Размер аватара.
   */
  size: PropTypes.number,

  /**
   * Ссылка на картинку.
   */
  imageUrl: PropTypes.string,

  /**
   * Цвет фона без картинки.
   */
  bgColor: PropTypes.string,

  /**
   * Непрозрачность фона без картинки.
   */
  bgOpacity: PropTypes.number,

  /**
   * Цвет текста без картинки.
   */
  textColor: PropTypes.string,

  /**
   * Текст без картинки.
   */
  title: PropTypes.string,

  /**
   * Монограмма без картинки.
   */
  monogram: PropTypes.string,

  /**
   * Свойства Icon.
   */
  iconProps: PropTypes.object,

  /**
   * Свойства элемента с текстом.
   */
  textProps: PropTypes.object,

  /**
   * Стиль элементов rect/image, формирующего маску "super ellipse".
   */
  style: PropTypes.object,

  /**
   * Компонент, который выведет иконку.
   */
  icon: PropTypes.elementType,

  /**
   * Класс.
   */
  className: PropTypes.string,
};

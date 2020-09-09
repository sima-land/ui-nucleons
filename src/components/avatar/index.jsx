import React from 'react';
import classnames from 'classnames/bind';
import Icon from '../icon';
import { COLORS } from '../constants';
import { color } from '../styling/colors';
import PropTypes from 'prop-types';
import userPureSvg from '../icons/filled-person.svg';
import classes from './avatar.scss';
import { useImageLoad, getMonogram } from './utils';

const cx = classnames.bind(classes);

/**
 * Компонент информации о пользователе.
 * @param {Object} props Свойства компонента.
 * @param {number} props.size Размер аватара.
 * @param {string} props.imageUrl Ссылка на картинку.
 * @param {string} props.color Цвет аватара без картинки.
 * @param {string} props.textColor Цвет текста без картинки.
 * @param {string} props.title Текст без картинки.
 * @param {string} props.monogram Монограмма без картинки.
 * @param {Object} props.iconProps Свойства Icon.
 * @param {Object} props.textProps Свойства элемента с текстом.
 * @param {Object} props.bgStyle Стиль элемента rect, формирующего фон.
 * @param {Object} props.clipStyle Стиль элементов rect/image, формирующего маску "super ellipse".
 * @return {ReactElement} Компонент.
 */
const Avatar = ({
  size = 80,
  imageUrl,
  color: bgColor = 'gray4',
  textColor = 'gray87',
  title,
  monogram = getMonogram(title),
  iconProps = { color: 'gray38' },
  textProps = {},
  bgStyle,
  clipStyle,
}) => {
  // в IE11/React для <image /> не работает onerror/onload - подгружаем через new Image()
  const needShowImage = useImageLoad(imageUrl);

  return (
    <span className={cx('avatar')} style={{ width: size, height: size }}>
      {/* IE11 поддерживает CSS-свойство clip-path только для SVG-элементов, рисуем SVG */}
      <svg className={cx('super-ellipse')}>
        {needShowImage ? (
          <>
            <image
              preserveAspectRatio='xMidYMid slice' // для обрезания не квадратных изображений (aka cover)
              href={imageUrl}
              style={clipStyle} // вешаем clipPath именно на сам image для работы в IE11
            />
            <rect
              x={0}
              y={0}
              fill='rgba(0, 0, 0, .04)'
              style={clipStyle} // вешаем clipPath именно на сам rect для работы в IE11

              // для работы в IE11 width/height должны быть указаны как атрибуты
              width={size}
              height={size}
            />
          </>
        ) : (
          <rect
            x={0}
            y={0}
            fill={COLORS.has(bgColor) ? COLORS.get(bgColor) : bgColor}
            style={{
              ...bgStyle,
              ...clipStyle, // вешаем clipPath именно на сам rect для работы в IE11
            }}

            // для работы в IE11 width/height должны быть указаны как атрибуты
            width={size}
            height={size}
          />
        )}
      </svg>
      {!needShowImage && (
        <span className={cx('content')}>
          {monogram ? (
            <span
              role='presentation'
              {...textProps}
              className={cx(
                'title',
                'truncate',
                color(textColor),
                textProps.className
              )}
              children={monogram}
            />
          ) : (
            <Icon
              icon={userPureSvg}
              size={32}
              aria-hidden
              {...iconProps}
            />
          )}
        </span>
      )}
    </span>
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
   * Цвет аватара без картинки.
   */
  color: PropTypes.string,

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
   * Стиль элемента rect, формирующего фон.
   */
  bgStyle: PropTypes.object,

  /**
   * Стиль элементов rect/image, формирующего маску "super ellipse".
   */
  clipStyle: PropTypes.object,
};

export default Avatar;

import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { COLORS, Token } from '../colors';
import PersonSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/person';
import classes from './avatar.scss';
import { getMonogram } from './utils';
import { color as colorClass } from '../styling/colors';

export interface Props {
  size?: number
  imageUrl?: string
  bgColor?: Token
  bgOpacity?: number
  textColor?: Token
  title?: string
  monogram?: string
  className?: string
  style?: React.CSSProperties
  'data-testid'?: string
}

const cx = classnames.bind(classes);

type Size = 40 | 48 | 56 | 64 | 72 | 80 | 104;

const SIZES: ReadonlyArray<number> = [40, 48, 56, 64, 72, 80, 104];

const ICON_SIZES: Readonly<Record<Size, number>> = {
  40: 16,
  48: 24,
  56: 24,
  64: 24,
  72: 24,
  80: 24,
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
 * @param {string} props.'data-testid' Идентификатор для систем автоматизированного тестирования.
 * @return {ReactElement} Компонент.
 */
export const Avatar: React.FC<Props> = ({
  size: sizeProp = 72,
  imageUrl,
  bgColor = 'gray4',
  bgOpacity = 1,
  textColor = 'gray87',
  title,
  monogram = getMonogram(title),
  className,
  style,
  'data-testid': dataTestId,
}) => {
  const [needImage, toggleImage] = useState(Boolean(imageUrl));

  useEffect(() => {
    toggleImage(Boolean(imageUrl));
  }, [imageUrl]);

  const size: Size = SIZES.includes(sizeProp) ? (sizeProp as Size) : 72;

  return (
    <div
      data-testid={dataTestId}
      className={cx(
        'root',
        `size-${size}`,
        colorClass(textColor),
        className
      )}
      style={{
        ...style,
        '--avatar-color': !needImage ? COLORS.get(bgColor) : undefined,
        '--avatar-color-opacity': bgOpacity,
      } as any}
    >
      {/* инициалы/иконка */}
      {!needImage && (
        <>
          {
            monogram
              ? (
                <span className={cx('monogram')}>
                  {monogram.slice(0, 2).toUpperCase()}
                </span>
              )
              : (
                <PersonSVG
                  fill={COLORS.get(textColor)}
                  width={ICON_SIZES[size]}
                  height={ICON_SIZES[size]}
                  className={cx('icon')}
                />
              )
          }
        </>
      )}

      {/* изображение */}
      {needImage && (
        <>
          <img
            src={imageUrl}
            alt=''
            className={cx('layer', 'image')}
            onError={() => toggleImage(false)}
          />
          <div className={cx('layer', 'image-overlay')} />
        </>
      )}
    </div>
  );
};
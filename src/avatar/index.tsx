import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { COLORS, Token } from '../colors';
import PersonSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/person';
import classes from './avatar.module.scss';
import { getMonogram } from './utils';
import { color as colorClass } from '../styling/colors';

export interface Props {

  /** Цвет аватара без картинки. */
  bgColor?: Token

  /** Цвет аватара без картинки. */
  bgOpacity?: number

  /** Класс. */
  className?: string

  /** Ссылка на картинку. */
  imageUrl?: string

  /** Монограмма без картинки. */
  monogram?: string

  /** Размер аватара. */
  size?: number

  /** Стиль элементов rect/image, формирующего маску "super ellipse". */
  style?: React.CSSProperties

  /** Цвет текста без картинки. */
  textColor?: Token

  /** Текст без картинки. */
  title?: string

  /** Идентификатор для систем автоматизированного тестирования. */
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
 * @param props Свойства компонента.
 * @return Компонент.
 */
export const Avatar = ({
  size: sizeProp = 72,
  imageUrl,
  bgColor = 'gray4',
  bgOpacity = 1,
  textColor = 'gray87',
  title,
  monogram = getMonogram(title),
  className,
  style,
  'data-testid': testId = 'avatar',
}: Props) => {
  const [needImage, toggleImage] = useState(Boolean(imageUrl));

  useEffect(() => {
    toggleImage(Boolean(imageUrl));
  }, [imageUrl]);

  const size: Size = SIZES.includes(sizeProp) ? (sizeProp as Size) : 72;

  return (
    <div
      data-testid={testId}
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

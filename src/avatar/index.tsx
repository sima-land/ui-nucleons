import { CSSProperties, useEffect, useState } from 'react';
import { COLORS, Token } from '../colors';
import { getMonogram } from './utils';
import { color as colorClass } from '../styling/colors';
import PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';
import classnames from 'classnames/bind';
import styles from './avatar.module.scss';

export interface AvatarProps {
  /** Цвет аватара без картинки. */
  bgColor?: Token;

  /** Цвет аватара без картинки. */
  bgOpacity?: number;

  /** Класс. */
  className?: string;

  /** Ссылка на картинку. */
  imageUrl?: string;

  /** Монограмма без картинки. */
  monogram?: string;

  /** Размер аватара. */
  size?: number;

  /** Стиль элементов rect/image, формирующего маску "super ellipse". */
  style?: CSSProperties;

  /** Цвет текста без картинки. */
  textColor?: Token;

  /** Текст без картинки. */
  title?: string;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

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

const cx = classnames.bind(styles);

/**
 * Компонент аватара.
 * @param props Свойства компонента.
 * @return Элемент.
 */
export const Avatar = ({
  size: sizeProp = 72,
  imageUrl,
  bgColor = 'basic-gray4',
  bgOpacity = 1,
  textColor = 'basic-gray87',
  title,
  monogram = getMonogram(title),
  className,
  style,
  'data-testid': testId = 'avatar',
}: AvatarProps) => {
  const [needImage, toggleImage] = useState(Boolean(imageUrl));

  useEffect(() => {
    toggleImage(Boolean(imageUrl));
  }, [imageUrl]);

  const size: Size = SIZES.includes(sizeProp) ? (sizeProp as Size) : 72;

  return (
    <div
      data-testid={testId}
      className={cx('root', `size-${size}`, colorClass(textColor), className)}
      style={
        {
          ...style,
          '--avatar-color': !needImage ? COLORS.get(bgColor) : undefined,
          '--avatar-color-opacity': bgOpacity,
        } as CSSProperties
      }
    >
      {/* инициалы/иконка */}
      {!needImage && (
        <>
          {monogram ? (
            <span className={cx('monogram')}>{monogram.slice(0, 2).toUpperCase()}</span>
          ) : (
            <PersonSVG
              fill={COLORS.get(textColor)}
              width={ICON_SIZES[size]}
              height={ICON_SIZES[size]}
              className={cx('icon')}
            />
          )}
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

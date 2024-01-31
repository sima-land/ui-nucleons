import type { AvatarProps } from './types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './avatar.m.scss';

const cx = classNames.bind(styles);

/**
 * Аватар - блок для репрезентации пользователя с помощью картинки, инициалов или иконки-заглушки.
 * @param props Свойства.
 * @return Элемент.
 */
export function Avatar({
  src,
  className,
  style,
  children,
  'data-testid': testId = 'avatar',
}: AvatarProps) {
  const [needImage, toggleNeedImage] = useState(() => Boolean(src));

  useEffect(() => {
    toggleNeedImage(Boolean(src));
  }, [src]);

  const rootClassName = cx('root', needImage && 'image-overlay', className);

  return (
    <span className={rootClassName} style={style} data-testid={testId}>
      {/* изображение */}
      {needImage && (
        <>
          <img src={src} alt='' className={cx('image')} onError={() => toggleNeedImage(false)} />
        </>
      )}

      {/* содержимое, например инициалы, иконка, ... */}
      {!needImage && <span className={cx('content')}>{children}</span>}
    </span>
  );
}

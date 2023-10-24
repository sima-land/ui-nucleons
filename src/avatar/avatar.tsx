import { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './avatar.module.scss';
import type { AvatarProps } from './types';

const cx = classnames.bind(styles);

/**
 * Компонент аватара.
 * @param props Свойства компонента.
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

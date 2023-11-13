import type { DotNavProps } from './types';
import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './dot-nav.module.scss';

const cx = classNames.bind(styles);

/**
 * Точки навигации. Используются в основном рядом с каруселями и слайдерами.
 * @param props Свойства.
 * @return Элемент.
 */
export function DotNav({ size = 's', current = 0, total = 1, onSelect }: DotNavProps) {
  const withShift = total > 4;

  const itemSize = 14;
  const itemGutter = { s: 0, l: 6 }[size];
  const maxWidth = itemSize * 5 + itemGutter * 4;
  const totalWidth = itemSize * total + itemGutter * (total - 1);

  const shift = useShift(current, total);
  const correction = withShift ? itemSize + itemGutter : (maxWidth - totalWidth) / 2;

  return (
    <div className={cx('root', `size-${size}`)} style={{ width: maxWidth, height: itemSize }}>
      {Array(total)
        .fill(0)
        .map((zero, index) => {
          const position = index - shift + 1;

          return (
            <div
              key={index}
              style={{
                left: `${correction + (index - shift) * (itemSize + itemGutter)}px`,
              }}
              onClick={() => onSelect?.(index)}
              className={cx(
                'item',
                index === current && 'active',
                withShift && (position <= 0 || position >= 4) && 'distant',
              )}
            />
          );
        })}
    </div>
  );
}

/**
 * Определяет необходимое для точек навигации смещение.
 * @param current Индекс выбранной точки.
 * @param total Количество точек.
 * @return Смещение.
 */
function useShift(current: number, total: number) {
  const shiftRef = useRef(0);
  const prevCurrentRef = useRef(0);

  if (total > 4) {
    const currentPos = current - shiftRef.current;
    const prevCurrent = prevCurrentRef.current;
    const prevCurrentPos = prevCurrent - shiftRef.current;

    let newShift = shiftRef.current;

    if (currentPos > 2) {
      const correction = Math.max(prevCurrentPos, 2) + shiftRef.current - prevCurrent;
      newShift += current - prevCurrent - correction;
    } else if (currentPos < 0) {
      const correction = Math.min(prevCurrentPos, 0) + shiftRef.current - prevCurrent;
      newShift -= prevCurrent - current + correction;
    }

    shiftRef.current = newShift;
  }

  prevCurrentRef.current = current;

  return shiftRef.current;
}

import React, { useRef } from 'react';
import { times } from 'lodash';
import classnames from 'classnames/bind';
import styles from './dot-nav.module.scss';

export type DotNavSize = 's' | 'l';

export interface DotNavProps {
  /** Индекс выбранной точки. */
  current?: number;

  /** Количество точек. */
  total?: number;

  /** Сработает при выборе точки. */
  onSelect?: (index: number) => void;

  /** Размер. */
  size?: DotNavSize;
}

const cx = classnames.bind(styles);

/**
 * Компонент точек навигации для каруселей и слайдеров.
 * @param props Свойства.
 * @return Элемент.
 */
export const DotNav = ({ size = 's', current = 0, total = 1, onSelect }: DotNavProps) => {
  const withShift = total > 4;

  const itemSize = 14;
  const itemGutter = { s: 0, l: 6 }[size];
  const maxWidth = itemSize * 5 + itemGutter * 4;
  const totalWidth = itemSize * total + itemGutter * (total - 1);

  const shift = useShift(current, total);
  const correction = withShift ? itemSize + itemGutter : (maxWidth - totalWidth) / 2;

  return (
    <div className={cx('root', `size-${size}`)} style={{ width: maxWidth, height: itemSize }}>
      {times(total).map(index => {
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
};

/**
 * Определяет необходимое для точек навигации смещение.
 * @param current Индекс выбранной точки.
 * @param total Количество точек.
 * @return Смещение.
 */
const useShift = (current: number, total: number) => {
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
};

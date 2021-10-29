import React, { useEffect, useRef } from 'react';
import { Hint, HintProps } from '../hint';
import { PlaceAt } from './utils';
import classnames from 'classnames/bind';
import styles from './positioning-hint.module.scss';
import { useLayer } from '../helpers/layer';

const cx = classnames.bind(styles);

interface Props extends HintProps {
  openerRef: React.RefObject<Element | undefined | null>;
}

/**
 * Хинт, который выводится рядом с целевым элементом.
 * @param props Свойства.
 * @return Элемент.
 */
export const PositioningHint = ({ children, direction, openerRef }: Props) => {
  const layer = useLayer();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && openerRef.current) {
      ref.current.classList.remove(cx('hidden'));
      PlaceAt[direction](ref.current, openerRef.current);
    }
  }, [direction, children]);

  return (
    <Hint
      ref={ref}
      direction={direction}
      className={cx('hint', 'hidden')}
      style={{ zIndex: layer + 1 }}
      children={children}
    />
  );
};

import React, { useCallback, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { getScrollParent } from '../helpers/get-scroll-parent';
import { placeTooltip } from './utils';
import { Tooltip } from '../tooltip';
import { useLayer } from '../helpers/layer';
import { useOutsideClick } from '../hooks';
import on from '../helpers/on';

export interface PositioningTooltipProps {
  /** Содержимое. */
  children?: React.ReactNode;

  /** Реф с элементом, относительно которого нужно позиционироваться. */
  openerRef: React.RefObject<HTMLElement | undefined>;

  /** Сработает при клике за пределами или на крестик. */
  onDismiss?: () => void;
}

/**
 * Позиционируется относительно заданного элемента.
 * @param props Свойства.
 * @return Элемент.
 */
export const PositioningTooltip = ({ openerRef, children, onDismiss }: PositioningTooltipProps) => {
  const layer = useLayer();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const place = useCallback(() => {
    if (tooltipRef.current && openerRef.current) {
      placeTooltip(tooltipRef.current, openerRef.current);
      tooltipRef.current.style.opacity = '';
    }
  }, [openerRef]);

  useEffect(place);

  useEffect(() => {
    const offList: Array<() => void> = [
      on(window, 'scroll', place),
      on(window, 'resize', debounce(place, 200)),

      // у тултипа и открывашки могут быть разные scroll-родители а может быть один,
      // учитываем оба варианта и накидываем обработчик прокрутки
      ...[tooltipRef, openerRef]
        .map(ref => getScrollParent(ref.current))
        .filter(el => el !== document.body && el !== document.documentElement)
        .reduce<HTMLElement[]>((a, b) => (!a.includes(b) && a.push(b), a), [])
        .map(el => on(el, 'scroll', place)),
    ];

    return () => offList.forEach(fn => fn());
  }, []);

  useOutsideClick(tooltipRef, () => {
    onDismiss && onDismiss();
  });

  return (
    <Tooltip
      ref={tooltipRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        zIndex: layer + 1,
      }}
      onClose={onDismiss}
    >
      {children}
    </Tooltip>
  );
};

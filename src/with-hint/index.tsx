import React, { useCallback, useEffect, useRef, useState } from 'react';
import { HintProps } from '../hint';
import { getScrollParent } from '../helpers/get-scroll-parent';
import on from '../helpers/on';
import { Layer } from '../layer';
import { PositioningHint } from './positioning-hint';

type ChildrenFn = (
  ref: React.RefObject<HTMLElement | null>,
  toggle: (opened: boolean) => void
) => React.ReactNode;

export interface WithHintProps {

  /** Содержимое хинта. */
  hint: React.ReactNode

  /** С какой стороны появляется хинт. */
  direction?: HintProps['direction']

  /** Нужно ли показывать хинт. */
  shown?: boolean

  /** Контент, содержащий элемент, рядом с которым будет показан хинт. */
  children: ChildrenFn

  /** Срабатывает при закрытии. */
  onClose?: () => void
}

/**
 * Компонент вывода "хинта" рядом с заданным элементом.
 * @param props Свойства.
 * @return Элемент.
 */
export const WithHint = ({
  children,
  direction = 'top',
  hint,
  onClose,
  shown: shownProp = false,
}: WithHintProps) => {
  const [shown, toggle] = useState(false);
  const openerRef = useRef<HTMLElement>(null);

  useEffect(() => toggle(shownProp), [shownProp]);

  // следим за прокруткой
  useEffect(() => {
    if (shown && openerRef.current) {
      return on(getScrollParent(openerRef.current), 'scroll', () => {
        toggle(false);
        onClose && onClose();
      });
    }
  }, [shown]);

  return (
    <>
      {children(openerRef, toggle)}

      {shown && hint && (
        <Layer>
          <PositioningHint
            openerRef={openerRef}
            direction={direction}
            children={hint}
          />
        </Layer>
      )}
    </>
  );
};

export const useTempHint = () => {
  const timerRef = useRef<number>();
  const [shown, setShown] = useState<boolean>(false);

  const toggle = useCallback((value: boolean) => {
    setShown(value);

    window.clearTimeout(timerRef.current);

    if (value) {
      timerRef.current = window.setTimeout(() => setShown(false), 2000);
    }
  }, []);

  const onClose = useCallback(() => toggle(false), []);

  return [{ shown, onClose }, toggle] as const;
};

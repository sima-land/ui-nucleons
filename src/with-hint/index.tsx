import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Hint, HintProps } from '../hint';
import { PlaceAt } from './utils';
import classnames from 'classnames/bind';
import styles from './with-hint.scss';

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
}

const cx = classnames.bind(styles);

/**
 * Компонент вывода "хинта" рядом с заданным элементом.
 * @param props Свойства.
 * @return Элемент.
 */
export const WithHint: React.FC<WithHintProps> = ({
  children,
  direction = 'top',
  hint,
  shown: shownProp = false,
}) => {
  const hintRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement>(null);
  const [shown, toggle] = useState(false);

  useEffect(() => toggle(shownProp), [shownProp]);

  useEffect(() => {
    if (shown && hintRef.current && openerRef.current) {
      hintRef.current.classList.remove(cx('hidden'));
      PlaceAt[direction](hintRef.current, openerRef.current);
    }
  }, [shown, hint]);

  return (
    <>
      {children(openerRef, toggle)}

      {shown && hint && (
        <Hint ref={hintRef} direction={direction} className={cx('hint', 'hidden')}>
          {hint}
        </Hint>
      )}
    </>
  );
};

export const useTempHint = () => {
  const timerRef = useRef<number>();
  const [shown, setShown] = useState<boolean>(false);

  const toggle = useCallback((value: boolean) => {
    setShown(value);

    timerRef.current !== undefined && window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setShown(false), 2000);
  }, []);

  return [shown, toggle] as const;
};

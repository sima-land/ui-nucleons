import {
  CSSProperties,
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  arrow,
  autoUpdate,
  ExtendedRefs,
  flip,
  offset,
  ReferenceType,
  shift,
  Side,
  useClick,
  useDismiss,
  useFloating,
  UseFloatingProps,
  UseFloatingReturn,
  useHover,
  useInteractions,
  UseHoverProps,
  safePolygon,
} from '@floating-ui/react';
import { mapKeys } from 'lodash';
import { useLayer } from '../helpers/layer';
import { arrowSquareSize } from './hint-view';
import { useIdentityRef } from '../hooks/identity';

interface HintExtendedRefs<RT> extends ExtendedRefs<RT> {
  setArrow: (el: HTMLElement | null) => void;
}

interface UseHintFloatingReturn<RT extends ReferenceType = ReferenceType>
  extends UseFloatingReturn<RT> {
  refs: HintExtendedRefs<RT>;
}

/**
 * Возвращает конфигурацию для `useFloating` по дизайн-гайдам.
 * @param options Опции.
 * @return Конфигурация для `useFloating` по дизайн-гайдам.
 */
export function hintFloatingConfig({
  arrowRef,
}: {
  arrowRef?: MutableRefObject<HTMLElement | null>;
} = {}): Partial<UseFloatingProps> {
  return {
    placement: 'top',
    middleware: [
      offset(4 + (arrowRef ? 4 : 0)),
      flip({
        padding: 16,
        crossAxis: false,
        fallbackAxisSideDirection: 'start',
      }),
      shift({
        padding: 16,
      }),
      arrowRef &&
        arrow({
          element: arrowRef,
          padding: 4,
        }),
    ],
    whileElementsMounted: autoUpdate,
  };
}

/**
 * Расширенная версия `useFloating` для использования с `Hint`.
 * @param props Свойства useFloating.
 * @return Результат useFloating.
 */
export function useHintFloating<RT extends ReferenceType = ReferenceType>(
  props?: Partial<UseFloatingProps>,
): UseHintFloatingReturn<RT> {
  const [arrowEl, setArrowEl] = useState<HTMLElement | null>(null);
  const arrowRef = useIdentityRef(arrowEl);

  const floating = useFloating<RT>({
    ...hintFloatingConfig(arrowEl ? { arrowRef } : undefined),
    ...props,
  });

  return {
    ...floating,
    refs: {
      ...floating.refs,
      setArrow: setArrowEl,
    },
  };
}

/**
 * Возвращает стили для всплывающего хинта с учетом "слоя".
 * @param floating Результат вызова useFloating.
 * @return Стили для элемента с учетом "слоя".
 */
export function useHintFloatingStyle(
  floating: Pick<UseFloatingReturn, 'strategy' | 'x' | 'y' | 'placement' | 'middlewareData'>,
): CSSProperties {
  const layer = useLayer();

  return {
    position: floating.strategy,
    top: floating.y ?? 0,
    left: floating.x ?? 0,
    zIndex: layer + 2,
    ...mapKeys(getArrowFloatingStyle(floating), (value, key) => `--hint-arrow-${key}`),
  };
}

/**
 * Возвращает стили для стрелки между хинтом и триггером.
 * @param floating Результат вызова useFloating.
 * @return Стили для элемента с учетом "слоя".
 */
export function getArrowFloatingStyle({
  placement,
  middlewareData,
}: Pick<UseFloatingReturn, 'placement' | 'middlewareData'>): CSSProperties {
  const { arrow: arrowData } = middlewareData;

  if (!arrowData) {
    return {};
  }

  const side = placement.split('-')[0] as Side | undefined;

  // eslint-disable-next-line require-jsdoc
  const maybe = (value: number | null | undefined) => (value ? `${value}px` : '');

  // eslint-disable-next-line require-jsdoc
  const arrowShift = () => `${-arrowSquareSize / 2}px`;

  let arrowStyle: CSSProperties = {};

  switch (side) {
    case 'top': {
      arrowStyle = {
        left: maybe(arrowData?.x),
        bottom: arrowShift(),
      };
      break;
    }
    case 'bottom': {
      arrowStyle = {
        left: maybe(arrowData?.x),
        top: arrowShift(),
      };
      break;
    }
    case 'left': {
      arrowStyle = {
        top: maybe(arrowData?.y),
        right: arrowShift(),
      };
      break;
    }
    case 'right': {
      arrowStyle = {
        top: maybe(arrowData?.y),
        left: arrowShift(),
      };
      break;
    }
  }

  return arrowStyle;
}

/**
 * Показ всплывающего хинта при наведении.
 * @param floating Результат вызова useFloating.
 * @param props Пропсы для useHover.
 * @return Опции для открывающего и всплывающего элемента.
 */
export function useHintOnHover<RT extends ReferenceType = ReferenceType>(
  floating: Pick<
    UseFloatingReturn<RT>,
    'context' | 'strategy' | 'placement' | 'x' | 'y' | 'middlewareData'
  >,
  props?: UseHoverProps<RT>,
) {
  const style = useHintFloatingStyle(floating);

  const hover = useHover(floating.context, {
    handleClose: safePolygon(),
    ...props,
  });

  return useInteractions([hover, { floating: { style } }]);
}

/**
 * Показ всплывающего хинта при клике.
 * @param floating Результат вызова useFloating.
 * @return Опции для открывающего и всплывающего элемента.
 */
export function useHintOnClick(
  floating: Pick<
    UseFloatingReturn,
    'context' | 'strategy' | 'placement' | 'x' | 'y' | 'middlewareData'
  >,
) {
  const style = useHintFloatingStyle(floating);
  const click = useClick(floating.context);
  const dismiss = useDismiss(floating.context);

  return useInteractions([click, dismiss, { floating: { style } }]);
}

/**
 * Состояние хинта с автоматическим скрытием по таймауту.
 * @param initialState Начальное состояние.
 * @param options Опции.
 * @return Результат вызова `useState`.
 */
export function useTempHintState(
  initialState: boolean,
  { timeout = 3000 }: { timeout?: number } = {},
) {
  const [open, setOpen] = useState<boolean>(initialState);
  const timerRef = useRef<number | null>(null);

  const updateTimer = useCallback(
    (value: boolean): void => {
      // сбрасываем предыдущий таймер если был
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }

      // запускаем новый таймер если надо
      if (value) {
        timerRef.current = window.setTimeout(() => setOpen(false), timeout);
      }
    },
    [timeout],
  );

  useEffect(() => {
    updateTimer(open);
  }, []);

  const toggle = useCallback<Dispatch<SetStateAction<boolean>>>(
    next => {
      const state: boolean = typeof next === 'function' ? next(open) : next;

      updateTimer(state);
      setOpen(state);
    },
    [open, setOpen, updateTimer],
  );

  return [open, toggle] as const;
}

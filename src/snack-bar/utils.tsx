import classNames from 'classnames';
import { useIsomorphicLayoutEffect } from '../hooks';
import { SnackBarProps } from './types';
import { useTransition } from 'react-transition-state';
import { CSSProperties, RefObject, useCallback, TouchEvent, useRef, useContext } from 'react';
import styles from './utils.m.scss';
import { boundsOf } from '../helpers/bounds-of';
import { SnackbarContext } from './context';

type CSSPosition = CSSProperties & {
  '--snackbar-position-bottom'?: string;
  '--snackbar-position-left'?: string;
  '--snackbar-transition-duration'?: string;
};

type Point = { x: number; y: number };

type Direction = 'left' | 'right' | 'up' | 'down';

const SWIPE_THRESHOLD = 50;

/**
 * Хук для управления позиционированием (анимированным появлением/исчезанием) SnackBar.
 * @param config Конфиг.
 * @param config.props Свойства SnackBar и свойства состояния (shown).
 * Неиспользуемые свойства будут выведены в результат без изменений.
 * @return Состояние перехода и Свойства SnackBar.
 */
export function useSnackBarPositioning({
  shown,
  relatedRef,
  timeout = 300,
  duration = 4000,
  props,
}: {
  shown: boolean;
  relatedRef?: RefObject<HTMLElement>;
  timeout?: number;
  duration?: number;
  props?: SnackBarProps;
}) {
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();
  const hideStyle = useRef<CSSPosition>({});
  const touchStart = useRef<Point>({ x: 0, y: 0 });
  const closeRef = useRef<VoidFunction>();

  const { closePrevious, setClose } = useContext(SnackbarContext);

  const [state, toggle] = useTransition({
    initialEntered: shown,
    preEnter: true,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout,
  });

  let style: CSSPosition = { ...props?.style, ['--snackbar-transition-duration']: `${timeout}ms` };

  const onClose = useCallback(() => {
    // TODO setTimeout, чтобы сначала успел вычислиться стиль для закрытия при открытии нескольких снекбаров.
    setTimeout(() => props?.onClose?.());
  }, [props?.onClose]);

  const onPreEnter = useCallback(() => {
    if (!closePrevious || closePrevious !== closeRef.current) {
      closePrevious?.();
      closeRef.current = () => {
        hideStyle.current = {
          ...getEnteredStyle(relatedRef?.current),
          opacity: 0,
        };
        onClose();
      };
    }
    setClose?.({ closePrevious: closeRef.current });
  }, [closePrevious]);

  if (state.status === 'entering' || state.status === 'entered') {
    style = { ...style, ...getEnteredStyle(relatedRef?.current) };
  }

  if (state.status === 'entered') {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(onClose, duration);
  }

  if (state.status === 'exiting') {
    clearTimeout(timeoutId.current);
    style = { ...style, ...hideStyle.current };
  }

  if (state.status === 'unmounted') {
    hideStyle.current = {};
  }

  useIsomorphicLayoutEffect(() => {
    toggle(shown);
  }, [shown]);

  return {
    state,
    snackBarProps: {
      ...props,

      className: classNames(props?.className, styles.animated),
      style,

      onClose: state.status === 'entered' ? onClose : undefined,
      onMount: state.status === 'preEnter' ? onPreEnter : undefined,
      // ТО DO вынести логику определения свайпа в отдельный хук.
      onTouchStart: useCallback(
        (event: TouchEvent<HTMLElement>) => {
          event.stopPropagation();
          touchStart.current = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY,
          };
        },
        [touchStart],
      ),
      onTouchEnd: useCallback(
        (event: TouchEvent<HTMLElement>) => {
          if (props?.onClose && touchStart.current) {
            event.stopPropagation();

            const direction = getSwipeDirection(touchStart.current, {
              x: event.changedTouches[0].clientX,
              y: event.changedTouches[0].clientY,
            });

            const distance = Math.sqrt(
              Math.pow(event.changedTouches[0].clientX - touchStart.current.x, 2) +
                Math.pow(event.changedTouches[0].clientY - touchStart.current.y, 2),
            );

            if (distance >= SWIPE_THRESHOLD) {
              hideStyle.current = getSwipeCloseStyle(event.currentTarget, direction);
              onClose();
            }
          }
        },
        [touchStart, hideStyle],
      ),
    },
  };
}

/**
 * Определяет направление свайпа.
 * @param start Начальная точка касания.
 * @param end Конечная точка касания.
 * @return Направление свайпа.
 */
function getSwipeDirection(start: Point, end: Point): Direction {
  const xDistance = start.x - end.x;
  const yDistance = start.y - end.y;

  if (Math.abs(xDistance) > Math.abs(yDistance)) {
    return xDistance > 0 ? 'left' : 'right';
  }
  return yDistance > 0 ? 'up' : 'down';
}

/**
 * Формирует стили для запуска анимации скрытия элемент на свайп по нему.
 * @param target Элемент для которого произошло событие свайпа.
 * @param direction Направление свайпа.
 * @return Набор CSS-переменных для анимированного изменения положения элемента.
 */
function getSwipeCloseStyle(target: HTMLElement, direction: Direction): CSSPosition {
  const { height, width, left } = boundsOf(target);

  const position: CSSPosition = {
    '--snackbar-position-bottom': target.style.getPropertyValue('--snackbar-position-bottom'),
  };

  if (direction === 'left') {
    position['--snackbar-position-left'] = '-100%';
    position.width = `${width}px`;
  }
  if (direction === 'right') {
    position['--snackbar-position-left'] = `calc(100vw - ${left}px + 100%)`;
    position.width = `${width}px`;
  }
  if (direction === 'down') {
    position['--snackbar-position-bottom'] = undefined;
  }
  if (direction === 'up') {
    position['--snackbar-position-bottom'] =
      `calc(100vh - ${position['--snackbar-position-bottom']} + ${height}px)`;
  }

  return position;
}

/**
 * Формирует стили для анимированного появления элемента.
 * @param relative Элемент относительно которого ведётся расчёт.
 * @return Набор CSS-переменных для анимированного изменения положения элемента.
 */
function getEnteredStyle(relative?: HTMLElement | null) {
  const relativeBottom = relative ? getRelativeBottom(relative) : 0;
  return {
    ['--snackbar-position-bottom']: `calc(${relativeBottom}px + var(--snackbar-bottom-gap, 12px))`,
  };
}

/**
 * Вычисляет расстояние от нижней границы экрана для элемента SnackBar, относительно переданного элемента в соответствии с дизайн-гайдами.
 * @param relative Элемент на основе положения которого ведётся расчёт.
 * @return Расстояние от нижней границы экрана в пикселях.
 */
function getRelativeBottom(relative: HTMLElement) {
  const bottom = Number(getComputedStyle(relative)?.bottom.replace('px', ''));
  const { height, bottom: rectBottom } = boundsOf(relative);
  // Определяем зафиксирован ли внизу экрана элемент относительно которого ведётся расчёт.
  if (rectBottom === window.innerHeight - bottom) {
    return bottom + height;
  }
  return 0;
}

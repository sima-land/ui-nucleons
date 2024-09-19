import type { CSSProperties } from 'react';
import type { SidePageProps } from './types';
import { useIsomorphicLayoutEffect } from '../hooks';
import {
  type TransitionOptions,
  type TransitionState,
  useTransition,
} from 'react-transition-state';
import classNames from 'classnames';
import styles from './utils.m.scss';

/**
 * Вернет свойства SidePage для формирования отзывчивого дизайна по гайдам.
 * @param props Свойства SidePage.
 * Неиспользуемые свойства будут выведены в результат без изменений.
 * @param props.size Размер на desktop-разрешениях.
 * @return Свойства SidePage.
 */
export function getResponsiveSidePageProps(props: SidePageProps): SidePageProps {
  const { size, overlayProps, ...restProps } = props;

  return {
    ...restProps,

    size: 'unset',

    // ВАЖНО: накидываем класс именно на ModalOverlay так как размер влияет и на него в том числе
    overlayProps: {
      ...overlayProps,

      className: classNames(styles[`size-${size}`], overlayProps?.className),
    },
  };
}

/**
 * Хук для формирования перехода (плавного появления/исчезания) SidePage.
 * @param config Конфиг.
 * @param config.extraProps Свойства SidePage и свойства состояния (shown).
 * Неиспользуемые свойства будут выведены в результат без изменений.
 * @return Состояние перехода и Свойства SidePage.
 */
export function useSidePageTransition({
  shown,
  timeout = 300,
  onStateChange,
  extraProps,
}: {
  shown?: boolean;
  timeout?: number;
  onStateChange?: TransitionOptions['onStateChange'];
  extraProps?: SidePageProps;
}): {
  state: TransitionState;
  sidePageProps: SidePageProps;
} {
  const [state, toggle] = useTransition({
    initialEntered: shown,
    preEnter: true,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout,
    onStateChange,
  });

  useIsomorphicLayoutEffect(() => {
    toggle(shown);
  }, [shown]);

  return {
    state,

    sidePageProps: {
      ...extraProps,

      className: classNames(extraProps?.className, styles['side-page']),

      onClose: state.status === 'entering' ? undefined : extraProps?.onClose,

      overlayProps: {
        ...extraProps?.overlayProps,

        className: classNames(extraProps?.overlayProps?.className, styles[state.status]),

        style:
          timeout !== 300
            ? ({
                '--side-page-transition-duration': `${timeout}ms`,
                ...extraProps?.overlayProps?.style,
              } as CSSProperties)
            : extraProps?.overlayProps?.style,
      },
    },
  };
}

import React, { useEffect, useRef, useCallback } from 'react';
import { Portal } from '../portal';
import { placeTooltip } from './utils';
import classnames from 'classnames/bind';
import { useOutsideClick } from '../hooks';
import { isFunction, debounce } from 'lodash';
import on from '../helpers/on';
import { getScrollParent } from '../helpers/get-scroll-parent';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/cross';
import classes from './with-tooltip.module.scss';

// @todo почему то бросает ошибку при keyof JSX.IntrinsicElements
type ElementName = 'div' | 'span' | 'main' | 'section' | 'article' | 'aside';

type DismissCallback = (
  e: React.MouseEvent<SVGSVGElement> | MouseEvent,
  data: { byHolder: boolean }
) => void;

interface TooltipProps {

  /** Содержимое. */
  children?: React.ReactNode

  /** CSS-класс корневого элемента. */
  className?: string

  /** Реф с элементом, относительно которого нужно позиционироваться. */
  holderRef: React.MutableRefObject<HTMLDivElement | undefined>

  /** Нужно ли выводить inline-элемент. */
  inline?: boolean

  /** Сработает при клике за пределами или на крестик. */
  onDismiss?: DismissCallback
}

export interface Props<T extends ElementName = ElementName> {

  /** Тип элемента-контейнера. */
  holderElement?: T

  /** Свойства контейнера. */
  holderProps?: React.PropsWithRef<React.HTMLAttributes<JSX.IntrinsicElements[T]>>

  /** Нужно ли выводить inline-элемент. */
  inline?: boolean

  /** Сработает при клике вне подсказки или на крестик в ней. */
  onDismiss?: DismissCallback

  /** Показывать ли подсказку. */
  shown?: boolean

  /** Содержимое компонента Tooltip. */
  tooltipChildren?: React.ReactNode

  /** Свойства компонента Tooltip. */
  tooltipProps?: TooltipProps
}

const cx = classnames.bind(classes);

/**
 * Компонент, добавляющий к содержимому подсказку.
 * @param props Свойства.
 * @return Элемент.
 */
export const WithTooltip: React.FC<Props> = ({
  inline = false,
  holderElement: Holder = inline ? 'span' : 'div',
  holderProps = {},
  shown = false,
  onDismiss,
  children,
  tooltipChildren,
  tooltipProps = {},
}) => {
  const holderRef = useRef<HTMLDivElement>();

  return (
    <>
      <Holder
        {...holderProps as any}
        ref={holderRef as any}

        // "inline-block" - чтобы по умолчанию блочный элемент не заполнял всю доступную ширину, вытесняя подсказку
        className={cx('inline-block', holderProps.className)}
        children={children}
      />

      {/*
        * выводим за пределами Holder чтобы события из портала не распространялись на Holder
        * https://github.com/facebook/react/issues/11387
        */}
      {shown && (
        <Portal defineRoot={() => getScrollParent(holderRef.current)}>
          <Tooltip
            onDismiss={onDismiss}
            children={tooltipChildren}
            {...tooltipProps}
            inline={inline}
            holderRef={holderRef}
          />
        </Portal>
      )}
    </>
  );
};

/**
 * Компонент подсказки. Позиционируется относительно переданного в holderRef элемента.
 * @param props Свойства.
 * @return Элемент.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  inline = false,
  holderRef,
  children,
  onDismiss,
  className,
}) => {
  const Container = inline ? 'span' : 'div';
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const place = useCallback(() => {
    tooltipRef.current
      && holderRef.current
      && placeTooltip(tooltipRef.current, holderRef.current);
  }, []);

  useEffect(place);

  useEffect(() => {
    const offList = [
      on(window, 'scroll', place),
      on(window, 'resize', debounce(place, 200)),
    ];

    const scrollParent = getScrollParent(tooltipRef.current);

    scrollParent !== document.body
      && scrollParent !== document.documentElement
      && offList.push(on(scrollParent, 'scroll', place));

    return () => offList.forEach(fn => fn());
  }, []);

  useOutsideClick(tooltipRef, event => {
    const { current: holderEl } = holderRef;

    isFunction(onDismiss) && onDismiss(event, {
      byHolder: event.target === holderEl
        || Boolean(holderEl && holderEl.contains((event as any).target)),
    });
  });

  return (
    <Container
      ref={tooltipRef}
      style={{ opacity: 0 }}
      className={cx('tooltip', className)}
    >
      <CrossSVG
        className={cx('tooltip-cross')}
        onClick={event => {
          isFunction(onDismiss) && onDismiss(event, { byHolder: false });
        }}
      />
      <div className={cx('tooltip-content')}>
        {children}
      </div>
    </Container>
  );
};

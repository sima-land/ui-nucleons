import React, { useRef, useImperativeHandle } from 'react';
import { NavBar, NavBarProps } from '../nav-bar';
import { cx, OrNil } from './utils';
import on from '../helpers/on';
import { isFullyScrolled } from '../helpers/is-fully-scrolled';
import { get } from 'lodash';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';

export interface CallbackData {
  contentElement: OrNil<HTMLDivElement>;
}

export interface ScreenLayoutProps {
  childrenRef?:
    | React.MutableRefObject<OrNil<HTMLDivElement>>
    | React.RefCallback<OrNil<HTMLDivElement>>;
  footer?: React.ReactNode;
  fullScrollThreshold?: number;
  navBarProps?: NavBarProps;
  onBack?: (data: CallbackData) => void;
  onClose?: (data: CallbackData) => void;
  onFullScroll?: (data: CallbackData) => void;
  subtitle?: string;
  title?: string;
  withBackButton?: boolean;
  withCloseButton?: boolean;
  withDivideHeader?: boolean;
  withHeader?: boolean;
}

/**
 * Разметка содержимого компонента Screen.
 * @param props Свойства.
 * @param props.children Содержимое.
 * @param props.childrenRef Ref для элемента содержимого.
 * @param props.footer Содержимое подвала.
 * @param props.fullScrollThreshold Отступ от нижней границы для срабатывания onFullScroll.
 * @param props.navBarProps Свойства компонента NavBar.
 * @param props.onBack Сработает при клике на кнопку "назад".
 * @param props.onClose Сработает при клике на крест.
 * @param props.onFullScroll Сработает при полной прокрутке контента.
 * @param props.subtitle Подзаголовок.
 * @param props.title Заголовок.
 * @param props.withBackButton Нужно ли выводить кнопку "назад".
 * @param props.withCloseButton Нужно ли выводить закрывающий крест.
 * @param props.withDivideHeader Нужно ли рисовать черту между шапкой и основным содержимым.
 * @param props.withHeader Нужно ли выводить шапку с заголовком и кнопками.
 * @return Элемент.
 */
export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  childrenRef,
  footer,
  fullScrollThreshold,
  navBarProps = {},
  onBack,
  onClose,
  onFullScroll,
  subtitle,
  title,
  withBackButton,
  withCloseButton,
  withDivideHeader,
  withHeader,
}) => {
  const contentRef = useRef<HTMLDivElement>();
  const unsubscribeRef = useRef<() => void>();

  useImperativeHandle(childrenRef, () => contentRef.current);

  return (
    <>
      {Boolean(withHeader) && (
        <NavBar
          {...navBarProps}
          title={title}
          subtitle={subtitle}
          bottomBordered={withDivideHeader}
          buttons={{
            ...navBarProps.buttons,
            start: withBackButton
              ? {
                  // ВАЖНО: не подмешиваем свойства из navBarProps.buttons.start
                  // чтобы не распылять конфигурацию одной и той же кнопки по нескольким местам
                  icon: ArrowLeftSVG,
                  onClick: () => onBack && onBack({ contentElement: contentRef.current }),
                  'aria-label': 'Вернуться назад',
                  'data-testid': 'screen:back',
                }
              : get(navBarProps.buttons, 'start'),
            end: withCloseButton
              ? {
                  // ВАЖНО: не подмешиваем свойства из navBarProps.buttons.end
                  // чтобы не распылять конфигурацию одной и той же кнопки по нескольким местам
                  icon: CrossSVG,
                  onClick: () => onClose && onClose({ contentElement: contentRef.current }),
                  'aria-label': `Закрыть ${title || ''}`.trim(),
                  'data-testid': 'screen:close',
                }
              : get(navBarProps.buttons, 'end'),
          }}
        />
      )}

      <div
        className={cx('content', 'full-width')}
        children={children}
        ref={
          createTakeContentRef({
            elementRef: contentRef,
            unsubscribeRef,
            onFullScroll,
            fullScrollThreshold,
          }) as any
        }
      />

      {Boolean(footer) && <div className={cx('footer', 'full-width')}>{footer}</div>}
    </>
  );
};

/**
 * Возвращает функцию сохранения аргумента в ref-контейнер.
 * Возвращаемая функция выполняет подписку на "scroll" и вызывает callback в момент полной прокрутки.
 * @param options Опции.
 * @param options.elementRef Ref-контейнер для элемента.
 * @param options.unsubscribeRef Ref-контейнер для функции отписки от "scroll".
 * @param options.onFullScroll Сработает при полной прокрутке.
 * @param options.fullScrollThreshold Отступ от нижней границы для срабатывания onFullScroll.
 * @return Функция сохранения аргумента в ref-контейнер.
 */
export const createTakeContentRef =
  ({
    elementRef,
    unsubscribeRef,
    onFullScroll,
    fullScrollThreshold: threshold = 0,
  }: {
    elementRef: React.MutableRefObject<OrNil<HTMLDivElement>>;
    unsubscribeRef: React.MutableRefObject<undefined | (() => void)>;
    onFullScroll?: (data: CallbackData) => void;
    fullScrollThreshold?: number;
  }) =>
  (element?: HTMLDivElement) => {
    if (!element) {
      // чистим реф
      elementRef.current = undefined;

      // если ранее были подписаны - отписываемся
      unsubscribeRef.current && unsubscribeRef.current();
    } else if (element !== elementRef.current) {
      // сохраняем ссылку для последующей отправки в onClose/onBack
      elementRef.current = element;

      // если ранее были подписаны - отписываемся
      unsubscribeRef.current && unsubscribeRef.current();

      // выполняем подписку, сохраняем функцию отписки
      unsubscribeRef.current = on(element, 'scroll', () => {
        isFullyScrolled(element, { threshold }) &&
          onFullScroll &&
          onFullScroll({ contentElement: element });
      });
    }
  };

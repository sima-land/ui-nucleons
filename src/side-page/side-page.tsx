import type { SidePageProps } from './types';
import { CSSProperties, useRef } from 'react';
import { defineSlots } from '../helpers/define-slots';
import { usePageScrollLock } from '../_internal/page-scroll-lock';
import { SidePageBody, SidePageFooter, SidePageHeader } from './slots';
import CSSTransition from 'react-transition-group/CSSTransition';
import { ModalOverlay, ModalOverlayProps } from '../modal-overlay';
import { useExactClick } from '../modal-overlay/utils';
import classNames from 'classnames/bind';
import styles from './side-page.module.scss';

const cx = classNames.bind(styles);

const transitionClasses = {
  enter: cx('enter'),
  enterActive: cx('enter-active'),
  exit: cx('exit'),
  exitActive: cx('exit-active'),
} as const;

/**
 * Модальное окно, прикрепленное к правой стороне экрана.
 * @param props Свойства.
 * @return Элемент.
 */
export function SidePage({
  shown,
  withTransitions,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...restProps
}: SidePageProps) {
  const transitionDuration = withTransitions ? 300 : 0;

  return (
    <CSSTransition
      in={shown}
      timeout={transitionDuration}
      classNames={transitionClasses}
      unmountOnExit
      onEntering={onEntering}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      {transitionStatus => (
        <SidePageInner {...restProps} {...{ transitionStatus, transitionDuration }} />
      )}
    </CSSTransition>
  );
}

/**
 * Фиктивный компонент, необходимый для того чтобы задействовать хук блокировки прокрутки внутри CSSTransition.
 * @param props Свойства.
 * @return Элемент.
 */
function SidePageInner({
  size = 'm',
  children,
  onClose,
  withScrollDisable = false,
  scrollDisableOptions,
  transitionStatus,
  transitionDuration,
}: Omit<SidePageProps, 'shown' | 'withTransitions'> & {
  transitionStatus: string;
  transitionDuration: number;
}) {
  const overlayClickBind = useExactClick(onClose);

  const ref = useRef<HTMLDivElement>(null);

  usePageScrollLock(ref, { lockEnabled: withScrollDisable, ...scrollDisableOptions });

  const { header, body, footer } = defineSlots(children, {
    header: SidePage.Header,
    body: SidePage.Body,
    footer: SidePage.Footer,
  });

  const overlayProps: ModalOverlayProps = {
    style: { '--transition-duration': `${transitionDuration}ms` } as CSSProperties,

    // условие нужно чтобы не было моментального закрытия на double click
    ...(transitionStatus !== 'entering' && overlayClickBind),
  };

  return (
    <ModalOverlay {...overlayProps}>
      <div className={cx('side-page', `size-${size}`)} data-testid='side-page'>
        {header}
        <div ref={ref} className={cx('body')}>
          {body}
        </div>
        {footer}
      </div>
    </ModalOverlay>
  );
}

SidePage.Header = SidePageHeader;
SidePage.Body = SidePageBody;
SidePage.Footer = SidePageFooter;

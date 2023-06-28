import { CSSProperties, ReactNode, useRef } from 'react';
import { defineSlots } from '../helpers/define-slots';
import { WithPageScrollLock, usePageScrollLock } from '../_internal/page-scroll-lock';
import { SidePageBody, SidePageFooter, SidePageHeader } from './slots';
import CSSTransition, { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { ModalOverlay, ModalOverlayProps } from '../modal-overlay';
import { useExactClick } from '../modal-overlay/utils';
import classnames from 'classnames/bind';
import styles from './side-page.module.scss';

export interface SidePageProps extends WithPageScrollLock {
  /** Нужно ли показать компонент. */
  shown?: boolean;

  /** Нужно ли использовать анимации при открытии/закрытии. */
  withTransitions?: boolean;

  /** Ширина. */
  size?: 's' | 'm';

  /** Содержимое. */
  children?: ReactNode;

  /** Сработает при закрытии. */
  onClose?: () => void;

  /** Обработчик "onEntering" для CSSTransition. */
  onEntering?: CSSTransitionProps['onEntering'];

  /** Обработчик "onEnter" для CSSTransition. */
  onEnter?: CSSTransitionProps['onEnter'];

  /** Обработчик "onEntered" для CSSTransition. */
  onEntered?: CSSTransitionProps['onEntered'];

  /** Обработчик "onExiting" для CSSTransition. */
  onExiting?: CSSTransitionProps['onExiting'];

  /** Обработчик "onExited" для CSSTransition. */
  onExited?: CSSTransitionProps['onExited'];

  /** Обработчик "onExit" для CSSTransition. */
  onExit?: CSSTransitionProps['onExit'];
}

const cx = classnames.bind(styles);

const transitionClasses = {
  enter: cx('enter'),
  enterActive: cx('enter-active'),
  exit: cx('exit'),
  exitActive: cx('exit-active'),
} as const;

/**
 * Компонент модального окна, прикрепленного к правой стороне экрана.
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
      <div className={cx('side-page', `size-${size}`)}>
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

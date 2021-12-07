import React, { useRef } from 'react';
import { defineSlots } from '../helpers/define-slots';
import { useCloseHandler } from '../modal/utils';
import { useLayer } from '../helpers/layer';
import { useBodyScrollLock, WithBodyScrollLock } from '../_internal/body-scroll';
import { SidePageBody, SidePageFooter, SidePageHeader } from './slots';
import CSSTransition, { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import classnames from 'classnames/bind';
import styles from './side-page.module.scss';

export interface SidePageProps extends WithBodyScrollLock {
  /** Нужно ли показать компонент. */
  shown?: boolean;

  /** Нужно ли использовать анимации при открытии/закрытии. */
  withTransitions?: boolean;

  /** Ширина. */
  size?: 's' | 'm';

  /** Содержимое. */
  children?: React.ReactNode;

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
export const SidePage = ({
  shown,
  withTransitions,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...restProps
}: SidePageProps) => {
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
};

/**
 * Фиктивный компонент, необходимый для того чтобы задействовать хук блокировки прокрутки внутри CSSTransition.
 * @param props Свойства.
 * @return Элемент.
 */
const SidePageInner = ({
  size = 'm',
  children,
  onClose,
  withScrollDisable,
  scrollDisableOptions,
  transitionStatus,
  transitionDuration,
}: Omit<SidePageProps, 'shown' | 'withTransitions'> & {
  transitionStatus: string;
  transitionDuration: number;
}) => {
  const layer = useLayer() + 100;

  const overlayBind = useCloseHandler(onClose);

  const ref = useRef<HTMLDivElement>(null);

  const overlayStyles = {
    zIndex: layer, // z-index именно у overlay из-за position: fixed
    '--transition-duration': `${transitionDuration}ms`,
  };

  const { header, body, footer } = defineSlots(children, {
    header: SidePage.Header,
    body: SidePage.Body,
    footer: SidePage.Footer,
  });

  useBodyScrollLock(ref, withScrollDisable, scrollDisableOptions);

  return (
    <div
      ref={ref}
      className={cx('overlay')}
      style={overlayStyles}
      {...(transitionStatus !== 'entering' && overlayBind)} // чтобы не было моментального закрытия на double click
    >
      <div className={cx('main', `size-${size}`)}>
        {header}
        <div className={cx('body')}>{body}</div>
        {footer}
      </div>
    </div>
  );
};

SidePage.Header = SidePageHeader;
SidePage.Body = SidePageBody;
SidePage.Footer = SidePageFooter;

import React from 'react';
import { defineSlots } from '../helpers/define-slots';
import { useCloseHandler } from '../modal/utils';
import { useLayer } from '../helpers/layer';
import { SidePageBody, SidePageFooter, SidePageHeader } from './slots';
import CSSTransition from 'react-transition-group/CSSTransition';
import classnames from 'classnames/bind';
import styles from './side-page.module.scss';

export interface SidePageProps {
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
  size = 'm',
  children,
  onClose,
}: SidePageProps) => {
  const layer = useLayer() + 100;

  const overlayBind = useCloseHandler(onClose);

  const transitionDuration = withTransitions ? 300 : 0;

  const overlayStyles = {
    zIndex: layer, // z-index именно у overlay из-за position: fixed
    '--transition-duration': `${transitionDuration}ms`,
  };

  const { header, body, footer } = defineSlots(children, {
    header: SidePage.Header,
    body: SidePage.Body,
    footer: SidePage.Footer,
  });

  return (
    <CSSTransition
      in={shown}
      timeout={transitionDuration}
      classNames={transitionClasses}
      unmountOnExit
    >
      {status => (
        <div
          className={cx('overlay')}
          style={overlayStyles}
          {...(status !== 'entering' && overlayBind)} // чтобы не было моментального закрытия на double click
        >
          <div className={cx('main', `size-${size}`)}>
            {header}
            <div className={cx('body')}>{body}</div>
            {footer}
          </div>
        </div>
      )}
    </CSSTransition>
  );
};

SidePage.Header = SidePageHeader;
SidePage.Body = SidePageBody;
SidePage.Footer = SidePageFooter;

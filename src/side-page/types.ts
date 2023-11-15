import type { ReactNode } from 'react';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import type { WithPageScrollLock } from '../_internal/page-scroll-lock';

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

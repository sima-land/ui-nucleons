import { ModalContext } from './utils';
import { ModalBody, ModalFooter, ModalHeader, ModalOverlap } from './slots';
import { ModalOverlay } from '../modal-overlay';
import { Plate } from '../plate';
import { WithPageScrollLock } from '../_internal/page-scroll-lock';
import { defineSlots } from '../helpers/define-slots';
import { useExactClick } from '../modal-overlay/utils';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

export type ModalSize = 's' | 'm' | 'l' | 'xl' | 'fullscreen';

interface ModalStyle extends React.CSSProperties {
  '--modal-height'?: string;
}

export interface ModalProps extends WithPageScrollLock {
  /** Содержимое компонента. */
  children?: React.ReactNode;

  /** Высота в пикселях. */
  height?: number;

  /** Будет вызвана при нажатии на кнопку "назад" в топ баре. */
  onBack?: () => void;

  /** Будет вызвана при закрытии окна. */
  onClose?: () => void;

  /** Размер окна. */
  size?: ModalSize;

  /** Нужно ли выводить заглушку вместо футера если он не задан. */
  footerStub?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classNames.bind(styles);

/**
 * Компонент модального окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function Modal({
  children,
  height,
  onClose,
  scrollDisableOptions,
  size = 'm',
  footerStub = size !== 'fullscreen',
  withScrollDisable = false,
  'data-testid': testId = 'modal',
}: ModalProps) {
  const overlayClickBind = useExactClick(onClose);

  const fullscreen = size === 'fullscreen';

  const { header, content, footer, overlap } = defineSlots(children, {
    header: ModalHeader,
    content: ModalBody,
    footer: ModalFooter,
    overlap: ModalOverlap,
  });

  const style: ModalStyle = {
    '--modal-height':
      typeof height === 'number' && Number.isFinite(height)
        ? `${Math.min(696, height)}px`
        : undefined,
  };

  return (
    <ModalOverlay className={cx('overlay')} {...overlayClickBind}>
      <Plate
        rounds={null}
        shadow={fullscreen ? null : 'z4'}
        style={style}
        className={cx('modal', `size-${size}`, header && 'has-header', footer && 'has-footer')}
        data-testid={testId}
      >
        <ModalContext.Provider
          value={{
            withScrollDisable,
            scrollDisableOptions,
            topBarSize: 'unset',
            bottomBarSize: 'unset',
          }}
        >
          {header}

          {content}

          {footer}

          {!footer && footerStub && <div className={cx('footer-stub')} />}

          {overlap && (
            <div className={cx('overlap-content')} data-testid='modal:overlap'>
              {overlap}
            </div>
          )}
        </ModalContext.Provider>
      </Plate>
    </ModalOverlay>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Overlap = ModalOverlap;

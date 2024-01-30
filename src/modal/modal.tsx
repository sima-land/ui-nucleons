import type { ModalProps } from './types';
import { ModalOverlay } from '../modal-overlay';
import { useExactClick } from '../modal-overlay/utils';
import classNames from 'classnames/bind';
import styles from './modal.m.scss';

const cx = classNames.bind(styles);

/**
 * Модальное окно - окно, блокирующее работу с основным интерфейсом до тех пор, пока оно не будет закрыт.
 * @param props Свойства.
 * @return Элемент.
 */
export function Modal({
  flexLayout = true,
  size = 'm',
  rounds = size === 'fullscreen' ? 'unset' : 'm',
  className,
  children,
  onClose,
  overlayProps,
  'data-testid': testId = 'modal',
  ...restProps
}: ModalProps) {
  const overlayClickProps = useExactClick(onClose, {
    onMouseDown: overlayProps?.onMouseDown,
    onMouseUp: overlayProps?.onMouseUp,
  });

  const overlayClassName = cx(
    'overlay',
    // ВАЖНО: классы размера и скруглений кидаем на ModalOverlay для того чтобы понизить специфичность
    // а также потому что надо регулировать отступы от края
    size !== 'unset' && `size-${size}`,
    rounds !== 'unset' && `rounds-${rounds}`,
    overlayProps?.className,
  );

  const modalClassName = cx('modal', flexLayout && 'modal-layout', className);

  return (
    <ModalOverlay {...overlayProps} className={overlayClassName} {...overlayClickProps}>
      <div className={modalClassName} data-testid={testId} {...restProps}>
        {children}
      </div>
    </ModalOverlay>
  );
}

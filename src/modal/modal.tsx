import type { ModalProps } from './types';
import { ModalOverlay } from '../modal-overlay';
import { useExactClick } from '../modal-overlay/utils';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

/**
 * Компонент модального окна.
 * @param props Свойства.
 * @return Элемент.
 */
export function Modal({
  flexLayout = true,
  size = 'm',
  rounds = 'unset',
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

  return (
    <ModalOverlay {...overlayProps} className={overlayClassName} {...overlayClickProps}>
      <div
        className={cx('modal', flexLayout && 'modal-layout', className)}
        data-testid={testId}
        {...restProps}
      >
        {children}
      </div>
    </ModalOverlay>
  );
}

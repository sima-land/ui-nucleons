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
    size !== 'unset' && `size-${size}`,
    rounds !== 'unset' && `rounds-${rounds}`,
    overlayProps?.className,
  );

  return (
    <ModalOverlay {...overlayProps} className={overlayClassName} {...overlayClickProps}>
      <div className={cx('modal', className)} data-testid={testId} {...restProps}>
        {children}
      </div>
    </ModalOverlay>
  );
}

import type { SidePageProps } from './types';
import { ModalOverlay } from '../modal-overlay';
import { useExactClick } from '../modal-overlay/utils';
import classNames from 'classnames/bind';
import styles from './side-page.m.scss';

const cx = classNames.bind(styles);

/**
 * Модальное окно, прикрепленное к правой стороне экрана.
 * @param props Свойства.
 * @return Элемент.
 */
export function SidePage({
  size = 'm',
  className,
  children,
  onClose,
  overlayProps,
  'data-testid': testId = 'side-page',
  ...restProps
}: SidePageProps) {
  const overlayClickProps = useExactClick(onClose, {
    onMouseDown: overlayProps?.onMouseDown,
    onMouseUp: overlayProps?.onMouseUp,
  });

  const overlayClassName = cx(
    'overlay',
    // ВАЖНО: классы размера и скруглений кидаем на ModalOverlay для того чтобы понизить специфичность
    // а также потому что надо регулировать отступы от края
    size !== 'unset' && `size-${size}`,
    overlayProps?.className,
  );

  const sidePageClassName = cx('side-page', className);

  return (
    <ModalOverlay {...overlayProps} className={overlayClassName} {...overlayClickProps}>
      <div className={sidePageClassName} data-testid={testId} {...restProps}>
        {children}
      </div>
    </ModalOverlay>
  );
}

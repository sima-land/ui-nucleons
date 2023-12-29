import type { ModalProps } from './types';
import classNames from 'classnames/bind';
import styles from './utils.module.scss';

const cx = classNames.bind(styles);

/**
 * Вернет свойства Modal для формирования.
 * @param config Настройки.
 * @param config.size Размер на desktop-разрешениях.
 * @param config.overlayProps Опции overlayProps.
 * @return Свойства Modal.
 */
export function getResponsiveModalProps(
  config: Pick<ModalProps, 'size' | 'overlayProps'>,
): ModalProps {
  const { size, overlayProps } = config;

  return {
    size: 'unset',
    rounds: 'unset',

    // ВАЖНО: накидываем класс именно на ModalOverlay так как размер влияет и на него в том числе
    overlayProps: {
      ...overlayProps,
      className: cx(`size-${size}`, overlayProps?.className),
    },
  };
}

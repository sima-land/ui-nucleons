import type { ModalProps, ModalSize } from './types';
import classNames from 'classnames/bind';
import styles from './utils.module.scss';

const cx = classNames.bind(styles);

/**
 * Вернет свойства Modal для формирования.
 * @param config Настройки.
 * @param config.size Размер на desktop-разрешениях.
 * @param config.className Дополнительный класс.
 * @return Свойства Modal.
 */
export function getResponsiveModalProps(config: {
  size: ModalSize;
  className?: string;
}): ModalProps {
  const { size, className } = config;

  return {
    size: 'unset',
    rounds: 'unset',
    className: cx(`size-${size}`, className),
  };
}

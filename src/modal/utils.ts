import type { ModalProps, ModalSize } from './types';
import classNames from 'classnames/bind';
import styles from './utils.module.scss';

const cx = classNames.bind(styles);

/**
 * Вернет свойства Modal для формирования.
 * @param config Настройки.
 * @param customProps Пользовательские свойства.
 * @return Свойства Modal.
 */
export function getResponsiveModalProps(
  config: { size: ModalSize },
  customProps?: { className?: string },
): ModalProps {
  const { size } = config;

  return {
    size: 'unset',
    className: cx(`size-${size}`, customProps?.className),
  };
}

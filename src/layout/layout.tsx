import type { LayoutProps } from './types';
import classNames from 'classnames/bind';
import styles from './layout.m.scss';

const cx = classNames.bind(styles);

/**
 * Контейнер, формирующий отступы по горизонтали в соответствии с дизайн-гайдами.
 * @param props Свойства.
 * @return Элемент.
 */
export function Layout({ children, className, disabledOn = [], rootRef, ...rest }: LayoutProps) {
  const rootClassName = cx(
    'layout',
    disabledOn.length > 0 && disabledOn.map(key => `disabled-${key}`),
    className,
  );

  return (
    <div {...rest} ref={rootRef} className={rootClassName}>
      {children}
    </div>
  );
}

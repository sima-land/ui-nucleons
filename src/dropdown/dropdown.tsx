import type { DropdownProps } from './types';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import classnames from 'classnames/bind';
import styles from './dropdown.module.scss';

const cx = classnames.bind(styles);

/**
 * Компонент выпадающего блока с контентом, например списком.
 * @param props Свойства.
 * @return Элемент.
 */
export function Dropdown({
  rootRef,
  viewportRef,
  className,
  children,
  'data-testid': testId = 'dropdown',
  ...restProps
}: DropdownProps) {
  return (
    <div ref={rootRef} className={cx('root', className)} {...restProps} data-testid={testId}>
      <CustomScrollbar
        className={cx('inner')}
        overflow={{ x: 'hidden', y: 'scroll' }}
        viewportRef={viewportRef}
      >
        {children}
      </CustomScrollbar>
    </div>
  );
}

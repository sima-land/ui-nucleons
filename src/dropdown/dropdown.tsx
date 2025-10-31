import type { DropdownProps } from './types';
import { CustomScrollbar } from '../_internal/custom-scrollbar';
import classnames from 'classnames/bind';
import styles from './dropdown.m.scss';
import { BSL_IGNORE_ATTR } from '../_internal/page-scroll-lock';
import { HTMLAttributes } from 'react';

const cx = classnames.bind(styles);

/**
 * Выпадающий блок. Обычно используется для вывода списков опций выбора.
 * @param props Свойства.
 * @return Элемент.
 */
export function Dropdown({
  rootRef,
  viewportRef,
  viewportProps,
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
        viewportProps={
          { [BSL_IGNORE_ATTR]: true, ...viewportProps } as HTMLAttributes<HTMLDivElement>
        }
      >
        {children}
      </CustomScrollbar>
    </div>
  );
}

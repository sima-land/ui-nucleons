import type { DropdownLoadingProps } from './types';
import { SpinnerSVG } from '../spinner';
import classNames from 'classnames/bind';
import styles from './dropdown-loading.m.scss';

const cx = classNames.bind(styles);

/**
 * Плашка состояния загрузки для Dropdown.
 * @param props Свойства.
 * @return Элемент.
 */
export function DropdownLoading({ className, ...props }: DropdownLoadingProps) {
  return (
    <div {...props} className={cx('root', className)}>
      <SpinnerSVG size='s' />
    </div>
  );
}

import type { CleanGroupProps } from './types';
import { useContext } from 'react';
import { CleanButtonContext } from './utils';
import classNames from 'classnames/bind';
import styles from './clean-group.module.scss';

const cx = classNames.bind(styles);

/**
 * Группа прозрачных кнопок.
 * @todo Добавить возможность задавать свойства корневому элементу.
 * @param props Свойства.
 * @return Элемент.
 */
export function CleanGroup({ size: sizeFromProps, children }: CleanGroupProps) {
  const { size: sizeFromContext, ...itemProps } = useContext(CleanButtonContext);

  const size = sizeFromProps ?? sizeFromContext;

  const itemClassName = cx('item', itemProps.className);

  return (
    <CleanButtonContext.Provider value={{ size, className: itemClassName }}>
      <div className={cx('group')}>{children}</div>
    </CleanButtonContext.Provider>
  );
}

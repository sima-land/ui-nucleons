import React from 'react';
import { SpinnerSVG } from '../../spinner';
import styles from './index.module.scss';

type DropdownLoadingProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'>;

/**
 * Плашка состояния загрузки для Dropdown.
 * @param props Свойства.
 * @return Элемент.
 */
export function DropdownLoading(props: DropdownLoadingProps) {
  return (
    <div {...props} className={styles.root}>
      <SpinnerSVG size='s' />
    </div>
  );
}

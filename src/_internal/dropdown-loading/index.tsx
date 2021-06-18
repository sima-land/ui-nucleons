import React from 'react';
import { Spinner } from '../../spinner';
import styles from './index.module.scss';

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'>;

/**
 * Плашка состояния загрузки для Dropdown.
 * @param props Свойства.
 * @return Элемент.
 */
export const DropdownLoading = (props: Props) => (
  <div {...props} className={styles.root}>
    <Spinner size='small' />
  </div>
);

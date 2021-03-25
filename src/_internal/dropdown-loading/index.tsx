import React from 'react';
import { Spinner } from '../../spinner';
import styles from './index.scss';

type Props = Omit<React.HTMLProps<HTMLDivElement>, 'className'>;

/**
 * Плашка состояния загрузки для Dropdown.
 * @param props Свойства.
 * @return Элемент.
 */
export const DropdownLoading: React.FC<Props> = props => (
  <div {...props} className={styles.root}>
    <Spinner size='small' />
  </div>
);

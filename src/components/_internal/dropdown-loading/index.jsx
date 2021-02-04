import React from 'react';
import Spinner from '../../spinner';
import styles from './index.scss';

/**
 * Плашка состояния загрузки для Dropdown.
 * @param {Object} props Свойства.
 * @return {ReactElement} Компонент.
 */
export const DropdownLoading = props => (
  <div {...props} className={styles.root}>
    <Spinner size='small' />
  </div>
);

import React from 'react';
import styles from './layout.scss';
import Type from 'prop-types';

/**
 * Обертка для общего контейнера.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @return {ReactElement} Компонент-обертка.
 */
const GridLayout = ({ children }) => <div className={styles.layout}>{children}</div>;

GridLayout.propTypes = {
  /**
   * Содержимое компонента.
   */
  children: Type.any,
};

export default GridLayout;

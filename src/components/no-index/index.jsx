import React from 'react';
import Type from 'prop-types';
import NoIndexMark from '../no-index-mark';

/**
 * Компонент отображает неиндексируемый контент.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое.
 * @return {ReactElement} Неиндексируемый контент.
 */
const NoIndex = ({ children }) => (
  <React.Fragment>
    <NoIndexMark />
    {children}
    <NoIndexMark closing />
  </React.Fragment>
);

NoIndex.propTypes = {
/**
 * Содержимое.
 */
  children: Type.any,
};

export default NoIndex;

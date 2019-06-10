import React from 'react';
import Type from 'prop-types';

/**
 * Компонент отображает неиндексируемый контент.
 * @param {Object} props Свойства компонента.
 * @param {children} props.children Содержимое.
 * @return {ReactElement} Неиндексируемый контент.
 */
const NoIndex = ({ children }) => (
  <React.Fragment>
    <span dangerouslySetInnerHTML={{ __html: '<!--noindex-->' }} />
    {children}
    <span dangerouslySetInnerHTML={{ __html: '<!--/noindex-->' }} />
  </React.Fragment>
);

NoIndex.propTypes = {
/**
 * Содержимое.
 */
  children: Type.any,
};

export default NoIndex;

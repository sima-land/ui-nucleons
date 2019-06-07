import React from 'react';
import Type from 'prop-types';

/**
 * Компонент отображает неиндексируемый контент.
 * @param {Object} props Свойства компонента.
 * @param {children} props.children Содержимое.
 * @return {ReactElement} Неиндексируемый контент.
 */
const Index = ({ children }) => (
  <React.Fragment>
    <span dangerouslySetInnerHTML={{ __html: '<!--noindex-->' }} />
    {children}
    <span dangerouslySetInnerHTML={{ __html: '<!--/noindex-->' }} />
  </React.Fragment>
);

Index.propTypes = {
  /**
	* Содержимое.
	*/
  children: Type.any,
};

export default Index;

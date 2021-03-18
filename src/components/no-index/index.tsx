import React from 'react';
import NoIndexMark from '../no-index-mark';

/**
 * Компонент отображает неиндексируемый контент.
 * @param props Свойства компонента.
 * @param props.children Содержимое.
 * @return Элемент.
 */
const NoIndex: React.FC = ({ children }) => (
  <>
    <NoIndexMark />
    {children}
    <NoIndexMark closing />
  </>
);

export default NoIndex;

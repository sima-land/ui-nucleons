import React from 'react';
import Type from 'prop-types';

/**
 * Компонент отображает неиндексируемый контент.
 * @param {Object} props Свойства компонента.
 * @param {boolean} props.closing=false Флаг закрывающегося тэга.
 * @return {ReactElement} Метка для поискового робота.
 */
const NoIndexMark = ({ closing = false }) => (
  <span dangerouslySetInnerHTML={{ __html: `<!--${closing ? '/' : ''}noindex-->` }} />
);

NoIndexMark.propTypes = {
  /**
   * Флаг закрывающегося тэга.
   */
  closing: Type.bool,
};

export default NoIndexMark;

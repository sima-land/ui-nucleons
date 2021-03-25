import React from 'react';

/**
 * Компонент отображает неиндексируемый контент.
 * @param props Свойства компонента.
 * @param props.closing Флаг закрывающегося тэга.
 * @return Элемент.
 */
const NoIndexMark = ({ closing }: { closing?: boolean }) => (
  <span dangerouslySetInnerHTML={{ __html: `<!--${closing ? '/' : ''}noindex-->` }} />
);

export default NoIndexMark;

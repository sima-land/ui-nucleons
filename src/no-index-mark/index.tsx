import React from 'react';

export interface Props {

  /** Флаг закрывающегося тэга. */
  closing?: boolean
}

/**
 * Компонент отображает неиндексируемый контент.
 * @param props Свойства.
 * @return Элемент.
 */
export const NoIndexMark = ({ closing }: Props) => (
  <span dangerouslySetInnerHTML={{ __html: `<!--${closing ? '/' : ''}noindex-->` }} />
);

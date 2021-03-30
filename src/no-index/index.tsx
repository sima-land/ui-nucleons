import React from 'react';
import { NoIndexMark } from '../no-index-mark';

export interface Props {

  /** Содержимое. */
  children?: React.ReactNode
}

/**
 * Компонент отображает неиндексируемый контент.
 * @param props Свойства.
 * @return Элемент.
 */
export const NoIndex: React.FC<Props> = ({ children }) => (
  <>
    <NoIndexMark />
    {children}
    <NoIndexMark closing />
  </>
);

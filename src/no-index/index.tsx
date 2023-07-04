import { ReactNode } from 'react';
import { NoIndexMark } from '../no-index-mark';

export interface NoIndexProps {
  /** Содержимое. */
  children?: ReactNode;
}

/**
 * Компонент отображает неиндексируемый контент.
 * @param props Свойства.
 * @return Элемент.
 */
export function NoIndex({ children }: NoIndexProps) {
  return (
    <>
      <NoIndexMark />
      {children}
      <NoIndexMark closing />
    </>
  );
}

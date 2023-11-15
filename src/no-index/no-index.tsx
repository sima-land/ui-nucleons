import type { NoIndexProps } from './types';
import { NoIndexMark } from './no-index-mark';

/**
 * Неиндексируемый контент.
 * @param props Свойства.
 * @return Элемент.
 */
export function NoIndex({ children }: NoIndexProps) {
  return (
    <>
      <NoIndexMark type='open' />
      {children}
      <NoIndexMark type='close' />
    </>
  );
}

import { createContext } from 'react';
import { CleanButtonSize } from './types';

/**
 * Контекст установки размера группы прозрачных кнопок CleanGroup.
 * Размер заданный непосредственно компоненту CleanGroup имеет приоритет над контекстом.
 */
export const CleanGroupSizeContext = createContext<CleanButtonSize | 'unset' | undefined>(
  undefined,
);

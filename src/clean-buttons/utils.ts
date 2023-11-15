import type { CleanButtonProps } from './types';
import { createContext } from 'react';

/**
 * Контекст установки размера группы прозрачных кнопок CleanGroup.
 * Размер заданный непосредственно компоненту CleanGroup имеет приоритет над контекстом.
 */
export const CleanButtonContext = createContext<Pick<CleanButtonProps, 'size' | 'className'>>({});

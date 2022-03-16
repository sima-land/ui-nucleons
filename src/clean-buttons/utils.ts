import { createContext } from 'react';
import { CleanButtonSize } from './types';

export const CleanGroupSizeContext = createContext<CleanButtonSize | undefined>(undefined);

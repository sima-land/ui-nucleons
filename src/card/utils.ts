import { createContext } from 'react';
import { PlateProps } from '../plate';

export const CardContext = createContext<Partial<PlateProps>>({});

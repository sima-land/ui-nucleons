import { createContext, createRef } from 'react';
import { SelectOpenerBinding } from './types';

export const SelectContext = createContext<SelectOpenerBinding>({
  value: '',
  opened: false,
  menuFocused: false,
  openerRef: createRef(),
});

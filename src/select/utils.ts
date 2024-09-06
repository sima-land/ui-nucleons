import type { SelectContextValue } from './types';
import { createContext } from 'react';

export const SELECT_CONTEXT_DEFAULT_VALUE: SelectContextValue = {
  selectProps: {},

  currentValue: '',
  setCurrentValue: () => {},

  menuOpen: false,
  setMenuOpen: () => {},

  openerElement: null,
  setOpenerElement: () => {},

  anchorElement: null,
  setAnchorElement: () => {},

  menuElement: null,
  setMenuElement: () => {},

  menuFloatingStyle: {},
};

export const SelectContext = createContext<SelectContextValue>(SELECT_CONTEXT_DEFAULT_VALUE);

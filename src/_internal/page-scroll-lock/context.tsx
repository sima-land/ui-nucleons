import { createContext } from 'react';
import { PageScrollLockAdapterBSL } from './adapters/body-scroll-lock';
import { PageScrollLockContextValue } from './types';

export const PageScrollLockContext = createContext<PageScrollLockContextValue>({
  adapter: (element, options) => new PageScrollLockAdapterBSL(element, options),
});

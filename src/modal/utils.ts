import { createContext } from 'react';
import { BottomBarSize } from '../bottom-bar';
import { TopBarSize } from '../top-bar';
import { WithPageScrollLock } from '../_internal/page-scroll-lock';

export const ModalContext = createContext<
  WithPageScrollLock & {
    topBarSize?: TopBarSize;
    bottomBarSize?: BottomBarSize;
  }
>({});

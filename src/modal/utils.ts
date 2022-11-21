import { createContext } from 'react';
import { BottomBarProps } from '../bottom-bar';
import { TopBarProps } from '../top-bar';
import { WithPageScrollLock } from '../_internal/page-scroll-lock';

export const ModalContext = createContext<
  WithPageScrollLock & {
    topBarSize?: TopBarProps['size'];
    bottomBarSize?: BottomBarProps['size'];
  }
>({});

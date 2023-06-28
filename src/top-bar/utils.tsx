import { createContext } from 'react';
import { TopBarProps } from './types';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';

export const TopBarButtonGroupContext = createContext<{ stub?: boolean }>({
  stub: false,
});

/**
 * Позволяет быстро определить кнопки-иконки "назад" и "закрыть" в TopBar.
 * @param props Свойства. При указании onBack/onClose будет выведена соответствующая кнопка иконка.
 * @return Опция buttons для TopBar.
 */
export function navigationButtons({
  buttons,
  onBack,
  onClose,
}: Pick<TopBarProps, 'buttons'> & {
  onBack?: VoidFunction;
  onClose?: VoidFunction;
}): TopBarProps['buttons'] {
  return {
    ...buttons,
    ...(onBack && {
      start: {
        'data-testid': 'top-bar:back',
        onClick: onBack,
        icon: <ArrowLeftSVG />,
      },
    }),
    ...(onClose && {
      end: {
        'data-testid': 'top-bar:close',
        onClick: onClose,
        icon: <CrossSVG />,
      },
    }),
  };
}

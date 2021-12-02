import React from 'react';
import { NavBar, NavBarProps } from '../nav-bar';
import { get } from 'lodash';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/arrow-left';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';

export interface HeaderSlotProps extends NavBarProps {
  /** Нужна ли разделительная полоса внизу шапки экрана. */
  divided?: boolean;

  /** Заголовок. */
  title?: string;

  /** Подзаголовок. */
  subtitle?: string;

  /** Будет вызвана при нажатии на кнопку-стрелку. */
  onBack?: () => void;

  /** Будет вызвана при нажатии на кнопку-крести. */
  onClose?: () => void;
}

/**
 * Слот шапки экрана.
 * @param props Свойства.
 * @return Элемент.
 */
export const HeaderSlot = ({
  divided,
  title,
  subtitle,
  buttons,
  onBack,
  onClose,
  ...restProps
}: HeaderSlotProps) => (
  <NavBar
    {...restProps}
    title={title}
    subtitle={subtitle}
    bottomBordered={divided}
    buttons={{
      ...buttons,
      start: onBack
        ? {
            // ВАЖНО: не подмешиваем свойства из buttons.start
            // чтобы не распылять конфигурацию одной и той же кнопки по нескольким местам
            icon: ArrowLeftSVG,
            onClick: onBack,
            'aria-label': 'Вернуться назад',
            'data-testid': 'screen:back',
          }
        : get(buttons, 'start'),
      end: onClose
        ? {
            // ВАЖНО: не подмешиваем свойства из buttons.end
            // чтобы не распылять конфигурацию одной и той же кнопки по нескольким местам
            icon: CrossSVG,
            onClick: onClose,
            'aria-label': `Закрыть ${title || ''}`.trim(),
            'data-testid': 'screen:close',
          }
        : get(buttons, 'end'),
    }}
  />
);

/**
 * Слот основного контента экрана.
 * @param props Свойства.
 * @return Элемент.
 */
export const BodySlot: React.FC = ({ children }) => <>{children}</>;

/**
 * Слот футера экрана.
 * @param props Свойства.
 * @return Элемент.
 */
export const FooterSlot: React.FC = ({ children }) => <>{children}</>;

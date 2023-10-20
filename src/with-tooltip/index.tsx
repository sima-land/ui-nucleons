import { ReactNode, RefObject, useRef, useState } from 'react';
import { getScrollParent } from '../helpers/get-scroll-parent';
import { Portal } from '../portal';
import { PositioningTooltip } from './positioning-tooltip';

type ChildrenFn = (
  ref: RefObject<HTMLElement>,
  toggle: (opened: boolean) => void,
  shown: boolean,
) => ReactNode;

export interface WithTooltipProps {
  /** Сработает при клике вне подсказки или на крестик в ней. */
  onDismiss?: () => void;

  /** Содержимое компонента Tooltip. */
  tooltip?: ReactNode;

  /** Рендер-проп. */
  children: ChildrenFn;
}

/**
 * Компонент, добавляющий к содержимому подсказку.
 * @deprecated Можно использовать `popup/utils`.
 * @param props Свойства.
 * @return Элемент.
 */
export const WithTooltip = ({ onDismiss, children, tooltip }: WithTooltipProps) => {
  const openerRef = useRef<HTMLElement>(null);
  const [shown, toggle] = useState<boolean>(false);

  return (
    <>
      {children(openerRef, toggle, shown)}

      {shown && (
        <Portal defineRoot={() => getScrollParent(openerRef.current)}>
          <PositioningTooltip
            openerRef={openerRef}
            children={tooltip}
            onDismiss={() => {
              onDismiss && onDismiss();
              toggle(false);
            }}
          />
        </Portal>
      )}
    </>
  );
};

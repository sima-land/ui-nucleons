import { Ref } from 'react';
import { Portal } from '../portal';
import { HintView, HintViewProps } from './hint-view';

export interface HintProps extends HintViewProps {
  /** Нужно ли показать хинт. */
  open?: boolean;

  /** Ref элемента "стрелки". */
  arrowRef?: Ref<HTMLDivElement>;
}

/**
 * Всплывающий хинт.
 * @param props Свойства.
 * @return Элемент.
 */
export function Hint({ open, ...rest }: HintProps) {
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <HintInner {...rest} />
    </Portal>
  );
}

/**
 * Внутренний компонент, необходим из-за использования портала.
 * @param props Свойства.
 * @return Элемент.
 */
function HintInner({ arrowRef, children, ...rest }: Omit<HintProps, 'open'>) {
  return (
    <HintView {...rest}>
      {children}
      <HintView.Arrow arrowRef={arrowRef} />
    </HintView>
  );
}

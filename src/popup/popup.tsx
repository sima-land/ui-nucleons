import { useImperativeHandle } from 'react';
import { PopupView } from './popup-view';
import { useFloating } from '@floating-ui/react';
import { useOutsideClick } from '../hooks';
import { useFocusTrap, popupFloatingConfig, usePopupFloatingStyle } from './utils';
import { useIdentityRef } from '../hooks/use-identity-ref';
import { Portal } from '../portal';
import { PopupInnerProps, PopupProps } from './types';

/**
 * Popup, всплывающий когда указан целевой элемент.
 * @param props Свойства.
 * @return Элемент.
 */
export function Popup({ showFor, ...rest }: PopupProps) {
  return <Portal>{showFor && <PopupInner showFor={showFor} {...rest} />}</Portal>;
}

/**
 * Внутренний компонент, необходим из-за использования портала.
 * @param props Свойства.
 * @return Элемент.
 */
function PopupInner({
  showFor,
  popupRef,
  children,
  style,
  onDismiss,
  withCloseButton = true,
  placement,
  offset,
  ...rest
}: PopupInnerProps) {
  const { refs, ...floating } = useFloating(popupFloatingConfig({ placement, offset }));
  const floatingStyle = usePopupFloatingStyle(floating);

  useImperativeHandle(popupRef, () => refs.floating.current as HTMLDivElement);
  useImperativeHandle(refs.setReference, () => showFor, [showFor]);

  const anchorRef = useIdentityRef(showFor);
  useOutsideClick([anchorRef, refs.floating], onDismiss);

  useFocusTrap(refs.floating, {
    enabled: floating.isPositioned,
    afterDeactivate: onDismiss,
  });

  return (
    <PopupView
      {...rest}
      popupRef={refs.setFloating}
      style={{
        ...style,
        ...floatingStyle,
      }}
      onClose={withCloseButton ? onDismiss : undefined}
    >
      {children}
    </PopupView>
  );
}

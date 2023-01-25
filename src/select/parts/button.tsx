import React, { useContext, useImperativeHandle, useRef } from 'react';
import { TextButton, TextButtonAsButtonProps } from '../../text-button';
import { SelectContext } from '../utils';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/up';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';

/**
 * Компонент открывашки в виде текстовой кнопки.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectTextButton({
  buttonRef: buttonRefProp,
  children,
  onKeyDown,
  onMouseDown,
  ...props
}: TextButtonAsButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const binding = useContext(SelectContext);
  const ArrowSVG = binding.opened ? UpSVG : DownSVG;

  useImperativeHandle(buttonRefProp, () => buttonRef.current as HTMLButtonElement);
  useImperativeHandle(binding.anchorRef, () => buttonRef.current as HTMLElement);
  useImperativeHandle(binding.openerRef, () => buttonRef.current as HTMLElement);

  return (
    <TextButton
      iconGutter={4}
      endIcon={ArrowSVG}
      {...props}
      as='button'
      onMouseDown={event => {
        binding.onMouseDown?.(event);
        onMouseDown?.(event);
      }}
      onKeyDown={event => {
        binding.onKeyDown?.(event);
        onKeyDown?.(event);
      }}
      disabled={binding.disabled}
      buttonRef={buttonRef}
      role='combobox'
    >
      {children ?? (binding.value || binding.label)}
    </TextButton>
  );
}

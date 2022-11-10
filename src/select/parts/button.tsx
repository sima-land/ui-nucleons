import React, { useContext } from 'react';
import { TextButton, TextButtonAsButtonProps } from '../../text-button';
import { SelectContext } from '../utils';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/up';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';

/**
 * Компонент открывашки в виде текстовой кнопки.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectTextButton(props: TextButtonAsButtonProps) {
  const binding = useContext(SelectContext);
  const ArrowSVG = binding.opened ? UpSVG : DownSVG;

  // @todo прокидывать ref в props.buttonRef при необходимости

  return (
    <TextButton
      {...props}
      as='button'
      iconGutter={4}
      endIcon={ArrowSVG}
      {...{
        onMouseDown: event => {
          binding.onMouseDown?.(event);
          props.onMouseDown?.(event);
        },
        onKeyDown: event => {
          binding.onKeyDown?.(event);
          props.onKeyDown?.(event);
        },
      }}
      disabled={binding.disabled}
      buttonRef={binding.openerRef as any}
      role='combobox'
      data-testid='select:opener'
    >
      {binding.value || binding.label}
    </TextButton>
  );
}

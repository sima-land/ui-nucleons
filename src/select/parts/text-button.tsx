import { useContext, useMemo } from 'react';
import { TextButton, TextButtonAsButtonProps } from '../../text-button';
import { SelectContext } from '../utils';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandUp';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import { mergeRefs } from '../../helpers';

/**
 * "Открывашка" для Select в виде текстовой кнопки.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectTextButton({
  buttonRef,
  children,
  onMouseDown,
  onKeyDown,
  ...restProps
}: TextButtonAsButtonProps) {
  const {
    //
    selectProps,
    currentValue,
    menuOpen,
    setMenuOpen,
    setOpenerElement,
    setAnchorElement,
  } = useContext(SelectContext);

  const { label, disabled } = selectProps;

  const ArrowSVG = menuOpen ? UpSVG : DownSVG;

  const mergedRef = useMemo(
    () => mergeRefs<HTMLButtonElement>([buttonRef, setOpenerElement, setAnchorElement]),
    [buttonRef, setOpenerElement, setAnchorElement],
  );

  return (
    <TextButton
      role='combobox'
      disabled={disabled}
      iconGutter={4}
      endIcon={ArrowSVG}
      {...restProps}
      as='button'
      buttonRef={mergedRef}
      onMouseDown={event => {
        onMouseDown?.(event);

        if (disabled || event.defaultPrevented) {
          return;
        }

        // ВАЖНО: предотвращаем фокус
        !menuOpen && event.preventDefault();

        setMenuOpen(a => !a);
      }}
      onKeyDown={event => {
        onKeyDown?.(event);

        if (disabled || event.defaultPrevented) {
          return;
        }

        switch (event.code) {
          case 'Enter':
          case 'ArrowUp':
          case 'ArrowDown':
            setMenuOpen(true);
            break;
        }
      }}
    >
      {children ?? (currentValue || label)}
    </TextButton>
  );
}

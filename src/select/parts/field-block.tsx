import { useContext, useMemo, useState } from 'react';
import { SelectContext } from '../utils';
import { FieldBlock, FieldBlockProps } from '../../field-block';
import { COLORS } from '../../colors';
import { mergeRefs } from '../../helpers';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandUp';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import classNames from 'classnames';
import styles from './field-block.m.scss';

/**
 * "Открывашка" для Select в виде поля.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectFieldBlock({
  blockRef,
  blockProps,
  mainProps,
  ...restProps
}: FieldBlockProps) {
  const {
    //
    selectProps,
    currentValue,
    menuOpen,
    setMenuOpen,
    setOpenerElement,
    setAnchorElement,
  } = useContext(SelectContext);

  const { disabled, failed, label, renderValue = v => v } = selectProps;

  const [focused, setFocused] = useState<boolean>(false);
  const ArrowSVG = menuOpen ? UpSVG : DownSVG;

  const mergedRef = useMemo(
    () => mergeRefs([blockRef, setOpenerElement, setAnchorElement]),
    [blockRef, setOpenerElement, setAnchorElement],
  );

  return (
    <FieldBlock
      label={label}
      labelAsPlaceholder={!currentValue}
      failed={failed}
      disabled={disabled}
      focused={focused || menuOpen}
      fixedHeight
      adornmentEnd={<ArrowSVG fill={COLORS.get('basic-gray24')} />}
      main={renderValue(currentValue)}
      {...restProps}
      blockRef={mergedRef}
      mainProps={{
        ...mainProps,
        className: classNames(styles.main, mainProps?.className),
      }}
      blockProps={{
        role: 'combobox',
        tabIndex: disabled ? undefined : 0,
        className: styles.block,

        ...blockProps,

        onMouseDown: event => {
          blockProps?.onMouseDown?.(event);

          if (disabled || event.defaultPrevented) {
            return;
          }

          // ВАЖНО: предотвращаем фокус
          !menuOpen && event.preventDefault();

          setMenuOpen(a => !a);
        },

        onKeyDown: event => {
          blockProps?.onKeyDown?.(event);

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
        },

        onFocus: event => {
          blockProps?.onFocus?.(event);

          setFocused(true);
        },

        onBlur: event => {
          blockProps?.onBlur?.(event);

          setFocused(false);
        },
      }}
    />
  );
}

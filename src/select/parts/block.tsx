import { useContext, useImperativeHandle, useRef, useState } from 'react';
import { SelectContext } from '../utils';
import { FieldBlock, FieldBlockProps } from '../../field-block';
import { COLORS } from '../../colors';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandUp';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandDown';
import styles from './block.m.scss';
import classNames from 'classnames';

/**
 * "Открывашка" для Select в виде поля.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectFieldBlock(props: FieldBlockProps) {
  const binding = useContext(SelectContext);
  const [focused, setFocused] = useState<boolean>(false);
  const ArrowSVG = binding.opened ? UpSVG : DownSVG;

  // @todo прокидывать ref в props.blockRef при необходимости

  const ref = useRef<HTMLDivElement>(null);
  useImperativeHandle(binding.anchorRef, () => ref.current as HTMLElement);
  useImperativeHandle(binding.openerRef, () => ref.current as HTMLElement);

  return (
    <FieldBlock
      label={binding.label}
      adornmentEnd={<ArrowSVG fill={COLORS.get('basic-gray24')} />}
      {...props}
      failed={binding.failed}
      disabled={binding.disabled}
      fixedHeight
      blockRef={ref}
      blockProps={{
        ...props?.blockProps,
        onFocus: event => {
          setFocused(true);
          props.blockProps?.onFocus?.(event);
        },
        onBlur: event => {
          setFocused(false);
          props.blockProps?.onBlur?.(event);
        },
        onKeyDown: event => {
          binding.onKeyDown?.(event);
          props.blockProps?.onKeyDown?.(event);
        },
        onMouseDown: event => {
          binding.onMouseDown?.(event);
          props.blockProps?.onMouseDown?.(event);
        },
        role: 'combobox',
        tabIndex: binding.disabled ? undefined : 0,
        className: classNames(styles.block, props.blockProps?.className),
      }}
      focused={focused || binding.opened}
      labelAsPlaceholder={!binding.value}
      main={binding.value}
      mainProps={{ className: styles.main }}
    />
  );
}

import React, { createContext, useContext, useEffect } from 'react';
import { SelectProps, SelectOpenerProps } from './types';
import { FieldBlock, FIELD_BLOCK_DEFAULTS, FIELD_BLOCK_HEIGHT } from '../field-block';
import { COLORS } from '../colors';
import { TextButton } from '../text-button';
import { DropdownProps } from '../dropdown';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/up';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';
import classNames from 'classnames/bind';
import styles from './select.module.scss';

const cx = classNames.bind(styles);

export const SelectContext = createContext<
  Pick<SelectProps, 'fieldBlockProps' | 'textButtonProps'> & {
    setDropdownProps: (props: DropdownProps) => void;
  }
>({ setDropdownProps: () => void 0 });

/**
 * Компонент открывашки в виде поля.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectFieldBlock({
  openerRef,
  value,
  opened,
  focused,
  disabled,
  failed,
  onFocus,
  onBlur,
  onMouseDown,
  onKeyDown,
  label,
}: SelectOpenerProps) {
  const { fieldBlockProps = {}, setDropdownProps } = useContext(SelectContext);
  const { size = FIELD_BLOCK_DEFAULTS.size } = fieldBlockProps;
  const ArrowSVG = opened ? UpSVG : DownSVG;

  useEffect(() => {
    setDropdownProps({
      style: {
        top: `${FIELD_BLOCK_HEIGHT[size]}px`,
      },
    });
  }, [size]);

  useEffect(() => () => setDropdownProps({}), []);

  return (
    <FieldBlock
      label={label}
      adornmentEnd={<ArrowSVG fill={COLORS.get('basic-gray24')} />}
      {...fieldBlockProps}
      failed={failed}
      disabled={disabled}
      fixedHeight
      blockRef={openerRef as any}
      blockProps={{
        ...fieldBlockProps?.blockProps,
        role: 'combobox',
        tabIndex: disabled ? undefined : 0,
        'data-testid': 'select:opener',

        // @todo если будет необходимо - вызывать callback'и из blockProps по событиям
        onFocus,
        onBlur,
        onMouseDown,
        onKeyDown,
      }}
      focused={focused || opened}
      labelAsPlaceholder={!value}
      main={value}
      mainProps={{ className: cx('main') }}
    />
  );
}

/**
 * Компонент открывашки в виде текстовой кнопки.
 * @param props Свойства.
 * @return Элемент.
 */
export function SelectTextButton({
  openerRef,
  value,
  disabled,
  onFocus,
  onBlur,
  onMouseDown,
  onKeyDown,
  label,
  opened,
}: SelectOpenerProps) {
  const { textButtonProps } = useContext(SelectContext);
  const ArrowSVG = opened ? UpSVG : DownSVG;

  return (
    <TextButton
      iconGutter={4}
      endIcon={ArrowSVG}
      {...{
        ...textButtonProps,
        appearance: 'button',
      }}
      disabled={disabled}
      buttonRef={openerRef as any}
      role='combobox'
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      data-testid='select:opener'
    >
      {value || label}
    </TextButton>
  );
}

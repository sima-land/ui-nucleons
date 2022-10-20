import React, { ReactElement, createContext, isValidElement, useContext, useEffect } from 'react';
import { SelectProps, SelectOpenerProps } from './types';
import { DropdownItem, DropdownItemProps } from '../dropdown-item';
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

/** */
export class MenuItem {
  /**
   * Определяет, является ли переданное значение элементом DropdownItem.
   * @param value Значение.
   * @return Является ли переданное значение элементом DropdownItem.
   */
  static is(
    value: Parameters<typeof isValidElement>[0],
  ): value is ReactElement<DropdownItemProps, typeof DropdownItem> {
    return isValidElement(value) && value.type === DropdownItem;
  }

  /**
   * Возвращает значение элемента меню.
   * @param menuItem Значение.
   * @return Значение элемента меню.
   */
  static getValue(menuItem: ReactElement<DropdownItemProps>) {
    const { value, children } = menuItem.props;

    // нативный select преобразует содержимое option к строке если не указан value, делаем также
    return typeof value === 'string' ? value : String(children);
  }

  /**
   * Получив опции меню вернет LinkedList и текущую позицию в нем.
   * @param menuItems Опции.
   * @param currentIndex Индекс текущей выбранной опции.
   * @return Текущая позиция в списке и список.
   */
  static asLinkedList(
    menuItems: ReactElement<DropdownItemProps>[],
    currentIndex: number,
  ): [LinkedList<number>, number] {
    let currentPosition = -1;

    const availableIndices: Array<number> = menuItems.reduce<number[]>((acc, item, index) => {
      if (index === currentIndex) {
        currentPosition = acc.length;
      }

      if (!item.props.disabled) {
        acc.push(index);
      }

      return acc;
    }, []);

    return [new LinkedList<number>(availableIndices), currentPosition];
  }
}

/** Список с возможностью перемещаться вперед назад с закольцовыванием. */
export class LinkedList<T = unknown> {
  private source: T[];

  /**
   * Конструктор.
   * @param source Источник данных.
   */
  constructor(source: T[]) {
    this.source = source;
  }

  /**
   * Возвращает следующий элемент списка.
   * @param currentIndex Начальная позиция.
   * @return Элемент списка или undefined.
   */
  next(currentIndex: number): T | undefined {
    let nextIndex = currentIndex + 1;

    if (this.source.length === 0) {
      return undefined;
    }

    if (nextIndex >= this.source.length) {
      nextIndex = 0;
    }

    return this.source[nextIndex];
  }

  /**
   * Возвращает предыдущий элемент списка.
   * @param currentIndex Начальная позиция.
   * @return Элемент списка или undefined.
   */
  prev(currentIndex: number): T | undefined {
    let nextIndex = currentIndex - 1;

    if (this.source.length === 0) {
      return undefined;
    }

    if (nextIndex < 0) {
      nextIndex = this.source.length - 1;
    }

    return this.source[nextIndex];
  }
}

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

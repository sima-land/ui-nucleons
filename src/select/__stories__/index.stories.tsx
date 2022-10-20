import React, { useState } from 'react';
import { Select, SelectProps } from '..';
import { Sandbox } from '../../../.storybook/utils';
import { DropdownItem } from '../../dropdown-item';
import { FieldBlockSize } from '../../field-block';
import { TextButtonSize } from '../../text-button';
import { SelectMenuAlign } from '../types';

type SelectOpener = Extract<Required<SelectProps['opener']>, 'field-block' | 'text-button'>;

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [value, setValue] = useState<string>('');
  const options: string[] = ['Один', 'Два', 'Три', 'Четыре', 'Пять'];

  const style = {
    '--dropdown-width': '320px',
  };

  return (
    <Select
      label='Номер'
      style={style}
      value={value}
      onChange={e => setValue(e.value)}
      fieldBlockProps={{ caption: 'Простой пример' }}
    >
      {options.map((option, index) => (
        <DropdownItem key={index} value={option}>
          {option}
        </DropdownItem>
      ))}
    </Select>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentStates() {
  const [value, setValue] = useState<string>('');
  const [opener, setOpener] = useState<SelectOpener>('field-block');
  const [menuAlign, setMenuAlign] = useState<SelectMenuAlign>('left');
  const [fieldSize, setFieldSize] = useState<FieldBlockSize>('l');
  const [buttonSize, setButtonSize] = useState<TextButtonSize>('m');
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<'default' | 'disabled'>('default');

  const options: string[] = ['Один', 'Два', 'Три', 'Четыре', 'Пять'];

  const selectProps: SelectProps = {
    value,
    onChange: e => {
      setValue(e.value);
    },
    opener,
    label: 'Номер',
    loading,
    disabled: state === 'disabled',
    menuAlign,
    style: {
      '--dropdown-width': '320px',
    },
    fieldBlockProps: {
      size: fieldSize,
      caption: 'Простой пример',
    },
    textButtonProps: {
      size: buttonSize,
    },
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Открывающий элемент',
          options: ['field-block', 'text-button'],
          bind: [opener, setOpener],
        },
        {
          type: 'select',
          label: 'Выравнивание меню',
          options: ['left', 'right'],
          bind: [menuAlign as string, setMenuAlign],
        },
        {
          type: 'select',
          hidden: opener !== 'field-block',
          label: 'Размер поля',
          options: ['s', 'm', 'l'],
          bind: [fieldSize as string, setFieldSize],
        },
        {
          type: 'select',
          hidden: opener !== 'text-button',
          label: 'Размер кнопки',
          options: ['s', 'm'],
          bind: [buttonSize, setButtonSize],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: ['default', 'disabled'],
        },
        {
          type: 'toggle',
          label: 'Загрузка',
          bind: [loading, setLoading],
        },
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Select {...selectProps}>
          {options.map((option, index) => (
            <DropdownItem key={index} value={option}>
              {option}
            </DropdownItem>
          ))}
        </Select>
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

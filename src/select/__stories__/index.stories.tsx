import React, { useState } from 'react';
import { Select, SelectProps } from '..';
import { Sandbox } from '../../../.storybook/utils';
import { DropdownItem } from '../../dropdown-item';
import { FieldBlockProps } from '../../field-block';

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
  const [menuAlign, setMenuAlign] = useState<SelectProps['menuAlign']>('left');
  const [fieldSize, setFieldSize] = useState<FieldBlockProps['size']>('l');
  const [loading, setLoading] = useState<boolean>(false);

  const options: string[] = ['Один', 'Два', 'Три', 'Четыре', 'Пять'];

  const style = {
    '--dropdown-width': '320px',
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
          bind: [menuAlign as any, setMenuAlign],
        },
        {
          type: 'select',
          hidden: opener !== 'field-block',
          label: 'Размер поля',
          options: ['l', 'm', 's'],
          bind: [fieldSize as any, setFieldSize],
        },
        {
          type: 'toggle',
          label: 'Загрузка',
          bind: [loading, setLoading],
        },
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Select
          style={style}
          label='Номер'
          menuAlign={menuAlign}
          value={value}
          onChange={e => setValue(e.value)}
          opener={opener}
          fieldBlockProps={{ size: fieldSize, caption: 'Простой пример' }}
          loading={loading}
        >
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

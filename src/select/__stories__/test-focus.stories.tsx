import { Select } from '@sima-land/ui-nucleons/select';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { LargePage } from '../../../.storybook/utils';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function TestFocus() {
  const [value, setValue] = useState<string>('');

  return (
    <LargePage>
      <Select label='Номер' value={value} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </LargePage>
  );
}

TestFocus.storyName = 'Тест: Фокусировка';

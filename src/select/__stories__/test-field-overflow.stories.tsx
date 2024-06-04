import { Select } from '@sima-land/ui-nucleons/select';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function TestFieldOverflow() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select label='Номер' value={`${value} `.repeat(20).trim()} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
        <DropdownItem>Семь</DropdownItem>
        <DropdownItem>Восемь</DropdownItem>
        <DropdownItem>Девять</DropdownItem>
        <DropdownItem>Десять</DropdownItem>
      </Select>
    </>
  );
}

TestFieldOverflow.storyName = 'Тест: Переполнение поля';

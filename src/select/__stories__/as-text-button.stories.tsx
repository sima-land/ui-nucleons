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

export function AsTextButton() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select
        label='Номер'
        value={value}
        onValueChange={setValue}
        opener={<Select.TextButton size='m' />}
        dropdownProps={{ style: { width: '200px' } }}
      >
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

AsTextButton.storyName = 'Кастомизация кнопки';

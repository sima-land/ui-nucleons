import { Select, SelectTextButton } from '@sima-land/ui-nucleons/select';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Select',
  title: 'Как текстовая кнопка',
};

export default function AsTextButton() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select
        label='Номер'
        value={value}
        onValueChange={setValue}
        opener={<SelectTextButton size='m' />}
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

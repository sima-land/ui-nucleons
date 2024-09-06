import { Select, SelectFieldBlock } from '@sima-land/ui-nucleons/select';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Select',
  title: 'Как поле',
};

export default function AsFieldBlock() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select
        label='Номер'
        value={value}
        onValueChange={setValue}
        opener={<SelectFieldBlock size='s' caption='Это ни на что не повлияет' />}
        dropdownProps={{ style: { width: '320px' } }}
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

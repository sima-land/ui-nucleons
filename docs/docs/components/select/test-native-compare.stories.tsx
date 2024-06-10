import { Select } from '@sima-land/ui-nucleons/select';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export const meta = {
  category: 'Компоненты/Select',
  title: 'Тест: Сравнение с нативной реализацией',
  parameters: {
    layout: 'padded',
  },
};

export default function TestNativeCompare() {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Select defaultValue='Один' opener={<Select.FieldBlock size='s' />}>
        <DropdownItem size='s'>Один</DropdownItem>
        <DropdownItem size='s'>Два</DropdownItem>
        <DropdownItem size='s'>Три</DropdownItem>
      </Select>

      <select style={{ width: 240 }} defaultValue='Один'>
        <option>Один</option>
        <option>Два</option>
        <option>Три</option>
      </select>
    </div>
  );
}

import { Select } from '@sima-land/ui-nucleons/select';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function TestNativeCompare() {
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

TestNativeCompare.storyName = 'Тест: Сравнение с нативной реализацией';

import { Select } from '@sima-land/ui-nucleons/select';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function TestAllDisabled() {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Select opener={<Select.FieldBlock size='s' />}>
        <DropdownItem disabled>Один</DropdownItem>
        <DropdownItem disabled>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
      </Select>

      <select style={{ width: 240 }}>
        <option disabled>Один</option>
        <option disabled>Два</option>
        <option disabled>Три</option>
      </select>
    </div>
  );
}

TestAllDisabled.storyName = 'Тест: Все опции недоступны';

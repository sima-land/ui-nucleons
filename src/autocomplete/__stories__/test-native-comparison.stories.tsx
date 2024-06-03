import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { ChangeEvent, useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';

export default {
  title: 'common/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};
export function TestNativeComparison() {
  const [value, setValue] = useState('');
  const values = ['Edge', 'Firefox', 'Chrome', 'Opera', 'Safari'];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Autocomplete size='s' value={value} onChange={onChange}>
        {values.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </Autocomplete>

      <input list='browsers' value={value} onChange={onChange} />
      <datalist id='browsers'>
        {values.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
}

TestNativeComparison.storyName = 'Тест: Сравнение с нативной реализацией';

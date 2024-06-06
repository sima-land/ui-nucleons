import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { ChangeEvent, useState } from 'react';

export const meta = {
  title: 'Тест: сравнение с input+datalist',
  category: 'Компоненты/Autocomplete',
};

export default function TestNativeComparison() {
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

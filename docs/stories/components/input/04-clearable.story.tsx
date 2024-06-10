import { Input, InputProps } from '@sima-land/ui-nucleons/input';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Input',
  title: 'С очисткой',
};

export default function Clearable() {
  const [value, setValue] = useState<string>('Hello, world!');

  const props: InputProps = {
    value,
    placeholder: 'Напиши что-нибудь...',
    onClear: () => setValue(''),
    onChange: e => setValue(e.target.value),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input clearable {...props} size='l' />
      <Input clearable {...props} size='m' />
      <Input clearable {...props} size='s' />

      <div>
        <h4>Нативное поле для сравнения (крестик отображается в Chrome, Safari)</h4>
        <input
          type='search'
          value={value}
          onChange={e => setValue(e.target.value)}
          style={{ width: 240, height: 32 }}
          placeholder='Напиши что-нибудь...'
        />
      </div>
    </div>
  );
}

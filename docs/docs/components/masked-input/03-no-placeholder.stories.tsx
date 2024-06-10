import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/MaskedInput',
  title: 'Без placeholder',
  parameters: {
    layout: 'padded',
  },
};

export default function NoPlaceholder() {
  const defaultValue = '1112223344';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
        baseInputProps={{
          restPlaceholder: { value: '' },
        }}
      />
    </>
  );
}

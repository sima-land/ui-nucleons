import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/MaskedInput',
  title: 'Тест: Неконтролируемое поле',
  parameters: {
    layout: 'padded',
  },
};

export default function TestUncontrolled() {
  const defaultValue = '4443332211';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        defaultValue={defaultValue}
        onChange={(event, data) => setValue(data.cleanValue)}
      />

      <p>Значение: {value || '[пусто]'}</p>
    </>
  );
}

import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';
import { TextButton } from '@sima-land/ui-nucleons/text-button';

export const meta = {
  category: 'Компоненты/MaskedInput',
  title: 'Простой пример',
};

export default function Primary() {
  const defaultValue = '8005553535';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        value={value}
        onChange={(event, data) => setValue(data.cleanValue)}
      />

      <p>Значение: {value || '[пусто]'}</p>

      <TextButton size='s' onClick={() => setValue(defaultValue)}>
        Сбросить
      </TextButton>
    </>
  );
}

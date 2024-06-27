import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/PhoneInput',
  title: 'Простой пример',
};

export default function Primary() {
  const defaultValue = '79998887766';
  const [key, setKey] = useState<number>(0);
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <>
      <PhoneInput
        key={key}
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
        style={{
          '--field-width': '320px',
        }}
      />

      <p data-testid='phone:clean-value'>Значение: {value || '[пусто]'}</p>

      <TextButton
        size='s'
        data-testid='phone:reset'
        onClick={() => {
          setKey(n => n + 1);
          setValue(defaultValue);
        }}
      >
        Сбросить
      </TextButton>
    </>
  );
}

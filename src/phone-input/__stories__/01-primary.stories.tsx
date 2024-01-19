import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';

export default {
  title: 'common/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const defaultValue = '79998887766';
  const [key, setKey] = useState<number>(0);
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <>
      <PhoneInput
        key={key}
        value={value}
        onChange={(event, data) => {
          console.log('stories :: value', data.value);
          console.log('stories :: cleanValue', data.cleanValue);

          setValue(data.cleanValue);
        }}
        style={{ '--field-width': '320px' }}
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

Primary.storyName = 'Простой пример';

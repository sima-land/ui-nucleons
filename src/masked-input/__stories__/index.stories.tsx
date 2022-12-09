import React, { useState } from 'react';
import { MaskedInput } from '..';
import { TextButton } from '../../text-button';

export default {
  title: 'common/MaskedInput',
  component: MaskedInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';

export function NoRestPlaceholder() {
  const defaultValue = '1112223344';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        baseInputProps={{ restPlaceholder: undefined }}
        value={value}
        onChange={(event, data) => setValue(data.cleanValue)}
      />
    </>
  );
}

NoRestPlaceholder.storyName = 'Без rest placeholder';

Primary.storyName = 'Простой пример';

export function TestUncontrolled() {
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

TestUncontrolled.storyName = 'Тест: неконтролируемое поле';

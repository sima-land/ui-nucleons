import React, { useState } from 'react';
import { PhoneInput } from '..';

function DemoForm({ initialValue = '' }) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  return (
    <PhoneInput
      value={value}
      caption={error || 'Test caption'}
      failed={Boolean(error)}
      onFocus={() => {
        setError(null);
      }}
      onBlur={(e, { cleanValue, ready }) => {
        setValue(cleanValue);
        !ready && setError('Поле не заполнено');
      }}
      onCountrySelect={() => {
        setValue('');
        setError(null);
      }}
    />
  );
}

export default {
  title: 'desktop/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <h3>Пустое значение (Россия, по умолчанию)</h3>
      <DemoForm initialValue='' />

      <h3>Известная страна (Беларусь)</h3>
      <DemoForm initialValue='375112223344' />

      <h3>Известная страна (Казахстан)</h3>
      <DemoForm initialValue='76005002040' />

      <h3>Неизвестная страна (Другое)</h3>
      <DemoForm initialValue='55566667777' />
    </>
  );
}

Primary.storyName = 'Простой пример';

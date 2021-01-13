import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { PhoneInput } from '..';

const DemoForm = ({ initialValue = '' }) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  return (
    <PhoneInput
      value={value}
      caption={error}
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
};

storiesOf('PhoneInput', module)
  .add('Usage', () => (
    <div style={{ padding: 32 }}>
      <h3>Пустое значение (Россия, по умолчанию)</h3>
      <DemoForm initialValue='' />

      <h3>Известная страна (Беларусь)</h3>
      <DemoForm initialValue='375112223344' />

      <h3>Известная страна (Казахстан)</h3>
      <DemoForm initialValue='76005002040' />

      <h3>Неизвестная страна (Другое)</h3>
      <DemoForm initialValue='55566667777' />
    </div>
  ));

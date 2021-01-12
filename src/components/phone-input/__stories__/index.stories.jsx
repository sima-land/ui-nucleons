import React from 'react';
import { storiesOf } from '@storybook/react';
import { PhoneInput } from '..';
import { useState } from '@storybook/addons';

storiesOf('PhoneInput', module)
  .add('Usage', () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    return (
      <div style={{ padding: 32 }}>
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
      </div>
    );
  });

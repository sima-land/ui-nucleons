import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { useState } from 'react';

export default {
  title: 'common/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'padded',
  },
};

export function Validation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  return (
    <PhoneInput
      style={{ width: 320 }}
      value={value}
      onFocus={() => {
        setError(null);
      }}
      onChange={(event, data) => {
        setValue(data.cleanValue);
        setError(null);
      }}
      onBlur={(event, data) => {
        !data.completed && setError('Поле не заполнено');
      }}
      failed={Boolean(error)}
      caption={error || 'Мы не будем звонить по этому номеру'}
    />
  );
}

Validation.storyName = 'Пример: проверка заполнения';

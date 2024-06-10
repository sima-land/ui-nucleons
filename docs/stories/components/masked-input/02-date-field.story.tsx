import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/MaskedInput',
  title: 'Поле даты',
  parameters: {
    layout: 'padded',
  },
};

export default function DateField() {
  const defaultRawValue = '08.05.1995';
  const defaultValue = '08051995';
  const mask = '__.__.____';
  const placeholder = 'ДД.ММ.ГГГГ';

  const [rawValue, setRawValue] = useState(defaultRawValue);
  const [value, setValue] = useState(defaultValue);

  return (
    <MaskedInput
      label='Дата рождения'
      mask={mask}
      value={value}
      onChange={(event, data) => {
        setRawValue(data.value);
        setValue(data.cleanValue);
      }}
      baseInputProps={{
        restPlaceholder: {
          value: [...Array(mask.length).keys()]
            .map(i => placeholder[i])
            .join('')
            .slice(rawValue.length),
        },
      }}
    />
  );
}

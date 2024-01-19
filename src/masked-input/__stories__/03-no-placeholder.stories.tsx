import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';

export default {
  title: 'common/MaskedInput',
  component: MaskedInput,
  parameters: {
    layout: 'padded',
  },
};

export function NoPlaceholder() {
  const defaultValue = '1112223344';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
        baseInputProps={{
          restPlaceholder: { value: '' },
        }}
      />
    </>
  );
}

NoPlaceholder.storyName = 'Без placeholder';

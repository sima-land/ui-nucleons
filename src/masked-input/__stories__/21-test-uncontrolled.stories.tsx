import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';

export default {
  title: 'common/MaskedInput',
  component: MaskedInput,
  parameters: {
    layout: 'padded',
  },
};

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

TestUncontrolled.storyName = 'Тест: Неконтролируемое поле';

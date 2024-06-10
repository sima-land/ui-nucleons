import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/MaskedInput',
  title: 'Различные состояния',
};

export default function DifferentState() {
  const defaultValue = '8005553535';
  const [value, setValue] = useState(defaultValue);
  const [state, setState] = useState('default');
  const [controlled, setControlled] = useState(true);

  return (
    <Sandbox
      controls={[
        {
          label: 'Состояние',
          type: 'select',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'disabled', displayName: 'Отключено' },
          ],
        },
        {
          label: 'Контролируемый',
          type: 'toggle',
          bind: [controlled, setControlled],
        },
      ]}
    >
      <MaskedInput
        key={`${controlled}`}
        label='Телефон'
        mask='+7 (___) ___-__-__'
        value={controlled ? value : undefined}
        defaultValue={!controlled ? defaultValue : undefined}
        disabled={state === 'disabled'}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
      />
    </Sandbox>
  );
}

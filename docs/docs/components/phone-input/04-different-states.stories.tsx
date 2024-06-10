import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { useState } from 'react';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/PhoneInput',
  title: 'Различные состояния',
  parameters: {
    layout: 'padded',
  },
};

export default function DifferentState() {
  const defaultValue = '78005553535';

  const [value, setValue] = useState(defaultValue);
  const [state, setState] = useState('default');
  const [event, setEvent] = useState('change');
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
            { value: 'failed', displayName: 'Ошибка' },
          ],
        },
        {
          label: 'Событие',
          type: 'select',
          bind: [event, setEvent],
          options: [
            { value: 'change', displayName: 'change' },
            { value: 'input', displayName: 'input' },
          ],
        },
        {
          label: 'Контролируемый',
          type: 'toggle',
          bind: [controlled, setControlled],
        },
      ]}
    >
      <PhoneInput
        key={`${controlled}`}
        label='Телефон'
        disabled={state.includes('disabled')}
        failed={state.includes('failed')}
        {...(controlled && {
          value,
        })}
        {...(!controlled && {
          defaultValue,
        })}
        {...(event === 'change' && {
          onChange: (e, data) => setValue(data.cleanValue),
        })}
        {...(event === 'input' && {
          onInput: (e, data) => setValue(data.cleanValue),
        })}
      />

      <p>Значение: {value}</p>
    </Sandbox>
  );
}

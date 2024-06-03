import { Input, InputProps } from '@sima-land/ui-nucleons/input';
import { useState } from 'react';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentStates() {
  const [size, setSize] = useState<FieldBlockSize>('l');
  const [state, setState] = useState<string>('default');

  const props: InputProps = {
    size,
    disabled: state.includes('disabled'),
    failed: state.includes('failed'),
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'l', displayName: 'L' },
          ],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'failed', displayName: 'Ошибка' },
            { value: 'disabled', displayName: 'Отключено' },
            { value: 'failed+disabled', displayName: 'Ошибка + отключено' },
          ],
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Input {...props} label='ФИО' caption='Только label' />
        <Input {...props} placeholder='Email' caption='Только placeholder' />
        <Input {...props} label='Телефон' placeholder='89008007060' caption='Label и placeholder' />
        <Input {...props} caption='Без label и placeholder' />
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

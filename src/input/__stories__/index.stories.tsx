import { useState } from 'react';
import { Input, InputProps } from '..';
import { FieldBlockSize } from '../../field-block';
import { Sandbox } from '../../../.storybook/utils';
import { COLORS } from '../../colors';
import FaceIdSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/FaceId';

export default {
  title: 'common/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Input
        size='l'
        label='ФИО'
        placeholder='Иванов Иван Иванович'
        rootProps={{ style: { '--field-width': '320px' } }}
        adornmentEnd={<FaceIdSVG fill={COLORS.get('basic-gray38')} />}
      />
    </>
  );
}

Primary.storyName = 'Простой пример';

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
          options: ['l', 'm', 's'],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: ['default', 'failed', 'disabled', 'failed+disabled'],
        },
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Input {...props} label='ФИО' caption='Только label' />
        <Input {...props} placeholder='Email' caption='Только placeholder' />
        <Input {...props} label='Телефон' placeholder='89008007060' caption='Label и placeholder' />
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

export function Clearable() {
  const [value, setValue] = useState<string>('Hello, world!');

  const props: InputProps = {
    value,
    clearable: true,
    placeholder: 'Напиши что-нибудь...',
    onClear: () => setValue(''),
    onChange: e => setValue(e.target.value),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input {...props} size='s' />
      <Input {...props} size='m' />
      <Input {...props} size='l' />

      <div>
        <h4>Нативное поле (крестик отображается в Chrome, Safari)</h4>
        <input
          type='search'
          value={value}
          onChange={e => setValue(e.target.value)}
          style={{ width: 240, height: 32 }}
          placeholder='Напиши что-нибудь...'
        />
      </div>
    </div>
  );
}

Clearable.storyName = 'С очисткой';

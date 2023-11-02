import { Input, InputProps } from '@sima-land/ui-nucleons/input';
import { useState } from 'react';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { Sandbox } from '../../../.storybook/utils';
import CalendarSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Calendar';
import SearchSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Search';

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
        label='ФИО'
        placeholder='Иванов Иван Иванович'
        caption='Не переживайте, это просто пример'
      />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentSizes() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Input size='l' placeholder='Номер паспорта' />
      <Input size='m' placeholder='Номер паспорта' />
      <Input size='s' placeholder='Номер паспорта' />
    </div>
  );
}

DifferentSizes.storyName = 'Различные размеры';

export function WithIcons() {
  const iconStart = <SearchSVG fill='#c2c2c2' />;
  const iconEnd = <CalendarSVG fill='#c2c2c2' />;

  return (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <Input adornmentStart={iconStart} placeholder='Поиск' />

      <Input adornmentEnd={iconEnd} placeholder='Дата' />

      <Input adornmentStart={iconStart} adornmentEnd={iconEnd} placeholder='Поиска даты?' />
    </div>
  );
}

WithIcons.storyName = 'С иконками';

export function Clearable() {
  const [value, setValue] = useState<string>('Hello, world!');

  const props: InputProps = {
    value,
    placeholder: 'Напиши что-нибудь...',
    onClear: () => setValue(''),
    onChange: e => setValue(e.target.value),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input clearable {...props} size='l' />
      <Input clearable {...props} size='m' />
      <Input clearable {...props} size='s' />

      <div>
        <h4>Нативное поле для сравнения (крестик отображается в Chrome, Safari)</h4>
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

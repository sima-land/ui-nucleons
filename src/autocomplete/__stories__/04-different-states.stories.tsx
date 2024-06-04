import { Autocomplete, AutocompleteProps } from '@sima-land/ui-nucleons/autocomplete';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentStates() {
  const [value, setValue] = useState<string>('');
  const [size, setSize] = useState<FieldBlockSize>('l');
  const [state, setState] = useState<'default' | 'failed' | 'disabled'>('default');
  const [loading, setLoading] = useState<boolean>(false);

  const autocompleteProps: AutocompleteProps = {
    value,
    size,
    label: 'Номер',
    disabled: state === 'disabled',
    failed: state === 'failed',
    onChange: e => setValue(e.target.value),
    caption: 'Это ни на что не повлияет',
    loading,
  };

  const items = [
    { value: 'Ноль' },
    { value: 'Один', disabled: true },
    { value: 'Два' },
    { value: 'Три' },
    { value: 'Четыре' },
    { value: 'Пять' },
    { value: 'Шесть' },
    { value: 'Семь' },
    { value: 'Восемь', disabled: true },
    { value: 'Девять', disabled: true },
    { value: 'Десять' },
  ];

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер поля',
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'l', displayName: 'L' },
          ],
          bind: [size as string, setSize],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'failed', displayName: 'Ошибка' },
            { value: 'disabled', displayName: 'Отключено' },
          ],
        },
        {
          type: 'toggle',
          label: 'Загрузка',
          bind: [loading, setLoading],
        },
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Autocomplete {...autocompleteProps}>
          {items.map(item => (
            <DropdownItem key={item.value} disabled={item.disabled} value={item.value}>
              {item.value}
            </DropdownItem>
          ))}
        </Autocomplete>
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

import { Autocomplete, AutocompleteProps } from '@sima-land/ui-nucleons/autocomplete';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { useState } from 'react';
import { Sandbox } from '#docs-utils';

export const meta = {
  title: 'Различные состояния',
  category: 'Компоненты/Autocomplete',
};

export default function () {
  const [value, setValue] = useState<string>('');
  const [size, setSize] = useState<FieldBlockSize>('l');
  const [state, setState] = useState<'default' | 'failed' | 'disabled'>('default');
  const [loading, setLoading] = useState<boolean>(false);
  const [droppingUp, setDroppingUp] = useState<boolean>(false);

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
        {
          type: 'toggle',
          label: 'Открытие меню вверх',
          bind: [droppingUp, setDroppingUp],
        },
      ]}
    >
      {droppingUp && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ccc',
            borderRadius: '8px',
            height: '30vh',
            marginBottom: '10px',
          }}
        >
          Заполнитель контента для создания недостатка места снизу
        </div>
      )}
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

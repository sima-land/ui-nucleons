import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { Select } from '@sima-land/ui-nucleons/select';

export const meta = {
  category: 'Компоненты/MaskedInput',
  title: 'Тест: Смена маски',
};

export default function TestMaskChange() {
  const masks: ReadonlyArray<{ name: string; mask: string }> = [
    {
      name: 'Паспорт',
      mask: '____ ______',
    },
    {
      name: 'Дата',
      mask: '__ / __ / ____',
    },
    {
      name: 'Телефон',
      mask: '+7 (___) ___-__-__',
    },
    {
      name: 'Карта',
      mask: '____ ____ ____ ____',
    },
  ];

  const [value, setValue] = useState('');
  const [mask, setMask] = useState(masks[0]);

  return (
    <>
      <Select
        opener={<Select.TextButton size='s' />}
        value={mask.name}
        onValueChange={maskName => {
          const newMask = masks.find(i => i.name === maskName);

          if (newMask) {
            setMask(newMask);
            setValue(newMask.mask.replace(/[^_]/g, '').replace(/_/g, '0'));
          }
        }}
      >
        {masks.map((item, index) => (
          <DropdownItem key={index} value={item.name}>
            {item.name}
          </DropdownItem>
        ))}
      </Select>

      <MaskedInput
        style={{ marginTop: '12px' }}
        label={mask.name}
        mask={mask.mask}
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
      />

      <p>Значение: {value || '[пусто]'}</p>
    </>
  );
}

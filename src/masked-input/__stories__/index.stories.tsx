import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { Select } from '@sima-land/ui-nucleons/select';
import { TextButton } from '@sima-land/ui-nucleons/text-button';

export default {
  title: 'common/MaskedInput',
  component: MaskedInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const defaultValue = '8005553535';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        value={value}
        onChange={(event, data) => setValue(data.cleanValue)}
      />

      <p>Значение: {value || '[пусто]'}</p>

      <TextButton size='s' onClick={() => setValue(defaultValue)}>
        Сбросить
      </TextButton>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DateField() {
  const defaultValue = '08.05.1995';
  const mask = '__.__.____';
  const placeholder = 'ДД.ММ.ГГГГ';
  const [value, setValue] = useState(defaultValue);
  const [rawValue, setRawValue] = useState(defaultValue);

  return (
    <MaskedInput
      label='Дата рождения'
      mask={mask}
      value={value}
      onChange={(event, data) => {
        setRawValue(data.value);
        setValue(data.cleanValue);
      }}
      baseInputProps={{
        restPlaceholder: {
          value: placeholder.slice(rawValue.length),
        },
      }}
    />
  );
}

DateField.storyName = 'Поле даты';

export function NoRestPlaceholder() {
  const defaultValue = '1112223344';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        baseInputProps={{ restPlaceholder: { value: '' } }}
        value={value}
        onChange={(event, data) => setValue(data.cleanValue)}
      />
    </>
  );
}

NoRestPlaceholder.storyName = 'Без rest placeholder';

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

export function TestMaskChange() {
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

TestMaskChange.storyName = 'Тест: Смена маски';

import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/PhoneInput',
  title: 'Тест: Сравнение с input',
  parameters: {
    layout: 'padded',
  },
};
export default function TestNativeInputComparison() {
  // PhoneInput
  const defaultValue = '79501922700';
  const [value, setValue] = useState<string>(defaultValue);
  const [key, setKey] = useState<number>(0);

  // input[type=number]
  const defaultText = 'Invalid value';
  const [text, setText] = useState<string>(defaultText);

  return (
    <>
      <PhoneInput
        key={key}
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
        style={{ width: '320px' }}
      />

      <p>Переданное значение: {value || '[пусто]'}</p>

      <TextButton
        size='s'
        onClick={() => {
          setValue(defaultValue);
          setKey(n => n + 1);
        }}
      >
        Сбросить
      </TextButton>

      <p>
        {/* Firefox позволяет вводить в input[type=number] нечисловые значения */}
        <input
          type='number'
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
        />
      </p>

      <p>Переданное значение: {text || '[пусто]'}</p>

      <TextButton
        size='s'
        onClick={() => {
          setText(defaultText);
        }}
      >
        Сбросить
      </TextButton>
    </>
  );
}

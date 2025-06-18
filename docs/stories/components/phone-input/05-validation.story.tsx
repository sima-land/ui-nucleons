import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/PhoneInput',
  title: 'Пример: проверка заполнения c ограничением минимального количества символов',
};

const MIN_LENGTH = 5;

export default function Validation() {
  const [value, setValue] = useState('');
  const [failed, setFailed] = useState(false);

  return (
    <PhoneInput
      filledMaskMinLength={MIN_LENGTH}
      style={{ width: 320 }}
      value={value}
      onFocus={() => {
        setFailed(false);
      }}
      onChange={(_, data) => {
        setValue(data.cleanValue);
        setFailed(false);
      }}
      onBlur={(_, data) => {
        !data.completed && setFailed(true);
      }}
      failed={failed}
      caption={`Минимальное допустимое количество символов: ${MIN_LENGTH}`}
    />
  );
}

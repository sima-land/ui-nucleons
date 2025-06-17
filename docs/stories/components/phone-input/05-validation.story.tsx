import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/PhoneInput',
  title: 'Пример: проверка заполнения c ограничением минимального количества символов',
};

export default function Validation() {
  const filledMaskMinLength = 5;
  const [value, setValue] = useState('');
  const [failed, setFailed] = useState(false);

  return (
    <PhoneInput
      filledMaskMinLength={filledMaskMinLength}
      style={{ width: 320 }}
      value={value}
      onFocus={() => {
        setFailed(false);
      }}
      onChange={(event, data) => {
        setValue(data.cleanValue);
        setFailed(false);
      }}
      onBlur={(event, data) => {
        !data.completed && setFailed(true);
      }}
      failed={failed}
      caption={`Минимальное допустимое количество символов: ${filledMaskMinLength}`}
    />
  );
}

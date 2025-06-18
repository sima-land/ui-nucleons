import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/MaskedInput',
  title: 'Пример: проверка заполнения c ограничением минимального количества символов',
};

const MIN_LENGTH = 10;

export default function Validation() {
  const [value, setValue] = useState('');
  const [failed, setFailed] = useState(false);

  return (
    <MaskedInput
      filledMaskMinLength={MIN_LENGTH}
      mask='____________'
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
      caption={`Минимальное допустимое количество символов: ${MIN_LENGTH}`}
      label='ИНН'
    />
  );
}

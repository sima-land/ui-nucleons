import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { ChangeEvent, useState } from 'react';

export const meta = {
  category: 'Компоненты/Stepper',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  const [value, setValue] = useState<string>('0');
  const number: number = parseInt(value) || 0;
  const limit = 10;

  const onAdd = () => {
    setValue(`${number + 1}`);
  };

  const onSubtract = () => {
    setValue(`${number - 1}`);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value.replace(/\D/g, '');

    if (nextValue === '') {
      setValue('');
    } else {
      setValue(`${Math.min(limit, parseInt(nextValue))}`);
    }
  };

  return (
    <>
      <Stepper
        value={value}
        onSubtract={onSubtract}
        onChange={onChange}
        onAdd={onAdd}
        plusDisabled={number >= limit}
        minusDisabled={number <= 0}
        buttonClickBehavior='prevent-input-blur'
      />
    </>
  );
}

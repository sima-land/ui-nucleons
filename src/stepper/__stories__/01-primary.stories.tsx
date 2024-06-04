import { Stepper } from '@sima-land/ui-nucleons/stepper';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'common/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
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

Primary.storyName = 'Простой пример';

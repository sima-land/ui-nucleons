import { Stepper, StepperProps, StepperSize } from '@sima-land/ui-nucleons/stepper';
import { ChangeEvent, useState } from 'react';
import { Sandbox } from '../../../.storybook/utils';

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

export function DifferentStates() {
  const [size, setSize] = useState<StepperSize>('s');
  const [value, setValue] = useState<string>('10');
  const [state, setState] = useState<string>('default');
  const [needHideDisabled, setNeedHideDisabled] = useState<boolean>(false);
  const number: number = parseInt(value) || 0;
  const limit = 15;

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

  const bindProps: StepperProps = {
    value,
    onSubtract,
    onChange,
    onAdd,
    canAdd: !(needHideDisabled && number >= limit),
    canSubtract: !(needHideDisabled && number <= 0),
    plusDisabled: state.includes('disabled') || state.includes('readonly') || number >= limit,
    minusDisabled: state.includes('disabled') || state.includes('readonly') || number <= 0,
    buttonClickBehavior: 'prevent-input-blur',
  };

  const stateProps: StepperProps = {
    size,
    disabled: state.includes('disabled'),
    readOnly: state.includes('readonly'),
    failed: state.includes('failed'),
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: [
            'default',
            'failed',
            'readonly',
            'readonly + failed',
            'disabled',
            'disabled + failed',
          ],
        },
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: ['s', 'm'],
        },
        {
          type: 'toggle',
          label: 'Скрывать недоступные кнопки',
          bind: [needHideDisabled, setNeedHideDisabled],
        },
      ]}
    >
      <Stepper {...stateProps} {...bindProps} />
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

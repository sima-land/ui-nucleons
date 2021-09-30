import React, { useState } from 'react';
import { Stepper, StepperProps } from '..';

export default {
  title: 'desktop/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
};

const Template: React.FC<StepperProps> = props => {
  const [value, setValue] = useState('');
  const [withControls, toggleControls] = useState(false);
  const amount = parseInt(value || '0');
  const max = 99;

  const control: Partial<StepperProps> = {
    canAdd: withControls && amount < max,
    canSubtract: withControls && amount > 0,
    onChange: e => {
      setValue(e.target.value.replace(/\D/g, ''));
    },
    onAdd: () => {
      setValue(String(Math.min(max, amount + 1)));
    },
    onSubtract: () => {
      setValue(String(Math.max(0, amount - 1)));
    },
    onBlur: e => {
      setValue(String(Math.min(max, Math.max(0, parseInt(e.target.value || '0')))));
      toggleControls(Boolean(e.target.value));
    },
  };

  return (
    <>
      <h4>Default</h4>
      <Stepper {...props} {...control} value={value} />

      <h4>Disabled</h4>
      <Stepper {...props} value={value} disabled />

      <h4>Readonly</h4>
      <Stepper {...props} value={value} readOnly />

      <h4>Failed</h4>
      <Stepper {...props} {...control} value={value} failed />
    </>
  );
};

export const Primary = Template.bind(null, { size: 'm' });

export const SmallSize = Template.bind(null, { size: 's' });

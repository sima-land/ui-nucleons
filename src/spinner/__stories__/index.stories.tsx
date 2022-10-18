import React, { useState } from 'react';
import { Spinner, SpinnerSize } from '..';
import { Sandbox } from '../../../.storybook/utils';
import { COLORS, Token } from '../../colors';

export default {
  title: 'common/Spinner',
  component: Spinner,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Spinner size='m' />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentStates() {
  const [size, setSize] = useState<SpinnerSize>('m');
  const [color, setColor] = useState<Token>('basic-blue');

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: ['s', 'm', 'l'],
        },
        {
          type: 'select',
          label: 'Цвет',
          bind: [color, setColor],
          options: [...COLORS.keys()],
        },
      ]}
    >
      <Spinner size={size} color={color} />
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

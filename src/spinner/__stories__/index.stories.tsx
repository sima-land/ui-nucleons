import { Spinner, SpinnerSize } from '@sima-land/ui-nucleons/spinner';
import { COLORS, Token } from '@sima-land/ui-nucleons/colors';
import { useState } from 'react';
import { Sandbox } from '../../../.storybook/utils';

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

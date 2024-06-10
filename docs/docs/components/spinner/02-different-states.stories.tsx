import { Spinner, SpinnerSize } from '@sima-land/ui-nucleons/spinner';
import { COLORS, Token } from '@sima-land/ui-nucleons/colors';
import { useState } from 'react';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/Spinner',
  title: 'Различные состояния',
  parameters: {
    layout: 'padded',
  },
};

export default function DifferentStates() {
  const [size, setSize] = useState<SpinnerSize>('m');
  const [color, setColor] = useState<Token>('basic-blue');

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'l', displayName: 'L' },
          ],
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

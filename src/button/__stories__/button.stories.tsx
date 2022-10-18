import React, { useState } from 'react';
import { Button, ButtonProps, ButtonSize, ButtonViewType } from '..';
import PlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/plus';
import Placeholder16SVG from '@sima-land/ui-quarks/icons/16x16/Stroked/placeholder';
import Placeholder24SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/placeholder';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Button size='s' icon={PlusSVG} onClick={() => alert('Спасибо!')}>
        Нажми на меня
      </Button>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentStates() {
  const [size, setSize] = useState<ButtonSize>('s');
  const [viewType, setViewType] = useState<ButtonViewType>('primary');
  const [state, setState] = useState<'default' | 'disabled'>('default');

  const props: ButtonProps = {
    size,
    viewType,
    disabled: state.includes('disabled'),
    loading: state.includes('loading'),
    onClick: () => alert('Клик по кнопке прошёл успешно'),
  };

  const IconSVG = size === 'xs' ? Placeholder16SVG : Placeholder24SVG;

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          options: ['xs', 's', 'm'],
          bind: [size, setSize],
        },
        {
          type: 'select',
          label: 'Тип действия',
          options: ['primary', 'secondary'],
          bind: [viewType, setViewType],
        },
        {
          type: 'select',
          label: 'Состояние',
          options: ['default', 'disabled', 'loading', 'loading+disabled'],
          bind: [state, setState],
        },
      ]}
    >
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Button {...props} icon={IconSVG} />

        <Button {...props}>Действие</Button>

        <Button {...props} icon={IconSVG}>
          Действие
        </Button>

        <Button {...props} icon={IconSVG} iconPosition='end'>
          Действие
        </Button>
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

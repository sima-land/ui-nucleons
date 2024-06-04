import { Button, ButtonProps, ButtonSize, ButtonViewType } from '@sima-land/ui-nucleons/button';
import { useState } from 'react';
import Placeholder16SVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Placeholder';
import Placeholder24SVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

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
          options: [
            { value: 'xs', displayName: 'XS' },
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
          ],
          bind: [size, setSize],
        },
        {
          type: 'select',
          label: 'Тип действия',
          options: [
            { value: 'primary', displayName: 'Primary' },
            { value: 'secondary', displayName: 'Secondary' },
            { value: 'success', displayName: 'Success' },
            { value: 'info', displayName: 'Info' },
          ],
          bind: [viewType, setViewType],
        },
        {
          type: 'select',
          label: 'Состояние',
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'disabled', displayName: 'Отключено' },
            { value: 'loading', displayName: 'Загрузка' },
            { value: 'loading+disabled', displayName: 'Загрузка + отключено' },
          ],
          bind: [state, setState],
        },
      ]}
    >
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Button {...props} icon={IconSVG} />

        <Button {...props}>Действие</Button>

        <Button {...props} icon={IconSVG} iconPosition='start'>
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

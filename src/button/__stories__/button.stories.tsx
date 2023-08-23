import {
  Button,
  ButtonProps,
  ButtonSize,
  ButtonStyle,
  ButtonViewType,
} from '@sima-land/ui-nucleons/button';
import { CSSProperties, useState } from 'react';
import ShareSVG from '@sima-land/ui-quarks/icons/16x16/Filled/Share';
import ShareAndroidSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';
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

export function Primary() {
  return (
    <>
      <Button onClick={() => alert('Спасибо!')}>Нажми на меня</Button>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentColors() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button viewType='primary'>Primary</Button>
      <Button viewType='secondary'>Secondary</Button>
      <Button viewType='success'>Success</Button>
    </div>
  );
}

DifferentColors.storyName = 'Варианты цветов';

export function DifferentSizes() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button size='m'>Просто кнопка</Button>
      <Button size='s'>Просто кнопка</Button>
      <Button size='xs'>Просто кнопка</Button>
    </div>
  );
}

DifferentSizes.storyName = 'Варианты размеров';

export function OnlyIcon() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button size='m' icon={ShareAndroidSVG} />
      <Button size='s' icon={ShareAndroidSVG} />
      <Button size='xs' icon={ShareSVG} />
    </div>
  );
}

OnlyIcon.storyName = 'Только иконка';

export function IconStart() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button size='m' icon={ShareAndroidSVG} iconPosition='start'>
        Поделиться
      </Button>
      <Button size='s' icon={ShareAndroidSVG} iconPosition='start'>
        Поделиться
      </Button>
      <Button size='xs' icon={ShareSVG} iconPosition='start'>
        Поделиться
      </Button>
    </div>
  );
}

IconStart.storyName = 'Иконка в начале';

export function IconEnd() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button size='m' icon={ShareAndroidSVG} iconPosition='end'>
        Поделиться
      </Button>
      <Button size='s' icon={ShareAndroidSVG} iconPosition='end'>
        Поделиться
      </Button>
      <Button size='xs' icon={ShareSVG} iconPosition='end'>
        Поделиться
      </Button>
    </div>
  );
}

IconEnd.storyName = 'Иконка в конце';

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
          options: ['primary', 'secondary', 'success'],
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

export function CustomColors() {
  const container: CSSProperties = {
    maxWidth: '480px',
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    justifyContent: 'stretch',
  };
  const sber: ButtonStyle = {
    '--button-color': '#fff',
    '--button-background': '#107f8c',
  };
  const tinkoff: ButtonStyle = {
    '--button-color': '#000',
    '--button-background': '#ffdd2d',
  };
  const apple: ButtonStyle = {
    '--button-color': '#fff',
    '--button-background': '#161616',
    '--button-hover-background': '#404040',
  };

  return (
    <div style={container}>
      <Button viewType='unset' style={sber}>
        Войти по СберБизнес ID
      </Button>
      <Button viewType='unset' style={tinkoff}>
        Войти с Tinkoff
      </Button>
      <Button viewType='unset' style={apple}>
        Войти с Apple ID
      </Button>
    </div>
  );
}

CustomColors.storyName = 'Пользовательские цвета';

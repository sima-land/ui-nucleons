import { TopBar, TopBarSize } from '@sima-land/ui-nucleons/top-bar';
import { useState } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';
import ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { Sandbox } from '../../../.storybook/utils';
import { Plate } from '@sima-land/ui-nucleons/plate';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function Primary() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar size='m' title='Это заголовок топбара' />
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function WithSubtitle() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar size='m' title='Это заголовок топбара' subtitle='А это подзаголовок топбара' />
    </div>
  );
}

WithSubtitle.storyName = 'С подзаголовком';

export function WithTextButtons() {
  const stub = () => {
    alert('Ничего не произошло');
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar
        size='m'
        title='Это заголовок топбара'
        subtitle='А это подзаголовок топбара'
        buttons={{
          start: { text: 'Отмена', onClick: stub },
          end: { text: 'Применить', onClick: stub },
        }}
      />
    </div>
  );
}

WithTextButtons.storyName = 'С текстовыми кнопками';

export function WithIconButtons() {
  const stub = () => {
    alert('Ничего не произошло');
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar
        size='m'
        title='Это заголовок топбара'
        subtitle='А это подзаголовок топбара'
        buttons={{
          start: { icon: <ArrowLeftSVG />, onClick: stub },
          end: { icon: <CrossSVG />, onClick: stub },
        }}
      />
    </div>
  );
}

WithIconButtons.storyName = 'С кнопками-иконками';

export function WithMixedButtons() {
  const stub = () => {
    alert('Ничего не произошло');
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar
        size='m'
        title='Это заголовок топбара'
        subtitle='А это подзаголовок топбара'
        buttons={{
          start: { icon: <ArrowLeftSVG />, onClick: stub },
          end: { text: 'Завершить', onClick: stub },
        }}
      />
    </div>
  );
}

WithMixedButtons.storyName = 'С разными кнопками';

export function DifferentStates() {
  const [size, setSize] = useState<TopBarSize>('m');

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: ['s', 'm', 'xl'],
        },
      ]}
      areaStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        background: '#ccc',
        borderColor: '#ccc',
      }}
    >
      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            icon: <PlaceholderSVG />,
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          end: {
            icon: <PlaceholderSVG />,
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            icon: <PlaceholderSVG />,
          },
          end: {
            icon: <PlaceholderSVG />,
          },
          endSecondary: {
            icon: <PlaceholderSVG />,
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            icon: <PlaceholderSVG />,
          },
          startSecondary: {
            icon: <PlaceholderSVG />,
          },
          end: {
            icon: <PlaceholderSVG />,
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            icon: <PlaceholderSVG />,
          },
          startSecondary: {
            icon: <PlaceholderSVG />,
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          end: {
            icon: <PlaceholderSVG />,
          },
          endSecondary: {
            icon: <PlaceholderSVG />,
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            icon: <PlaceholderSVG />,
          },
          startSecondary: {
            icon: <PlaceholderSVG />,
          },
          end: {
            icon: <PlaceholderSVG />,
          },
          endSecondary: {
            icon: <PlaceholderSVG />,
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            text: 'Назад',
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          end: {
            text: 'Отмена',
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            text: 'Отменить',
          },
          end: {
            text: 'Ок',
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            icon: <PlaceholderSVG />,
          },
          end: {
            text: 'Отмена',
          },
        }}
      />

      <TopBar
        size={size}
        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae.'
        buttons={{
          start: {
            icon: <PlaceholderSVG />,
          },
          startSecondary: {
            icon: <PlaceholderSVG />,
          },
          end: {
            text: 'Отмена',
          },
        }}
      />
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

DifferentStates.parameters = {
  layout: 'padded',
  backgrounds: { default: 'white' },
};

export function Customization() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <Plate rounds='m' shadow='z3' style={{ height: '240px' }}>
        <TopBar
          size='m'
          title='Настройки'
          style={{
            borderRadius: '8px 8px 0 0',
            '--top-bar-height': '76px',
            '--top-bar-title-size': '20px',
            '--top-bar-title-height': '28px',
            '--top-bar-text-align': 'left',
          }}
          divided
        />
      </Plate>
    </div>
  );
}

Customization.storyName = 'Кастомизация';

export function TestCustomTitle() {
  return (
    <TopBar
      title={
        <>
          Lorem <Link href='https://www.sima-land.ru'>ipsum dolor</Link> sit <b>amet consectetur</b>{' '}
          adipisicing elit. Libero, obcaecati.
        </>
      }
      subtitle={
        <>
          Lorem ipsum dolor sit <b>amet consectetur</b>, adipisicing elit. Libero, obcaecati.
        </>
      }
    />
  );
}

TestCustomTitle.storyName = 'Тест: Сложные заголовки';

TestCustomTitle.parameters = {
  layout: 'padded',
  backgrounds: { default: 'custom:gray' },
};

import { useState } from 'react';
import { TopBar, TopBarSize } from '..';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';
import { Sandbox } from '../../../.storybook/utils';
import { Link } from '../../link';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar
        size='m'
        title='Это заголовок топбара'
        subtitle='А это подзаголовок топбара'
        buttons={{
          end: {
            icon: <CrossSVG />,
          },
        }}
      />
    </div>
  );
}

Primary.storyName = 'Простой пример';

Primary.parameters = {
  layout: 'padded',
  backgrounds: { default: 'custom:gray' },
};

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

TestCustomTitle.storyName = 'Тест: сложные заголовки';

TestCustomTitle.parameters = {
  layout: 'padded',
  backgrounds: { default: 'custom:gray' },
};

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

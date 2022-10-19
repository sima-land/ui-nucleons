import React, { useState } from 'react';
import { TopBar, TopBarSize } from '..';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/placeholder';
import CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/cross';
import { Sandbox } from '../../../.storybook/utils';

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

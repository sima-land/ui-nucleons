import { TopBar, TopBarSize } from '@sima-land/ui-nucleons/top-bar';
import { useState } from 'react';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
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
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'xl', displayName: 'XL' },
          ],
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

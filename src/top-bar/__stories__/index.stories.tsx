import React, { useState } from 'react';
import { TopBar, TopBarSize } from '..';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/placeholder';
import { Select } from '../../select';
import { Plate } from '../../plate';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function Primary() {
  const [size, setSize] = useState<TopBarSize>('m');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <Plate rounds='s' style={{ padding: 12 }}>
        <Select
          size='xs'
          optionSize='s'
          placeholder='Размер'
          options={['s', 'm', 'xl']}
          onSelect={option => setSize(option as any)}
          renderOption={option => option.toUpperCase()}
          value={`Size: ${size.toUpperCase()}`}
        />
      </Plate>

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
    </div>
  );
}

import React from 'react';
import { Story } from '@storybook/react';
import { times } from 'lodash';
import { TouchSlider } from '..';
import { COLORS } from '../../colors';
import { MobileLayout } from '../../layout';

export default {
  title: 'mobile/TouchSlider',
  component: TouchSlider,
  parameters: {
    layout: 'fullscreen',
  },
};

const Placeholder = () => (
  <div
    style={{
      height: '40px',
      borderRadius: '4px',
      background: '#eee',
      margin: '32px 0',
    }}
  />
);

export const Primary: Story = () => (
  <>
    <MobileLayout>
      <Placeholder />
    </MobileLayout>

    <TouchSlider>
      {times(20).map(index => (
        <div
          key={index}
          style={{
            width: 200,
            height: 100,
            fontSize: 20,
            background: COLORS.get('additional-pink'),
            color: '#fff',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: index > 0 ? 8 : 0,
          }}
        >
          {index + 1}
        </div>
      ))}
    </TouchSlider>

    <MobileLayout>
      <Placeholder />
    </MobileLayout>
  </>
);

Primary.storyName = 'Простой пример';

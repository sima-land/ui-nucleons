import React from 'react';
import { TouchSlider } from '..';
import { MobileLayout } from '../../layout';

const phrase = 'этот текст будет прокручиваться на touch устройствах';

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

export default {
  title: 'mobile/TouchSlider',
  component: TouchSlider,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => (
  <>
    <MobileLayout>
      <Placeholder />
    </MobileLayout>

    <TouchSlider>
      {phrase.split(' ').map((word, i) => (
        <div
          key={i}
          style={{
            flexShrink: 0,
            width: 200,
            height: 100,
            fontSize: 20,
            background: '#e82e5c',
            color: '#fff',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: i > 0 ? 8 : 0,
          }}
        >
          {word}
        </div>
      ))}
    </TouchSlider>

    <MobileLayout>
      <Placeholder />
    </MobileLayout>
  </>
);

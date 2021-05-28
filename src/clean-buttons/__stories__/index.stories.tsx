import { action } from '@storybook/addon-actions';
import React from 'react';
import { Clean } from '..';

const DisplayWrapper: React.FC = ({ children }) => (
  <div style={{ background: '#fff' }}>
    {children}
  </div>
);

export default {
  title: 'Clean.Group',
  component: Clean.Group,
  parameters: {
    layout: 'padded',
  },
};

const Action = (value: any) => () => action('click')(value);

export const Primary = () => (
  <div style={{ background: '#ccc', padding: 32 }}>
    <div style={{ margin: 'auto', maxWidth: 720 }}>
      <h3>Single button</h3>

      <DisplayWrapper>
        <Clean.Group>
          <Clean.Button onClick={Action('Single')}>
            Single button
          </Clean.Button>
        </Clean.Group>
      </DisplayWrapper>

      <h3>Just buttons</h3>

      <DisplayWrapper>
        <Clean.Group>
          <Clean.Button onClick={Action('Hello')}>Hello</Clean.Button>
          <Clean.Button onClick={Action('World')}>World</Clean.Button>
        </Clean.Group>
      </DisplayWrapper>

      <h3>Buttons as links</h3>

      <DisplayWrapper>
        <Clean.Group>
          <Clean.Button href='https://ya.ru'>Yandex</Clean.Button>
          <Clean.Button href='https://google.com'>Google</Clean.Button>
        </Clean.Group>
      </DisplayWrapper>
    </div>
  </div>
);

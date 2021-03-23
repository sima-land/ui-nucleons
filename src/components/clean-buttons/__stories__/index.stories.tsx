import React from 'react';
import { storiesOf } from '@storybook/react';
import Clean from '../index';

const DisplayWrapper: React.FC = ({ children }) => (
  <div style={{ background: '#fff' }}>
    {children}
  </div>
);

storiesOf('CleanGroup', module)
  .add('Default', () => (
    <div style={{ background: '#aaa', padding: 32 }}>
      <h3>Just buttons</h3>

      <DisplayWrapper>
        <Clean.Group>
          <Clean.Button>Hello</Clean.Button>
          <Clean.Button>World</Clean.Button>
        </Clean.Group>
      </DisplayWrapper>

      <h4>Small</h4>

      <DisplayWrapper>
        <Clean.Group size='s'>
          <Clean.Button>Foo</Clean.Button>
          <Clean.Button>Bar</Clean.Button>
          <Clean.Button>Baz</Clean.Button>
        </Clean.Group>
      </DisplayWrapper>
      <h3>Buttons as links</h3>

      <DisplayWrapper>
        <Clean.Group>
          <Clean.Button href='https://ya.ru'>Yandex</Clean.Button>
          <Clean.Button href='https://google.com'>Google</Clean.Button>
        </Clean.Group>
      </DisplayWrapper>
      <h4>Small</h4>

      <DisplayWrapper>
        <Clean.Group size='s'>
          <Clean.Button href='https://ya.ru'>Yandex</Clean.Button>
          <Clean.Button href='https://google.com'>Google</Clean.Button>
          <Clean.Button href='https://rambler.com'>Rambler</Clean.Button>
        </Clean.Group>
      </DisplayWrapper>
    </div>
  ));

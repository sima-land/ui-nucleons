import React from 'react';
import { storiesOf } from '@storybook/react';
import BorderedLayout from '../index';

const Demo = ({ children, ...props }) => (
  <div style={{ margin: '32px 0', padding: 16 }}>
    <BorderedLayout {...props}>
      <div style={{ padding: '16px 0' }}>
        {children}
      </div>
    </BorderedLayout>
  </div>
);

storiesOf('BorderedLayout', module)
  .add('Usage', () => (
    <>
      <Demo top bottom>
        Рамка сверху и снизу
      </Demo>

      <Demo top>
        Рамка сверху
      </Demo>

      <Demo bottom>
        Рамка снизу
      </Demo>
    </>
  ));

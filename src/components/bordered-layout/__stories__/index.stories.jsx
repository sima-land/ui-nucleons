import React from 'react';
import { storiesOf } from '@storybook/react';
import BorderedLayout from '..';

const Demo = ({ children, ...props }) => (
  <div style={{ margin: '32px 0' }}>
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
        Граница сверху и снизу
      </Demo>

      <Demo top>
        Граница сверху
      </Demo>

      <Demo bottom>
        Граница снизу
      </Demo>
    </>
  ));

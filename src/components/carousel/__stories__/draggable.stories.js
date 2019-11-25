import React from 'react';
import { storiesOf } from '@storybook/react';
import Draggable from '../draggable';

storiesOf('Draggable', module)
  .add('Example', () => (
    <Draggable containerProps={{ style: { width: 300, height: 200, border: '1px solid #aaa' } }}>
      <div style={{ width: '100%', height: '100%', background: '#eee', padding: 20, boxSizing: 'border-box' }}>
        This div is draggable
      </div>
    </Draggable>
  ));

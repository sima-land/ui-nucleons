import React from 'react';
import Draggable from '../draggable';

export default {
  title: 'Draggable',
  component: Draggable,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <Draggable containerProps={{ style: { width: 300, height: 200, border: '1px solid #aaa' } }}>
    <div style={{ width: '100%', height: '100%', background: '#eee', padding: 20, boxSizing: 'border-box' }}>
      This div is draggable
    </div>
  </Draggable>
);

import React from 'react';
import { Hint } from '..';

export default {
  title: 'hint/Hint',
  component: Hint,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    {(['top', 'right', 'bottom', 'left'] as const).map(direction => (
      <div key={direction} style={{ marginBottom: 20 }}>
        <h4>{direction}</h4>
        <Hint direction={direction}>Hello, world!</Hint>
      </div>
    ))}
  </>
);

export const Multiline = () => (
  <>
    {(['top', 'right', 'bottom', 'left'] as const).map(direction => (
      <div key={direction} style={{ marginBottom: 20 }}>
        <h4>{direction}</h4>
        <Hint direction={direction}>
          Hello, world!
          <br />
          Hello, world!
        </Hint>
      </div>
    ))}
  </>
);

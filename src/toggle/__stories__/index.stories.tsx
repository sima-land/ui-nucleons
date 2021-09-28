import React from 'react';
import { Toggle } from '../index';

export default {
  title: 'common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    {[
      { label: 'Default' },
      { label: 'Checked', checked: true },
      { label: 'Disabled', disabled: true },
    ].map(({ label, ...props }, index) => (
      <React.Fragment key={index}>
        <h3>{label}</h3>
        <Toggle {...props} onChange={() => void 0} />
      </React.Fragment>
    ))}
  </>
);

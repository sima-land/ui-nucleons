import React from 'react';
import { Toggle } from '../index';

export default {
  title: 'common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <h3>Default</h3>
      <Toggle />

      <h3>Checked</h3>
      <Toggle defaultChecked />

      <h3>Disabled</h3>
      <Toggle disabled />

      <h3>Disabled + checked</h3>
      <Toggle disabled defaultChecked />
    </>
  );
}

Primary.storyName = 'Простой пример';

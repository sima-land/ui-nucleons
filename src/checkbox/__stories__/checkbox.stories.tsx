import React from 'react';
import { Checkbox } from '..';

export default {
  title: 'common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <h3>Without props (uncontrolled input)</h3>
    <Checkbox />

    <h3>Checked</h3>
    <Checkbox checked />

    <h3>Disabled</h3>
    <Checkbox disabled />

    <h3>Disabled & checked</h3>
    <Checkbox checked disabled />

    <h3>Default checked</h3>
    <Checkbox defaultChecked />
  </>
);

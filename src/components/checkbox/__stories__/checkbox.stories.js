import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../index';

storiesOf('Checkbox', module)
  .add('all states', () => (
    <Fragment>
      <h3>Without props (uncontrolled input)</h3>
      <Checkbox />

      <h3>Checked</h3>
      <Checkbox checked />

      <h3>Disabled</h3>
      <Checkbox disabled />

      <h3>Disabled & checked</h3>
      <Checkbox checked disabled />
    </Fragment>
  ));

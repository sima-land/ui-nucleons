import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../index';

storiesOf('Switch', module)
  .add('Without props', () => (
    <div style={{ padding: 16, fontSize: 24 }}>
      This is <Switch /> without props.
    </div>
  ));

import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Timer from '../index';

storiesOf('Timer', module)
  .add('Default', () => (
    <Fragment>
      <h3>Default timer</h3>
      <Timer endTime='2021-01-01' />

      <h3>Custom timer</h3>
      <Timer
        endTime='2021-01-01'
        timeProps={{
          className: 'timer',
          style: {
            display: 'inline-block',
            padding: 10,
            background: '#eee',
          },
        }}
      />
    </Fragment>
  ));

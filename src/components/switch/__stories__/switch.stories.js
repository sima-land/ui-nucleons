import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../index';
import classes from './custom-styling.scss';

storiesOf('Switch', module)
  .add('Without props', () => (
    <div style={{ fontSize: 24 }}>
      This is <Switch /> without props.
    </div>
  ))
  .add('Custom styling', () => (
    <div style={{ fontSize: 24 }}>
      This is
      {' '}
      <Switch
        classes={{
          root: classes['root-custom'],
          track: classes['track-custom'],
          trackChecked: classes['track-checked-custom'],
          circle: classes['circle-custom'],
          circleChecked: classes['circle-checked-custom'],
        }}
      />
      {' '}
      with custom styling.
    </div>
  ));

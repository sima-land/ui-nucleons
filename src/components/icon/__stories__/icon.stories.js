import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../icon';

const props = {
  iconName: 'clock',
  size: '40',
  color: 'dark-blue',
};

storiesOf('Icon', module)
  .add('default icon', () => <Icon/>)
  .add('clock icon', () => <Icon {...props}/>)
  .add('icon with text', () => (
    <p
      style={{
        color: '#ff0000',
        fontSize: 20,
      }}
    >
      We <Icon {...{ iconName: 'heart' }}/> frontend!
    </p>
  ));


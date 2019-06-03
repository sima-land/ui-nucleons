import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../';
import heart from '../../icons/heart.svg';

storiesOf('Icon', module)
  .add('default icon', () => <Icon/>)
  .add('icon with text', () => (
    <p
      style={{
        color: '#ff0000',
        fontSize: 20,
      }}
    >
      We <Icon icon={heart}/> frontend!
    </p>
  ));


import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../';
import heart from '../../icons/heart.svg';
import cross from '../../icons/cross.svg';

const props = {
  icon: cross,
  size: 40,
  color: 'dark-blue',
};

storiesOf('Icon', module)
  .add('default icon', () => <Icon />)
  .add('ordinary icon', () => <Icon {...props} />)
  .add('icon in text', () => (
    <p
      style={{
        color: '#ff0000',
        fontSize: 20,
      }}
    >
      We <Icon icon={heart} inline /> frontend!
    </p>
  ));


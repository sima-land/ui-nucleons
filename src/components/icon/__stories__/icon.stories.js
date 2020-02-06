import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../';
import heart from '../../icons/heart.svg';
import cross from '../../icons/cross.svg';
import { COLORS } from '../../constants';

const props = {
  icon: cross,
  size: 40,
  color: 'dark-blue',
};

storiesOf('Icon', module)
  .add('default icon', () => <Icon />)
  .add('ordinary icon', () => <Icon {...props} />)
  .add('color variants', () => [...COLORS.keys()].map(colorKey => (
    <div key={colorKey} style={{ marginBottom: 16 }}>
      <Icon
        inline
        size={24}
        icon={heart}
        color={colorKey}
        style={{ marginRight: 8 }}
      />
      {colorKey}
    </div>
  )))
  .add('icon in text', () => (
    <p style={{ color: '#ff0000', fontSize: 20 }}>
      We <Icon icon={heart} inline /> frontend!
    </p>
  ));

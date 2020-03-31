import React from 'react';
import { storiesOf } from '@storybook/react';
import Screen from '../index';
import Button from '../../button';
import Box from '../../box';

storiesOf('Screen', module)
  .add('Base usage', () => (
    <Screen
      title='Title'
      subtitle='And subtitle here...'
      withBackButton
      footer={(
        <Box padding={4}>
          <Button style={{ width: '100%' }}>Footer button</Button>
        </Box>
      )}
    >
      <Box padding={4}>Hello, world!</Box>
    </Screen>
  ))
  .add('Loading state', () => (
    <Screen loading />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import Phone from '../phone';


storiesOf('Phone', module)
  .add('with phone number', () => <Phone phone='+7-900-800-70-60'></Phone>);

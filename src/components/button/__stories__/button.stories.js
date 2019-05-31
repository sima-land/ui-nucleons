import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../button';

storiesOf('Button/Button', module)
  .add('with text', () => <Button>Button</Button>);

import React from 'react';
import { storiesOf } from '@storybook/react';
import BorderedLayout from '../index';
import Text from '../../text';

storiesOf('BorderedLayout', module)
  .add('usage with top and bottom', () => (
    <BorderedLayout top bottom>
      <Text>
         Добавилась рамка сверху и снизу
      </Text>
    </BorderedLayout>
  ))
  .add('usage with top', () => (
    <BorderedLayout top>
      <Text>
        Добавилась рамка сверху
      </Text>
    </BorderedLayout>
  ))
  .add('usage with bottom', () => (
    <BorderedLayout bottom>
      <Text>
        Добавилась рамка снизу
      </Text>
    </BorderedLayout>
  ));

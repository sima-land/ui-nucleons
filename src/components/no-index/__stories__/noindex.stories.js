import React from 'react';
import { storiesOf } from '@storybook/react';
import NoIndex from '../index';

storiesOf('NoIndex', module)
  .add('No indexing text', () => (
    <p>
      <NoIndex>"Кто б ни были входящие сюда,<br />
          Оставьте здесь надежду навсегда!"<br />
					Написано над адскими вратами<br />
					Зловещими и черными чертами
      </NoIndex>
    </p>
  ));

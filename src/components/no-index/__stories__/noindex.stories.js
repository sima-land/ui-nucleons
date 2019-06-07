import React from 'react';
import { storiesOf } from '@storybook/react';
import NoIndex from '../noindex';

storiesOf('NoIndex', module)
  .add('No indexing text', () => (
    <p>
      <NoIndex>"Кто б ни были входящие сюда,<br></br>
					Оставьте здесь надежду навсегда!"<br></br>
					Написано над адскими вратами<br></br>
					Зловещими и черными чертами
      </NoIndex>
    </p>
  ));

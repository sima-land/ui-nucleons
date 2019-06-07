import React from 'react';
import { storiesOf } from '@storybook/react';
import Index from '../noindex';

storiesOf('NoIndex', module)
  .add('No indexing text', () => (
    <p>
      <Index>"Кто б ни были входящие сюда,<br />
          Оставьте здесь надежду навсегда!"<br />
					Написано над адскими вратами<br />
					Зловещими и черными чертами
      </Index>
    </p>
  ));

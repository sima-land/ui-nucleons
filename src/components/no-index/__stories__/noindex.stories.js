import React from 'react';
import { storiesOf } from '@storybook/react';
import NoIndex from '../';

storiesOf('NoIndex', module)
  .add('No indexing text', () => (
    <p>
      <NoIndex>&quot;Кто б ни были входящие сюда,<br />
          Оставьте здесь надежду навсегда!&quot;<br />
          Написано над адскими вратами<br />
          Зловещими и черными чертами
      </NoIndex>
    </p>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import NoIndexMark from '../';

storiesOf('NoIndexMark', module)
  .add('No indexing text', () => (
    <p>
      <NoIndexMark />
      &quot;Кто б ни были входящие сюда,<br />
        Оставьте здесь надежду навсегда!&quot;<br />
        Написано над адскими вратами<br />
        Зловещими и черными чертами
      <NoIndexMark closing />
    </p>
  ));

import React from 'react';
import { NoIndex } from '..';

export default {
  title: 'service/NoIndex',
  component: NoIndex,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <NoIndex>
      &quot;Кто б ни были входящие сюда,
      <br />
      Оставьте здесь надежду навсегда!&quot;
      <br />
      Написано над адскими вратами
      <br />
      Зловещими и черными чертами
    </NoIndex>
  </>
);

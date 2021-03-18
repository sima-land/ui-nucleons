import React from 'react';
import NoIndexMark from '..';

export default {
  title: 'service/NoIndexMark',
  component: NoIndexMark,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <NoIndexMark />
    &quot;Кто б ни были входящие сюда,<br />
      Оставьте здесь надежду навсегда!&quot;<br />
      Написано над адскими вратами<br />
      Зловещими и черными чертами
    <NoIndexMark closing />
  </>
);

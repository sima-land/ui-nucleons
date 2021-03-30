import React from 'react';
import { action } from '@storybook/addon-actions';
import { Link } from '..';

export default {
  title: 'Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <h3>Links are pretty smart:</h3>

    <p>
      <b>Link</b> component is just <Link href='https://ya.ru'>an anchor</Link>
    </p>

    <p>
      But with <code>pseudo</code> prop <b>Link</b> has
      {' '}
      <code>role=&quot;button&quot;</code> attribute:
      {' '}
      <Link pseudo onClick={action('Click')}>pseudo link</Link>
    </p>
  </>
);

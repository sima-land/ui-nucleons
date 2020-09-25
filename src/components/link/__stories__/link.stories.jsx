import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from '../';

const clickAction = action('Click');

storiesOf('Link', module)
  .add('just link', () => (
    <>
      <h3>Links are pretty smart:</h3>

      <p>
        <b>Link</b> component is just <Link href='http://ya.ru'>an anchor</Link>
      </p>

      <p>
        But with <code>pseudo</code> prop <b>Link</b> has
        {' '}
        <code>role=&quot;button&quot;</code> attribute:
        {' '}
        <Link pseudo onClick={clickAction}>pseudo link</Link>
      </p>
    </>
  ));

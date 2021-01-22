import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from '..';

const withMargin = {
  margin: '0 0 30px 10px',
};

storiesOf('Spinner', module)
  .add('sizes', () => (
    <>
      <div style={withMargin}>
        <h3>size=&apos;small&apos;</h3>
        <Spinner size='small' />
      </div>
      <div style={withMargin}>
        <h3>size=&apos;medium&apos;</h3>
        <Spinner size='medium' />
      </div>
      <div style={withMargin}>
        <h3>size=&apos;large&apos;</h3>
        <Spinner size='large' />
      </div>
    </>
  ))
  .add('colors', () => (
    <>
      <div style={{ ...withMargin, background: '#1f84db', padding: '4px 12px' }}>
        <h3>color=&apos;white&apos;</h3>
        <Spinner color='white' />
      </div>
    </>
  ));

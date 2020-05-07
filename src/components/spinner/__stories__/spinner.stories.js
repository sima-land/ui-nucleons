import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from '../';

storiesOf('Spinner', module)
  .add('sizes', () => {
    const withMargin = {
      margin: '0 0 30px 10px',
    };

    return (
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
    );
  });

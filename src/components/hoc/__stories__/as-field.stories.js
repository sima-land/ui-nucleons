import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../../input/';
import asField from '../as-field';

storiesOf('asField', module)
  .add('asField(Input)', () => {
    const TestField = asField(Input, {
      passProps: ({ error, ...props }) => ({
        failed: Boolean(error),
        ...props,
      }),
    });

    return (
      <Fragment>
        <h3>With label and info</h3>
        <TestField
          defaultValue='Test input'
          placeholder='Write text here...'
          info='Test info'
          label='Test label'
        />

        <h3>With error</h3>
        <TestField
          defaultValue='Test input'
          placeholder='Write text here...'
          error='Test error'
          label='Test label'
        />
      </Fragment>
    );
  });

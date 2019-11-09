import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '../index';

storiesOf('Textarea', module)
  .add('Variants', () => (
    <Fragment>
      <h3>With automatic fit height</h3>
      <Textarea
        defaultValue={[...Array(10).keys()].join(',\n')}
        autoFitHeight
        resizeable={false}
        placeholder='Enter your story'
      />

      <h3>Failed</h3>
      <Textarea
        failed
        resizeable={false}
        defaultValue='Some text'
        placeholder='Enter your story'
      />

      <h3>Full width</h3>
      <Textarea
        fullWidth
        rows={4}
        resizeable={false}
        defaultValue='Another text'
        placeholder='Enter your story'
      />
    </Fragment>
  ));


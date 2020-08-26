import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import InputMask from '../';
import TextField from '../../text-field';

storiesOf('InputMask', module)
  .add('Variants', () => (
    <Fragment>
      <h3>Simple input</h3>
      <div>
        <InputMask
          mask='+373-____-____'
        />
      </div>
      <h3>With desktop TextField and alwaysShowMask</h3>
      <div>
        <InputMask
          component={TextField}
          mask='+7 (___) ___ __ __'
          alwaysShowMask
        />
      </div>
      <h3>With mobile TextField</h3>
      <div>
        <InputMask
          component={TextField}
          variant='mobile'
          mask='(__)___-__-__'
          placeholder='Phone'
        />
      </div>
    </Fragment>
  ));

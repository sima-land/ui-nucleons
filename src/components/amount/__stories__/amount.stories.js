import React, { useState, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Amount from '../amount';

storiesOf('Amount', module)
  .add('default size (medium)', () => {
    const [value, setValue] = useState('');

    return (
      <Fragment>
        <h3>From 0 to 5</h3>
        <Amount
          value={value}
          onChange={({ target }) => {
            setValue(target.value.replace(/\D/g, '').slice(0, 5));
          }}
          onAdd={() => {
            setValue(String(Math.min(5, Number(value) + 1)));
          }}
          onSubtract={() => {
            setValue(String(Math.max(0, Number(value) - 1)));
          }}
          onBlur={() => {
            value && setValue(String(
              Math.min(5, Math.max(0, Number(value)))
            ));
          }}
        />
      </Fragment>
    );
  })
  .add('small size', () => {
    const [value, setValue] = useState('');

    return (
      <Fragment>
        <h3>From 10 to 50</h3>
        <Amount
          value={value}
          size='small'
          onChange={({ target }) => {
            setValue(target.value.replace(/\D/g, '').slice(0, 5));
          }}
          onAdd={() => {
            setValue(String(Math.min(5, Number(value) + 1)));
          }}
          onSubtract={() => {
            setValue(String(Math.max(0, Number(value) - 1)));
          }}
          onBlur={() => {
            value && setValue(String(
              Math.min(50, Math.max(10, Number(value)))
            ));
          }}
        />
      </Fragment>
    );
  });

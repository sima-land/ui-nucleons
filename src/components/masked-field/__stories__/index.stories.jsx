import React from 'react';
import { storiesOf } from '@storybook/react';
import { MaskedField } from '..';

storiesOf('MaskedField', module)
  .add('Usage', () => (
    <div style={{ padding: 32 }}>
      <h3>Варианты</h3>
      <MaskedField
        style={{ width: 320 }}
        label='Контактный телефон'
        mask='+7 (___) ___-__-__'
      />

      <div style={{ height: 32 }} />

      <MaskedField
        style={{ width: 320 }}
        label='Серия и номер паспорта'
        mask='__ __ №______'
      />
    </div>
  ));

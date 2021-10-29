import React from 'react';
import { MaskedField } from '..';

export default {
  title: 'common/MaskedField',
  component: MaskedField,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <MaskedField style={{ width: 320 }} label='Контактный телефон' mask='+7 (___) ___-__-__' />

    <div style={{ height: 32 }} />

    <MaskedField style={{ width: 320 }} label='Серия и номер паспорта' mask='__ __ №______' />
  </>
);

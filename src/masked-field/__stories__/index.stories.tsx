import { MaskedField } from '..';

export default {
  title: 'deprecated/MaskedField',
  component: MaskedField,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <MaskedField style={{ width: 320 }} label='Контактный телефон' mask='+7 (___) ___-__-__' />

      <div style={{ height: 32 }} />

      <MaskedField style={{ width: 320 }} label='Серия и номер паспорта' mask='__ __ №______' />
    </>
  );
}

Primary.storyName = 'Простой пример';

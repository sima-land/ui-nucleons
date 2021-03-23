import React, { useState } from 'react';
import { BaseInput } from '..';

export default {
  title: 'BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const styles = {
    border: '1px solid #000',
    display: 'flex',
    width: 200,
    padding: 8,
  };

  const longValue = [
    'Lorem ipsum dolor sit amet consectetur,',
    'adipisicing elit. Distinctio maxime at tempora',
    'adipisci placeat odio omnis laudantium cumque.',
    'Omnis, accusamus?',
  ].join(' \n');

  return (
    <>
      <h3>Regular</h3>
      <BaseInput
        defaultValue='Text'
        style={styles}
      />

      <div style={{ height: 32 }} />

      <h3>Multiline</h3>
      <BaseInput
        multiline
        defaultValue={longValue}
        style={styles}
      />
    </>
  );
};

export const RestPlaceholder = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <h3>Введите 10 цифр</h3>

      <BaseInput
        value={value}
        onChange={(e: any) => setValue(e.target.value.replace(/\D/g, '').slice(0, 10))}
        restPlaceholder={{ value: '9'.repeat(10).slice(value.length) }}
        style={{
          padding: 16,
          width: 240,
          border: '1px solid #aaa',
          '--placeholder-color': '#aaa',
        }}
      />
    </>
  );
};

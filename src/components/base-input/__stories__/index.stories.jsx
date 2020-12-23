import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { BaseInput } from '..';

const longValue = [
  'Lorem ipsum dolor sit amet consectetur,',
  'adipisicing elit. Distinctio maxime at tempora',
  'adipisci placeat odio omnis laudantium cumque.',
  'Omnis, accusamus?',
].join(' \n');

const Demo = ({ children }) => (
  <div style={{ padding: 32 }}>{children}</div>
);

storiesOf('BaseInput', module)
  .add('Usage', () => {
    const testStyles = {
      border: '1px solid #000',
      display: 'flex',
      width: 200,
      padding: 8,
    };

    return (
      <Demo>
        <h3>Regular</h3>
        <BaseInput
          defaultValue='Text'
          style={testStyles}
        />

        <div style={{ height: 32 }} />

        <h3>Multiline</h3>
        <BaseInput
          multiline
          defaultValue={longValue}
          style={testStyles}
        />
      </Demo>
    );
  })
  .add('Rest placeholder', () => {
    const [value, setValue] = useState('');

    return (
      <Demo>
        <h3>Введите 10 цифр</h3>
        <BaseInput
          value={value}
          onChange={e => setValue(e.target.value.replace(/\D/g, '').slice(0, 10))}
          restPlaceholder={{ value: '9'.repeat(10).slice(value.length) }}
          style={{
            padding: 16,
            width: 240,
            border: '1px solid #aaa',
            '--placeholder-color': '#bbb',
          }}
        />
      </Demo>
    );
  });

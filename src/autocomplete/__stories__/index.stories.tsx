import React, { useState } from 'react';
import { Autocomplete } from '..';

export default {
  title: 'desktop/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};

const testItems = [
  'U.S.',
  'France',
  'China',
  'Cambodia',
  'Chile',
  'Canada',
  'Poland',
  'Russia',
  'Belarus',
  'Ukraine',
];

export const PresetDefault = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Autocomplete
        preset='default'
        value={value}
        label='Страна'
        items={testItems.filter(s => s.toLowerCase().includes(value.toLowerCase()))}
        onChange={(e: any) => setValue(e.target.value)}
        onSelect={setValue}
        caption='Test caption'
      />
    </>
  );
};

export const PresetFilledOnlyList = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Autocomplete
        preset='filled-only-list'
        value={value}
        label='Страна'
        placeholder='Начните вводить название'
        items={testItems.filter(s => s.toLowerCase().includes(value.toLowerCase()))}
        onChange={(e: any) => setValue(e.target.value)}
        onSelect={setValue}
      />
    </>
  );
};

export const Loading = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ '--dropdown-max-height': '100px' }}>
      <Autocomplete
        preset='filled-only-list'
        value={value}
        loading={loading}
        label='Страна'
        placeholder='Начните вводить название'
        items={testItems.filter(s => s.toLowerCase().includes(value.toLowerCase()))}
        onChange={(e: any) => {
          setLoading(true);
          setValue(e.target.value);

          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }}
        onSelect={setValue}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { Range } from '..';

export default {
  title: 'Range',
  component: Range,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    <h3>From 10 to 20; step = 2</h3>
    <Range
      min={10}
      max={20}
      step={2}
    />

    <h3>From 0 to 10; step = 5</h3>
    <Range
      min={0}
      max={10}
      step={5}
    />

    <h3>From 10 to 100; step = 1</h3>
    <Range
      min={10}
      max={100}
      step={1}
    />

    <h3>From 5 to 16632; step = 1</h3>
    <Range
      min={5}
      max={16632}
      step={1}
    />

    <h3>From 1000 to 100000; step = 1000</h3>
    <Range
      min={1000}
      max={10000}
      step={1000}
    />

    <h3>Disabled</h3>
    <Range
      min={10}
      max={100}
      step={10}
      disabled
    />
  </>
);

export const WithUpdateProps = () => {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(20);
  const [currentStart, setStart] = useState(18);
  const [currentFinish, setFinish] = useState(12);

  return (
    <>
      <label>min</label>
      {' '}
      <input type='number' value={min} onChange={({ target }) => setMin(Number(target.value))} />
      {' '}
      <label>max</label>
      {' '}
      <input type='number' value={max} onChange={({ target }) => setMax(Number(target.value))} />
      {' '}
      <label>start</label>
      {' '}
      <input type='number' value={currentStart} onChange={({ target }) => setStart(Number(target.value))} />
      {' '}
      <label>finish</label>
      {' '}
      <input type='number' value={currentFinish} onChange={({ target }) => setFinish(Number(target.value))} />
      <Range
        min={min}
        max={max}
        step={1}
        startValue={currentStart}
        finishValue={currentFinish}
        onChange={({ startValue, finishValue }) => {
          setStart(startValue);
          setFinish(finishValue);
        }}
      />

      <br />

      <input
        type='range'
        min={min}
        max={max}
        step={1}
        value={currentStart}
        onChange={({ target }) => setStart(Number(target.value))}
      />
    </>
  );
};

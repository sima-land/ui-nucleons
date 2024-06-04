import { Range } from '@sima-land/ui-nucleons/range';
import { useState } from 'react';

export default {
  title: 'common/Range',
  component: Range,
  parameters: {
    layout: 'padded',
  },
};

export function WithUpdateProps() {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(20);
  const [currentStart, setStart] = useState(18);
  const [currentFinish, setFinish] = useState(12);

  return (
    <>
      <label>min</label>{' '}
      <input type='number' value={min} onChange={({ target }) => setMin(Number(target.value))} />{' '}
      <label>max</label>{' '}
      <input type='number' value={max} onChange={({ target }) => setMax(Number(target.value))} />{' '}
      <label>start</label>{' '}
      <input
        type='number'
        value={currentStart}
        onChange={({ target }) => setStart(Number(target.value))}
      />{' '}
      <label>finish</label>{' '}
      <input
        type='number'
        value={currentFinish}
        onChange={({ target }) => setFinish(Number(target.value))}
      />
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
}

WithUpdateProps.storyName = 'Тест: Обновление передаваемых свойств';

import { Range } from '@sima-land/ui-nucleons/range';

export const meta = {
  category: 'Компоненты/Range',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <>
      <h3>From 10 to 20; step = 2</h3>
      <Range min={10} max={20} step={2} />

      <h3>From 0 to 10; step = 5</h3>
      <Range min={0} max={10} step={5} />

      <h3>From 10 to 100; step = 1</h3>
      <Range min={10} max={100} step={1} />

      <h3>From 5 to 16632; step = 1</h3>
      <Range min={5} max={16632} step={1} />

      <h3>From 1000 to 100000; step = 1000</h3>
      <Range min={1000} max={10000} step={1000} />

      <h3>Disabled</h3>
      <Range min={10} max={100} step={10} disabled />
    </>
  );
}

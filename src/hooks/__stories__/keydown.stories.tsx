import { useState } from 'react';
import getDeclination from '../../helpers/get-declination';
import { useKeydown } from '../keydown';

export default {
  title: 'hooks/useKeydown',
  component: useKeydown,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [count, setCount] = useState<number>(0);
  const key = 'Space';

  useKeydown(key, () => {
    setCount(c => c + 1);
  });

  return (
    <>
      Клавиша {key} была нажата {count} {getDeclination(count, ['раз', 'раза', 'раз'])}
    </>
  );
}

Primary.storyName = 'Простой пример';

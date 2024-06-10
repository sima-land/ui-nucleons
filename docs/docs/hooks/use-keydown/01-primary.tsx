import { useKeydown } from '@sima-land/ui-nucleons/hooks';
import { getDeclination } from '@sima-land/ui-nucleons/helpers/get-declination';
import { useState } from 'react';

export const meta = {
  category: 'Хуки/useKeydown',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
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

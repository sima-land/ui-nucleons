import { Skeleton } from '@sima-land/ui-nucleons/skeleton';
import { useState, type CSSProperties } from 'react';

export const meta = {
  title: 'Тест: соотношения сторон',
  category: 'Компоненты/Skeleton',
};

const styles = {
  skeleton: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'width 250ms, height 250ms',
  } satisfies CSSProperties,
};

const ratios: CSSProperties[] = [
  {
    width: '90%',
    height: '10%',
  },
  {
    width: '10%',
    height: '90%',
  },
  {
    width: '90%',
    height: '90%',
  },
];

export default function () {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Skeleton
        style={{ ...styles.skeleton, ...ratios[index] }}
        onClick={() => setIndex(n => (n + 1) % ratios.length)}
      />
    </>
  );
}

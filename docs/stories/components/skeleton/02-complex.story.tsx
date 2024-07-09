import { Skeleton } from '@sima-land/ui-nucleons/skeleton';
import type { CSSProperties } from 'react';

export const meta = {
  title: 'Составная форма',
  category: 'Компоненты/Skeleton',
};

const styles = {
  svg: {
    width: 0,
    height: 0,
    position: 'fixed',
  } satisfies CSSProperties,

  skeleton: {
    width: '240px',
    height: '328px',
    clipPath: 'url(#skeletonShape)',
  } satisfies CSSProperties,
};

export default function () {
  return (
    <>
      <Skeleton style={styles.skeleton} />

      <svg style={styles.svg}>
        <clipPath id='skeletonShape'>
          <rect x='0' y='0' width='240' height='200' rx='4px' />
          <rect x='0' y='216' width='240' height='48' rx='4px' />
          <rect x='0' y='280' width='240' height='48' rx='4px' />
        </clipPath>
      </svg>
    </>
  );
}

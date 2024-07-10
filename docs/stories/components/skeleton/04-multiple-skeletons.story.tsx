import { Skeleton } from '@sima-land/ui-nucleons/skeleton';
import type { CSSProperties } from 'react';

export const meta = {
  title: 'Композиция',
  category: 'Компоненты/Skeleton',
};

const styles = {
  container: {
    maxWidth: '1080px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
  } satisfies CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '48px',
  } satisfies CSSProperties,

  card: {
    flexGrow: 1,
    aspectRatio: '240 / 368',
    width: 'auto',
    height: 'auto',
    clipPath: 'url(#skeletonShape)',
  } satisfies CSSProperties,

  banner: {
    width: '100%',
    height: '125px',
    borderRadius: '4px',
  } satisfies CSSProperties,

  half: {
    width: 'auto',
    height: '100%',
    gridColumn: '1 / 3',
    borderRadius: '4px',
  } satisfies CSSProperties,

  svg: {
    width: 0,
    height: 0,
    position: 'fixed',
  } satisfies CSSProperties,
};

function CardSkeleton() {
  return <Skeleton style={styles.card} />;
}

export default function () {
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <Skeleton style={styles.banner} />

      <div style={styles.grid}>
        <Skeleton style={styles.half} />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <svg style={styles.svg}>
        <clipPath id='skeletonShape' clipPathUnits='objectBoundingBox'>
          <rect x='0' y='0' width='1' height='.652' rx='.016' />
          <rect x='0' y='.695' width='1' height='.130' rx='.016' />
          <rect x='0' y='.869' width='1' height='.130' rx='.016' />
        </clipPath>
      </svg>
    </div>
  );
}

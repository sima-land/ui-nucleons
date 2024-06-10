import { useIntersection } from '@sima-land/ui-nucleons/hooks';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import { CSSProperties, useMemo, useRef, useState } from 'react';

export const meta = {
  title: 'Простой пример',
  category: 'Хуки/useIntersection',
};

const styles = {
  grid: {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
  } satisfies CSSProperties,

  title: {
    gridRow: '1',
    gridColumn: '1 / 5',
  } satisfies CSSProperties,

  item: {
    aspectRatio: '1 / 1',
    background: COLORS.get('basic-gray12'),
    borderRadius: '8px',
    transition: 'background 0.2s ease-in-out',
  } satisfies CSSProperties,
};

function Item() {
  const ref = useRef<HTMLDivElement>(null);
  const [viewing, setViewing] = useState<boolean>(false);

  // ВАЖНО: используем useMemo чтобы не пересоздавать observer при каждом рендере
  const options = useMemo<IntersectionObserverInit>(() => ({ threshold: 1 }), []);

  useIntersection(
    ref,
    entry => {
      setViewing(entry.isIntersecting);
    },
    options,
  );

  const style: CSSProperties = {
    ...styles.item,
    ...(viewing && { background: COLORS.get('basic-blue') }),
  };

  return <div ref={ref} style={style}></div>;
}

export default function () {
  return (
    <>
      <div style={styles.grid}>
        <h3 style={styles.title}>Квадраты, которые полностью видны будут синими</h3>
        {[...Array(500).keys()].map(index => (
          <Item key={index} />
        ))}
      </div>
    </>
  );
}

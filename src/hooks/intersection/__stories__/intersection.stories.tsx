import React, { CSSProperties, useMemo, useRef, useState } from 'react';
import { COLORS } from '../../../colors';
import { useIntersection } from '..';

export default {
  title: 'hooks/useIntersection',
  parameters: {
    layout: 'padded',
  },
};

function Square() {
  const ref = useRef<HTMLDivElement>(null);
  const [viewing, toggleViewing] = useState<boolean>(false);

  // Важно: используем useMemo чтобы не пересоздавать observer при каждом рендере
  const options = useMemo<IntersectionObserverInit>(() => ({ threshold: 1 }), []);

  useIntersection(
    ref,
    ({ isIntersecting }) => {
      toggleViewing(isIntersecting);
    },
    options,
  );

  const style: CSSProperties = {
    aspectRatio: '1 / 1',
    background: COLORS.get('basic-gray12'),
    borderRadius: '8px',
    transition: 'background 0.2s ease-in-out',
    ...(viewing && { background: COLORS.get('basic-blue') }),
  };

  return <div ref={ref} style={style} />;
}

export const Primary = () => {
  const gridStyle: CSSProperties = {
    maxWidth: '1024px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    padding: '8px',
  };

  const titleStyle: CSSProperties = {
    gridRow: '1',
    gridColumn: '1 / 5',
  };

  return (
    <>
      <div style={gridStyle}>
        <h3 style={titleStyle}>Квадраты, которые полностью видны будут синими</h3>
        {[...Array(500).keys()].map(index => (
          <Square key={index} />
        ))}
      </div>
    </>
  );
};

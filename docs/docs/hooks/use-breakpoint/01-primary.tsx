import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';
import { CSSProperties } from 'react';

export const meta = {
  title: 'Простой пример',
  category: 'Хуки/useBreakpoint',
};

const styles = {
  indicator: {
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    marginBottom: '12px',
    transition: 'background .2s ease-out',
    background: '#f5f5f5',
  } satisfies CSSProperties,

  active: {
    background: '#00ff0032',
  } satisfies CSSProperties,
};

function Indicator({ query }: { query: string }) {
  const matches = useBreakpoint(query);

  return (
    <div style={{ ...styles.indicator, ...(matches && styles.active) }}>
      {matches ? '✅' : '❌'} {query}
    </div>
  );
}

export default function () {
  return (
    <>
      <Indicator query='xs+' />
      <Indicator query='xs-' />
    </>
  );
}

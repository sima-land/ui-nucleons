import { CSSProperties } from 'react';
import { BreakpointProvider, useBreakpoint } from '..';

export default {
  title: 'hooks/useBreakpoint',
  component: useBreakpoint,
  parameters: {
    layout: 'padded',
  },
};

function DemoBlock({ query }: { query: string }) {
  const matches = useBreakpoint(query);

  const styles: CSSProperties = {
    height: 100,
    background: matches ? '#00ff0032' : '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 12,
    transition: 'background .2s ease-out',
  };

  return (
    <div style={styles}>
      {matches ? '✅' : '❌'} {query}
    </div>
  );
}

export function Primary() {
  return (
    <BreakpointProvider>
      <DemoBlock query='xs+' />
      <DemoBlock query='xs-' />
    </BreakpointProvider>
  );
}

Primary.storyName = 'Простой пример';

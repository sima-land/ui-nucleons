import React from 'react';
import { BreakpointProvider, useBreakpoint } from '..';

export default {
  title: 'hooks/useBreakpoint',
  parameters: {
    layout: 'padded',
  },
};

const DemoBlock = ({ query }: { query: string }) => {
  const matches = useBreakpoint(query);

  const styles: React.CSSProperties = {
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
};

export const Primary = () => (
  <BreakpointProvider>
    <DemoBlock query='xs+' />
    <DemoBlock query='xs-' />
  </BreakpointProvider>
);

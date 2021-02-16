import React from 'react';
import { Spinner } from '..';

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  demo: {
    marginBottom: 20,
  },
};

export const Primary = () => (
  <>
    <div style={styles.demo}>
      <h3>size=&apos;small&apos;</h3>
      <Spinner size='small' />
    </div>

    <div style={styles.demo}>
      <h3>size=&apos;medium&apos;</h3>
      <Spinner size='medium' />
    </div>

    <div style={styles.demo}>
      <h3>size=&apos;large&apos;</h3>
      <Spinner size='large' />
    </div>
  </>
);

export const ColorVariants = () => (
  <div style={{ ...styles.demo, background: '#1f84db', padding: 20, paddingTop: 6 }}>
    <h3 style={{ color: 'white' }}>color=&apos;white&apos;</h3>
    <Spinner color='white' />
  </div>
);

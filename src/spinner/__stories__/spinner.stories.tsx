import React from 'react';
import { Spinner } from '..';
import { upperFirst } from 'lodash';

export default {
  title: 'common/Spinner',
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

export function Primary() {
  return (
    <>
      {(['small', 'medium', 'large'] as const).map(size => (
        <div key={size} style={styles.demo}>
          <h4>{upperFirst(size)}</h4>
          <Spinner size={size} />
        </div>
      ))}
    </>
  );
}

Primary.storyName = 'Простой пример';

export function ColorVariants() {
  return (
    <div style={{ ...styles.demo, background: '#1f84db', padding: 20, paddingTop: 6 }}>
      <h3 style={{ color: 'white' }}>color=&apos;white&apos;</h3>
      <Spinner color='basic-white' />
    </div>
  );
}

ColorVariants.storyName = 'Варианты цветов';

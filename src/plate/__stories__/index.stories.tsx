import React from 'react';
import { Plate } from '..';

export default {
  title: 'common/Plate',
  component: Plate,
  parameters: {
    layout: 'padded',
  },
};

const styles: React.CSSProperties = {
  width: 320,
  height: 120,
  padding: 24,
  marginBottom: 32,
};

export function Primary() {
  return (
    <>
      <Plate shadow='z1' rounds='s' style={styles}>
        Plate это просто div с возможностью легко задавать тень и скругления...
      </Plate>

      <Plate shadow='z2' rounds='s' style={styles}>
        Plate это просто div с возможностью легко задавать тень и скругления...
      </Plate>

      <Plate shadow='z3' rounds='m' style={styles}>
        Plate это просто div с возможностью легко задавать тень и скругления...
      </Plate>

      <Plate shadow='z4' rounds='m' style={styles}>
        Plate это просто div с возможностью легко задавать тень и скругления...
      </Plate>
    </>
  );
}

Primary.storyName = 'Простой пример';

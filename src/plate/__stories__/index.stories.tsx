import React from 'react';
import { Plate } from '..';

export default {
  title: 'Plate',
  component: Plate,
  parameters: {
    layout: 'padded',
  },
};

const styles: React.CSSProperties = {
  width: 320,
  height: 120,
  padding: 24,
  margin: 'auto',
  marginBottom: 32,
};

export const Primary = () => (
  <>
    <Plate
      shadow='z1'
      rounds='s'
      style={styles}
    >
      Plate это просто div с возможностью легко задавать тень и скругления...
    </Plate>

    <Plate
      shadow='z2'
      rounds='s'
      style={styles}
    >
      Plate это просто div с возможностью легко задавать тень и скругления...
    </Plate>

    <Plate
      shadow='z3'
      rounds='m'
      style={styles}
    >
      Plate это просто div с возможностью легко задавать тень и скругления...
    </Plate>

    <Plate
      shadow='z4'
      rounds='m'
      style={styles}
    >
      Plate это просто div с возможностью легко задавать тень и скругления...
    </Plate>
  </>
);

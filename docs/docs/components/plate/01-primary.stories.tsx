import { Plate } from '@sima-land/ui-nucleons/plate';
import { CSSProperties } from 'react';

export const meta = {
  category: 'Компоненты/Plate',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

const styles: CSSProperties = {
  width: 320,
  height: 120,
  padding: 24,
  marginBottom: 32,
};

export default function Primary() {
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

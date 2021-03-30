import React from 'react';
import { Price } from '..';

const values = [
  '0',
  '0.1',
  '0.15',
  '1000',
  '2000.5',
  '3000.56',
  '4000.567',
  '1234567',
  '1234567.8',
  '1234567.89',
];

export default {
  title: 'Price',
  component: Price,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    {values.map((value, index) => (
      <div key={index} style={{ fontSize: 24, marginBottom: 16 }}>
        <Price value={value} currencyGrapheme='₽' />
      </div>
    ))}
  </>
);

export const CrossedOut = () => (
  <>
    {values.map((value, index) => (
      <div key={index} style={{ fontSize: 24, marginBottom: 16 }}>
        <Price value={value} currencyGrapheme='₽' crossedOut />
      </div>
    ))}
  </>
);

export const GraphemeBefore = () => (
  <>
    {values.map((value, index) => (
      <div key={index} style={{ fontSize: 24, marginBottom: 16 }}>
        <Price value={value} currencyGrapheme='$' graphemeBefore />
      </div>
    ))}
  </>
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import Price from '../';

const graphemes = ['₽', '€', '$', '₴', 'Br'];
const margin = {
  marginRight: '15px',
};

storiesOf('Price', module)
  .add('default appearance', () => <Price value='1234' />)
  .add('with grapheme before price and bold value', () =>
    graphemes.map(grapheme => (
      <span style={margin}>
        <Price value='1234.56' currencyGrapheme={grapheme} beforePrice boldIntegerPart />
      </span>
    )))
  .add('with fractional part', () =>
    graphemes.map(grapheme => (
      <span style={margin}>
        <Price value='1234.56' currencyGrapheme={grapheme} withFractionalPart />
      </span>
    )))
  .add('with bold integer part', () =>
    graphemes.map(grapheme => (
      <span style={margin}>
        <Price value='1234.56' currencyGrapheme={grapheme} withFractionalPart boldIntegerPart />
      </span>
    )))
  .add('with bold integer part and fractional in super', () =>
    graphemes.map(grapheme => (
      <span style={margin}>
        <Price value='1234.56' currencyGrapheme={grapheme} withFractionalPart boldIntegerPart fractionalInSuper />
      </span>
    )));


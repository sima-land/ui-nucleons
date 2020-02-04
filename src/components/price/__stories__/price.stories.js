import React from 'react';
import { storiesOf } from '@storybook/react';
import Price from '../';
import { graphemes } from '../../constants';

const style = {
  marginRight: '15px',
  lineHeight: 1,
};

storiesOf('Price', module)
  .add('default appearance', () => <Price value={1234} />)
  .add('with grapheme before price and bold value', () =>
    graphemes.map((grapheme, index) => (
      <span key={index} style={style}>
        <Price value={1234.56} currencyGrapheme={grapheme} graphemeBeforePrice boldIntegerPart />
      </span>
    )))
  .add('with fractional part', () =>
    graphemes.map((grapheme, index) => (
      <span key={index * 2} style={style}>
        <Price value={1234.56} currencyGrapheme={grapheme} withFractionalPart />
      </span>
    )))
  .add('with bold integer part', () =>
    graphemes.map((grapheme, index) => (
      <span key={index * 3} style={style}>
        <Price value={1234.56} currencyGrapheme={grapheme} withFractionalPart boldIntegerPart />
      </span>
    )))
  .add('with bold integer part and fractional in super', () =>
    graphemes.map((grapheme, index) => (
      <span key={index * 4} style={style}>
        <Price value={1234.56} currencyGrapheme={grapheme} withFractionalPart boldIntegerPart fractionalInSuper />
      </span>
    )))
  .add('old price appearance', () =>
    graphemes.map((grapheme, index) => (
      <span key={index} style={style}>
        <Price value={1234.56} currencyGrapheme={grapheme} old boldIntegerPart />
      </span>
    )));

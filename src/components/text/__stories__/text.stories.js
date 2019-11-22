import React from 'react';
import { storiesOf } from '@storybook/react';
import Text, { SIZES, COLORS, WEIGHTS, ALIGNS } from '../index';

storiesOf('Text', module)
  .add('without props', () => (
    <Text>Text without props is just a span</Text>
  ))
  .add('"size" prop variations', () => [...SIZES].map(
    size => (
      <div>
        <Text size={size}>
          Text with size {size} px
        </Text>
      </div>
    )
  ))
  .add('"color" prop variations', () => [...COLORS].map(
    color => (
      <div>
        <Text size={16} color={color}>
          Text with color "{color}"
        </Text>
      </div>
    )
  ))
  .add('"weight" prop variations', () => [...WEIGHTS].map(
    weight => (
      <div>
        <Text size={16} weight={weight}>
          Text with weight {weight}
        </Text>
      </div>
    )
  ))
  .add('"align" prop variations', () => [...ALIGNS].map(
    align => (
      <div style={{ maxWidth: 320 }}>
        <h3>Text with align {align}</h3>
        <Text element='div' size={16} align={align}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus, ex eos aliquid iusto nam recusandae iure saepe pariatur harum sed.
        </Text>
      </div>
    )
  ));
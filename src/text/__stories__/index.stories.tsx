import React from 'react';
import { Text, ALIGNS } from '../index';
import { COLORS } from '../../colors';
import { SIZES, WEIGHTS } from '../../styling/fonts';

export default {
  title: 'common/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <div style={{ maxWidth: 320 }}>
    <h3>Just text</h3>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.
    </Text>

    <h3>Truncated text</h3>
    <Text element='div' truncate>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.
    </Text>

    <h3>nowrap: true</h3>
    <div style={{ width: 200, border: '1px solid #f00' }}>
      <Text nowrap>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.
      </Text>
    </div>
  </div>
);

export const SizeVariants = () => [...SIZES].map(
  (size, index) => (
    <div key={index} style={{ marginBottom: 24 }}>
      <Text size={size}>
        Text with size {size} px
      </Text>
    </div>
  )
);

export const ColorVariants = () => [...COLORS.keys() as any].map(
  (color, index) => (
    <div key={index}>
      <Text size={16} color={color} weight={700}>
        {color}
      </Text>
    </div>
  )
);

export const WeightVariants = () => [...WEIGHTS].map(
  (weight, index) => (
    <div key={index}>
      <Text size={16} weight={weight}>
        Текст с насыщеностью начертания: {weight}
      </Text>
    </div>
  )
);

export const AlignVariants = () => [...ALIGNS].map(
  (align, index) => (
    <div key={index} style={{ maxWidth: 320 }}>
      <h3>Text with align {align}</h3>
      <Text element='div' size={16} align={align}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus, ex eos aliquid iusto nam recusandae iure saepe pariatur harum sed.
      </Text>
    </div>
  )
);

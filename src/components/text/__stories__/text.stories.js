import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Text, { ALIGNS } from '../index';
import cutTextContent from '../../helpers/cut-text-content';
import isElement from 'lodash/isElement';
import { COLORS } from '../../constants';
import { WEIGHTS } from '../../styling/fonts';

storiesOf('Text', module)
  .add('Base usage', () => (
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
  ))
  .add('"size" prop variations', () => [12, 14, 16, 20, 24, 28, 32, 48, 64].map(
    (size, index) => (
      <div key={index} style={{ marginBottom: 24 }}>
        <Text size={size}>
          Text with size {size} px
        </Text>
      </div>
    )
  ))
  .add('"color" prop variations', () => [...COLORS.keys()].map(
    (color, index) => (
      <div key={index}>
        <Text size={16} color={color} weight={700}>
          {color}
        </Text>
      </div>
    )
  ))
  .add('"weight" prop variations', () => [...WEIGHTS].map(
    (weight, index) => (
      <div key={index}>
        <Text size={16} weight={weight}>
          Текст с насыщеностью начертания: {weight}
        </Text>
      </div>
    )
  ))
  .add('"align" prop variations', () => [...ALIGNS].map(
    (align, index) => (
      <div key={index} style={{ maxWidth: 320 }}>
        <h3>Text with align {align}</h3>
        <Text element='div' size={16} align={align}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus, ex eos aliquid iusto nam recusandae iure saepe pariatur harum sed.
        </Text>
      </div>
    )
  ))
  .add('cutTextContent demo', () => {
    const textRef = useRef(null);

    useLayoutEffect(() => {
      const { current: element } = textRef;
      isElement(element) && cutTextContent(element, 50);
    }, []);

    return (
      <div ref={textRef} style={{ width: '300px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid deserunt earum nam rem. Consectetur,
        dignissimos dolore dolores eos esse itaque iusto nemo optio quaerat quo ratione reprehenderit voluptatem
        voluptates?
      </div>
    );
  });

import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Text, { SIZES, WEIGHTS, ALIGNS } from '../index';
import cutTextContent from '../../helpers/cut-text-content';
import isElement from 'lodash/isElement';
import { COLORS } from '../../constants';

/**
 * Обрезает текст до заданной высоты.
 * @return {ReactElement} Обрезанный текст с добавлением многоточия.
 */
const CutTextContent = () => {
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
  );};

storiesOf('Text', module)
  .add('with cutTextContent helper', () => (
    <Text>
      <CutTextContent />
    </Text>
  ))
  .add('"size" prop variations', () => [...SIZES].map(
    (size, index) => (
      <div key={index}>
        <Text size={size}>
          Text with size {size} px
        </Text>
      </div>
    )
  ))
  .add('"color" prop variations', () => [...COLORS.keys()].map(
    (color, index) => (
      <div key={index}>
        <Text size={16} color={color} weight={800}>
          {color}
        </Text>
      </div>
    )
  ))
  .add('"weight" prop variations', () => [...WEIGHTS].map(
    (weight, index) => (
      <div key={index}>
        <Text size={16} weight={weight}>
          Text with weight {weight}
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
  ));

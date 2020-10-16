import React from 'react';
import { storiesOf } from '@storybook/react';
import ModifierButton from '..';
import { random } from 'lodash';

const mapModifier = (modifier, index) => {
  let result = modifier;

  switch (index) {
    case 1:
      result = { ...modifier, isMarkdown: true };
      break;
    case 2:
      result = { ...modifier, count: random(1, 200) };
      break;
    case 3:
      result = { ...modifier, count: random(1, 200), isMarkdown: true };
      break;
  }

  return result;
};

const textModifiers = [
  { content: '30 (98-104см)' },
  { content: '32 (110-116см)' },
  { content: '34 (122-128см)' },
  { content: '36 (134-140см)' },
];

const colorModifiers = [
  {
    name: '30 (98-104см)',
    color: 'red',
    image: 'https://cdn2.static1-sima-land.com/items/3485686/0/140.jpg?v=1541497336',
  },
  {
    name: '32 (110-116см)',
    color: '#ffab00',
  },
  {
    name: '34 (122-128см)',
    color: '#1f84db',
  },
  {
    name: '36 (134-140см)',
    color: 'green',
  },
];

const imageItems = [
  {
    name: 'желтый',
    type: 'image',
    image: 'https://cdn2.static1-sima-land.com/items/3609321/0/140.jpg?v=1547789627',
  },
  {
    name: 'красный',
    type: 'image',
    image: 'https://cdn2.static1-sima-land.com/items/3609268/0/140.jpg?v=1547789630',
  },
  {
    name: 'розовый',
    type: 'image',
    color: '',
    image: 'https://cdn2.static1-sima-land.com/items/3607801/0/140.jpg?v=1547706544',
  },
  {
    name: 'фиолетовый',
    type: 'image',
    image: 'https://cdn2.static1-sima-land.com/items/3607805/0/140.jpg?v=1554450174',
  },
];

const stateVariants = [
  ['обычный', { selected: false }],
  ['выбранный', { selected: true }],
];

storiesOf('ModifierButton', module)
  .add('Варианты', () => (
    <>
      {stateVariants.map(([stateName, stateProps], stateIndex) => (
        <React.Fragment key={stateIndex}>
          <h2>Состояние: {stateName}</h2>

          <h3>Текст</h3>
          {textModifiers.map(mapModifier).map((props, index) => (
            <div key={index} style={{ display: 'inline-block', margin: 10 }}>
              <ModifierButton
                type='text'
                {...props}
                {...stateProps}
              />
            </div>
          ))}

          <h3>Цвет</h3>
          {colorModifiers.map(mapModifier).map((props, index) => (
            <div key={index} style={{ display: 'inline-block', margin: 10 }}>
              <ModifierButton
                type='color'
                {...props}
                {...stateProps}
              />
            </div>
          ))}

          <h3>Изображение</h3>
          {imageItems.map(mapModifier).map((props, index) => (
            <div key={index} style={{ display: 'inline-block', margin: 10 }}>
              <ModifierButton
                type='image'
                {...props}
                {...stateProps}
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  ))
  .add('Служебное', () => (
    <>
      <h3>Текст ограничен блоком</h3>
      <div style={{ maxWidth: 256 }}>
        <ModifierButton
          type='text'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, atque.'
        />
      </div>
    </>
  ));

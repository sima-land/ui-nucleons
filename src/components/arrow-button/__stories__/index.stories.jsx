import React from 'react';
import ArrowButton from '..';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const sizes = ['l', 's'];

const directions = ['up', 'right', 'down', 'left'];

storiesOf('ArrowButton', module)
  .add('Variants', () => (
    <>
      <h1>Кнопка-стрелка</h1>
      <p>Используется в галереях и слайдерах</p>
      {sizes.map(size => (
        <div key={size} style={{ paddingTop: 16 }}>
          <h3>Size: {size}</h3>
          {directions.map(direction => (
            <div key={direction} style={{ display: 'inline-block', paddingRight: 32 }}>
              <ArrowButton
                aria-label={direction}
                size={size}
                direction={direction}
                onClick={() => action('onClick')(`${size}, ${direction}`)}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  ));

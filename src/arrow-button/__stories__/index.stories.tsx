import React from 'react';
import { ArrowButton, ArrowButtonSize, ArrowDirection } from '..';
import { action } from '@storybook/addon-actions';

const sizes: ArrowButtonSize[] = ['l', 's'];

const directions: ArrowDirection[] = ['up', 'right', 'down', 'left'];

export default {
  title: 'common/ArrowButton',
  component: ArrowButton,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      {sizes.map(size => (
        <div key={size} style={{ marginBottom: 16 }}>
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
  );
}

Primary.storyName = 'Простой пример';

export function Disabled() {
  return (
    <>
      {sizes.map(size => (
        <div key={size} style={{ marginBottom: 16 }}>
          <h3>Size: {size}</h3>
          {directions.map(direction => (
            <div key={direction} style={{ display: 'inline-block', paddingRight: 32 }}>
              <ArrowButton
                disabled
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
  );
}

Disabled.storyName = 'Состояние disabled';

import React, { ChangeEvent } from 'react';
import { action } from '@storybook/addon-actions';
import { RadioButton } from '..';

export default {
  title: 'common/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    action('Change')({ checked: event.target.checked });
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <label>
        <RadioButton onChange={handleChange} name='number' id='number-one' defaultChecked /> One
      </label>

      <label>
        <RadioButton onChange={handleChange} name='number' id='number-two' /> Two
      </label>

      <label>
        <RadioButton onChange={handleChange} name='number' id='number-three' /> Three
      </label>

      <label>
        <RadioButton onChange={handleChange} name='number' id='number-four' disabled /> Four
        (disabled)
      </label>

      <label>
        <RadioButton
          onChange={handleChange}
          name='number-disabled'
          id='number-five'
          disabled
          defaultChecked
        />{' '}
        Five (checked + disabled)
      </label>
    </form>
  );
}

Primary.storyName = 'Простой пример';

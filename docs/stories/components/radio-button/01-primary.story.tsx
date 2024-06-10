import { RadioButton } from '@sima-land/ui-nucleons/radio-button';

export const meta = {
  category: 'Компоненты/RadioButton',
  title: 'Простой пример',
};

export default function Primary() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <label>
        <RadioButton name='number' id='number-one' defaultChecked /> One
      </label>

      <label>
        <RadioButton name='number' id='number-two' /> Two
      </label>

      <label>
        <RadioButton name='number' id='number-three' /> Three
      </label>

      <label>
        <RadioButton name='number' id='number-four' disabled /> Four (disabled)
      </label>

      <label>
        <RadioButton name='number-disabled' id='number-five' disabled defaultChecked /> Five
        (checked + disabled)
      </label>
    </form>
  );
}

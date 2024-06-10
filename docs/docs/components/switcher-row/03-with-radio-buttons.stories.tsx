import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';
import { RadioButton } from '@sima-land/ui-nucleons/radio-button';

export const meta = {
  category: 'Компоненты/SwitcherRow',
  title: 'Вместе с RadioButton',
  parameters: {
    layout: 'padded',
  },
};

export default function WithRadioButtons() {
  return (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SwitcherRow>
        <RadioButton id='example-one' name='example-number' defaultChecked />
        <SwitcherRow.Label>Пункт первый</SwitcherRow.Label>
        <SwitcherRow.Comment>Вот прям первый</SwitcherRow.Comment>
      </SwitcherRow>

      <SwitcherRow>
        <RadioButton id='example-two' name='example-number' />
        <SwitcherRow.Label>Пункт второй</SwitcherRow.Label>
        <SwitcherRow.Comment>Ровно по середине</SwitcherRow.Comment>
      </SwitcherRow>

      <SwitcherRow>
        <RadioButton id='example-three' name='example-number' />
        <SwitcherRow.Label>И пункт третий</SwitcherRow.Label>
        <SwitcherRow.Comment>Но не менее важный</SwitcherRow.Comment>
      </SwitcherRow>
    </div>
  );
}

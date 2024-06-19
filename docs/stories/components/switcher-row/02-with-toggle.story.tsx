import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';
import { Toggle } from '@sima-land/ui-nucleons/toggle';

export const meta = {
  category: 'Компоненты/SwitcherRow',
  title: 'Вместе с Toggle',
};

export default function WithToggle() {
  return (
    <SwitcherRow style={{ maxWidth: '400px' }}>
      <Toggle id='example-toggle' defaultChecked />
      <SwitcherRow.Label>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae commodi quos!
      </SwitcherRow.Label>
      <SwitcherRow.Comment>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam?
      </SwitcherRow.Comment>
    </SwitcherRow>
  );
}

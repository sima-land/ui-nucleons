import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';
import { Toggle } from '@sima-land/ui-nucleons/toggle';

export default {
  title: 'common/SwitcherRow',
  component: SwitcherRow,
  parameters: {
    layout: 'padded',
  },
};

export function WithToggle() {
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

WithToggle.storyName = 'Вместе с Toggle';

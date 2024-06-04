import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';
import { Checkbox } from '@sima-land/ui-nucleons/checkbox';

export default {
  title: 'common/SwitcherRow',
  component: SwitcherRow,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <SwitcherRow>
      <Checkbox id='example-checkbox' defaultChecked />
      <SwitcherRow.Label>Получать рассылку на почту</SwitcherRow.Label>
      <SwitcherRow.Comment>На самом деле никакой рассылки не будет</SwitcherRow.Comment>
    </SwitcherRow>
  );
}

Primary.storyName = 'Простой пример';

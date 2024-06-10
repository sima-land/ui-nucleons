import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';
import { Checkbox } from '@sima-land/ui-nucleons/checkbox';

export const meta = {
  category: 'Компоненты/SwitcherRow',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <SwitcherRow>
      <Checkbox id='example-checkbox' defaultChecked />
      <SwitcherRow.Label>Получать рассылку на почту</SwitcherRow.Label>
      <SwitcherRow.Comment>На самом деле никакой рассылки не будет</SwitcherRow.Comment>
    </SwitcherRow>
  );
}

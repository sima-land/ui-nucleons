import { Toggle } from '@sima-land/ui-nucleons/toggle';

export const meta = {
  category: 'Компоненты/Toggle',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <>
      <Toggle defaultChecked />
    </>
  );
}

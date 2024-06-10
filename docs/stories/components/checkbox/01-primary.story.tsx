import { Checkbox } from '@sima-land/ui-nucleons/checkbox';

export const meta = {
  category: 'Компоненты/Checkbox',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function () {
  return (
    <>
      <Checkbox defaultChecked />
    </>
  );
}

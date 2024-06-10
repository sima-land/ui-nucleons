import { Button } from '@sima-land/ui-nucleons/button';

export const meta = {
  category: 'Компоненты/Button',
  title: 'Варианты размеров',

  parameters: {
    layout: 'padded',
  },
};

export default function () {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button size='m'>Просто кнопка</Button>

      <Button size='s'>Просто кнопка</Button>

      <Button size='xs'>Просто кнопка</Button>
    </div>
  );
}

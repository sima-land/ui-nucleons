import { Button } from '@sima-land/ui-nucleons/button';

export const meta = {
  category: 'Компоненты/Button',
  title: 'Варианты цветов',
};

export default function () {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button viewType='primary'>Primary</Button>

      <Button viewType='secondary'>Secondary</Button>

      <Button viewType='success'>Success</Button>

      <Button viewType='info'>Info</Button>
    </div>
  );
}

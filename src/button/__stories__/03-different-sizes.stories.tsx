import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentSizes() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button size='m'>Просто кнопка</Button>

      <Button size='s'>Просто кнопка</Button>

      <Button size='xs'>Просто кнопка</Button>
    </div>
  );
}

DifferentSizes.storyName = 'Варианты размеров';

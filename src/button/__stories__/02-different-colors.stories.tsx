import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentColors() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button viewType='primary'>Primary</Button>

      <Button viewType='secondary'>Secondary</Button>

      <Button viewType='success'>Success</Button>

      <Button viewType='info'>Info</Button>
    </div>
  );
}

DifferentColors.storyName = 'Варианты цветов';

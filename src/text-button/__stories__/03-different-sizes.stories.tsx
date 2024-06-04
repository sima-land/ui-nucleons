import { TextButton } from '@sima-land/ui-nucleons/text-button';

export default {
  title: 'common/TextButton',
  component: TextButton,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TextButton size='s'>Просто кнопка</TextButton>
      <TextButton size='m'>Просто кнопка</TextButton>
    </div>
  );
}

DifferentSizes.storyName = 'Варианты размеров';

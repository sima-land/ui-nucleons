import { TextButton } from '@sima-land/ui-nucleons/text-button';

export default {
  title: 'common/TextButton',
  component: TextButton,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentColors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TextButton color='basic-blue'>basic-blue</TextButton>

      <TextButton color='basic-gray87'>basic-gray87</TextButton>

      <TextButton color='basic-gray38'>basic-gray38</TextButton>

      <TextButton color='additional-red'>additional-red</TextButton>

      <TextButton color='additional-teal'>additional-teal</TextButton>
    </div>
  );
}

DifferentColors.storyName = 'Варианты цветов';
